import React, { Fragment, useId } from 'react';

export type InstructionTab = {
  id: string | number;
  label: React.ReactNode;
  content: React.ReactNode;
};

export interface InstructionsTabsProps {
  tabs: InstructionTab[];
}

export function InstructionsTabs({ tabs }: InstructionsTabsProps) {
  const id = useId();
  return (
    <div className="tabs tabs-lift max-h-[32rem] pb-4">
      {tabs.map(({ id: _tabId, label, content }, index) => (
        <Fragment key={_tabId}>
          <label className="tab">
            <input type="radio" name={id} defaultChecked={index === 0} />
            {label}
          </label>
          <div className="tab-content border-base-300 bg-base-100 px-4 py-2 overflow-y-auto max-h-[30rem]">
            {content}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
