import { useAppDispatch, useAppSelector } from '~/hooks';
import { commitStagingChange, discardStagingChanges } from './settingsSlice';
import { selectIsSettingsNotSaved } from './settingsSelector';
import { NavLink, Outlet } from 'react-router';
import { SETTINGS_TABS } from '~/features/settings/settingsTabs.tsx';
import { MdOutlineSettingsBackupRestore } from 'react-icons/md';
import { toast } from 'react-toastify';

export function Settings() {
  const dispatch = useAppDispatch();

  const handleResetSettings = () => {
    dispatch(discardStagingChanges());

    toast.info(() => (
      <div>
        <h3 className="text-lg font-bold">未储存的设定已舍弃</h3>
        <p className="text-sm">已还原到更改前的状态。</p>
      </div>
    ));
  };
  const handleApplySettings = () => {
    dispatch(commitStagingChange());
    toast.success('设定已应用');
  };
  const isSettingsNotSaved = useAppSelector(selectIsSettingsNotSaved);

  return (
    <div className="flex flex-col flex-1 container w-full">
      <div role="tablist" className="tabs tabs-border w-full justify-center gap-2">
        {Object.entries(SETTINGS_TABS).map(([id, { name }]) => (
          <NavLink className="link link-neutral" key={id} to={`/settings/${id}`} role="tab">
            {name}
          </NavLink>
        ))}
      </div>

      {/* TODO: ensure this flex div does not overflow */}
      <div className="flex flex-1 flex-col h-full overflow-auto">
        <Outlet />
      </div>

      <footer className="flex flex-row gap-2 w-full py-3">
        <div className="grow">
          {isSettingsNotSaved ? (
            <span>
              有未储存的更改，<span className="text-red-600">设定将在保存后生效</span>
            </span>
          ) : (
            <span className="text-base-700">设定将在保存后生效</span>
          )}
        </div>

        <div className="flex flex-row gap-2">
          <button
            className="btn btn-sm btn-ghost text-error"
            onClick={handleResetSettings}
            title="放弃未储存的更改，将设定还原未储存前的状态。"
          >
            <MdOutlineSettingsBackupRestore className="size-4" />
          </button>
          <button className="btn btn-sm btn-primary" onClick={handleApplySettings}>
            保存
          </button>
        </div>
      </footer>

      {/*        <VStack mt="4" alignItems="flex-start" w="full">*/}
      {/*          <Flex flexDir="row" gap="2" w="full">*/}
      {/*            <Center>*/}
      {/*              {isSettingsNotSaved ? (*/}
      {/*                <Box color="gray">*/}
      {/*                  有未储存的更改{' '}*/}
      {/*                  <chakra.span color="red" wordBreak="keep-all">*/}
      {/*                    设定将在保存后生效*/}
      {/*                  </chakra.span>*/}
      {/*                </Box>*/}
      {/*              ) : (*/}
      {/*                <Box color="gray">设定将在保存后生效</Box>*/}
      {/*              )}*/}
      {/*            </Center>*/}
      {/*            <Spacer />*/}
      {/*            <HStack gap="2" justifyContent="flex-end">*/}
      {/*              <IconButton*/}
      {/*                icon={<Icon as={MdOutlineSettingsBackupRestore} />}*/}
      {/*                onClick={handleResetSettings}*/}
      {/*                colorScheme="red"*/}
      {/*                variant="ghost"*/}
      {/*                title="放弃未储存的更改，将设定还原未储存前的状态。"*/}
      {/*                aria-label="放弃未储存的更改"*/}
      {/*              />*/}
      {/*              <Button onClick={handleApplySettings}>保存</Button>*/}
      {/*            </HStack>*/}
      {/*          </Flex>*/}
      {/*        </VStack>*/}
      {/*      </Flex>*/}
      {/*    ))}*/}
      {/*  </TabPanels>*/}
      {/*</Tabs>*/}
    </div>
  );
}
