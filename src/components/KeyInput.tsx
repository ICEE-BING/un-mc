import { PiFileAudio } from 'react-icons/pi';
import { MdDelete, MdVpnKey } from 'react-icons/md';
import React from 'react';

export interface KeyInputProps {
  sequence: number;

  name: string;
  value: string;
  isValidKey?: boolean;
  onSetName: (name: string) => void;
  onSetValue: (value: string) => void;
  onDelete: () => void;

  nameLabel?: React.ReactNode;
  valueLabel?: React.ReactNode;
  namePlaceholder?: string;
  valuePlaceholder?: string;
}

export function KeyInput(props: KeyInputProps) {
  const {
    nameLabel,
    valueLabel,
    namePlaceholder,
    valuePlaceholder,
    sequence,
    name,
    value,
    onSetName,
    onSetValue,
    onDelete,
    isValidKey,
  } = props;

  return (
    <li className="list-row items-center">
      <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-gray-500 bg-gray-200 rounded-full">
        {sequence}
      </div>

      <div className="join join-vertical flex-1">
        <label className="input w-full rounded-tl-md rounded-tr-md">
          <span className="cucursor-default inline-flex items-center gap-1 select-none">
            {nameLabel || (
              <>
                文件 <PiFileAudio />
              </>
            )}
          </span>
          <input
            type="text"
            className="font-mono"
            placeholder={namePlaceholder}
            value={name}
            onChange={(e) => onSetName(e.target.value)}
          />
        </label>
        <label className="input w-full rounded-bl-md rounded-br-md mt-[-1px]">
          <span className="cursor-default inline-flex items-center gap-1 select-none">
            {valueLabel || (
              <>
                密钥 <MdVpnKey />
              </>
            )}
          </span>
          <input
            type="text"
            className="font-mono"
            placeholder={valuePlaceholder}
            value={value}
            onChange={(e) => onSetValue(e.target.value)}
          />
          <span className={isValidKey ? 'text-green-600' : 'text-red-600'}>
            <code>{value.length || '?'}</code>
          </span>
        </label>
      </div>

      <button type="button" className="btn btn-error btn-sm px-1 btn-outline" onClick={onDelete}>
        <MdDelete className="size-6" />
      </button>
    </li>
  );
}
