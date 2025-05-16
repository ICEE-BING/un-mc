import { MdAdd, MdDeleteForever, MdFileUpload } from 'react-icons/md';

export interface AddKeyProps {
  addKey: () => void;
  importKeyFromFile?: () => void;
  clearKeys?: () => void;
}

export function AddKey({ addKey, importKeyFromFile, clearKeys }: AddKeyProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="join">
        <button className="btn join-item" onClick={addKey}>
          <MdAdd /> 添加一条
        </button>
        <button className="btn join-item" onClick={importKeyFromFile}>
          <MdFileUpload />
          导入数据库…
        </button>
        <button className="btn btn-error join-item" onClick={clearKeys}>
          <MdDeleteForever />
          清空密钥
        </button>
      </div>
    </div>
  );
}
