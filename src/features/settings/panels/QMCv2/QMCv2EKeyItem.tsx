import { MdDelete, MdVpnKey } from 'react-icons/md';
import { qmc2DeleteKey, qmc2UpdateKey } from '../../settingsSlice';
import { useAppDispatch } from '~/hooks';
import { memo } from 'react';

export const QMCv2EKeyItem = memo(({ id, name, ekey, i }: { id: string; name: string; ekey: string; i: number }) => {
  const dispatch = useAppDispatch();

  const updateKey = (prop: 'name' | 'ekey', e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(qmc2UpdateKey({ id, field: prop, value: e.target.value }));
  const deleteKey = () => dispatch(qmc2DeleteKey({ id }));

  const isValidEKey = [364, 704].includes(ekey.length);

  return (
    <li className="list-row items-center">
      <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-gray-500 bg-gray-200 rounded-full">
        {i + 1}
      </div>

      <div className="join join-vertical flex-1">
        <label className="input w-full rounded-tl-md rounded-tr-md">
          <span className="cursor-default select-none">文件名</span>
          <input
            type="text"
            className="font-mono"
            placeholder="文件名，包括后缀名。如 “AAA - BBB.mflac”"
            value={name}
            onChange={(e) => updateKey('name', e)}
          />
        </label>
        <label className="input w-full rounded-bl-md rounded-br-md mt-[-1px]">
          <span className="cursor-default inline-flex items-center gap-1 select-none">
            密钥 <MdVpnKey />
          </span>
          <input
            type="text"
            className="font-mono"
            placeholder="密钥，通常包含 364 或 704 位字符，没有空格。"
            value={ekey}
            onChange={(e) => updateKey('ekey', e)}
          />
          <span className={isValidEKey ? 'text-green-600' : 'text-red-600'}>
            <code>{ekey.length || '?'}</code>
          </span>
        </label>
      </div>

      <button type="button" className="btn btn-error btn-sm px-1 btn-outline" onClick={deleteKey}>
        <MdDelete className="size-6" />
      </button>
    </li>
  );
});
