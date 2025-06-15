import { DecryptedAudioFile, selectFiles } from '~/features/file-listing/fileListingSlice';
import { useAppSelector } from '~/hooks';

export function DownloadAll() {
  const files = useAppSelector(selectFiles);
  const filesLength = Object.keys(files).length;
  const onClickDownloadAll = async () => {
    let dir: FileSystemDirectoryHandle | undefined;
    let success = 0;
    try {
      dir = await window.showDirectoryPicker();
    } catch (e) {
      console.error(e);
    }
    for (const [_, file] of Object.entries(files)) {
      try {
        if (dir) {
          await DownloadNew(dir, file);
        } else {
          await DownloadOld(file);
        }
        success++;
      } catch (e) {
        console.error('下载失败: ' + file.fileName, e);
      }
    }
    alert('下载成功: ' + success + ',下载失败: ' + (filesLength - success));
  };

  return (
    <button
      style={{ width: '48px', height: '48px', paddingInline: '0px', margin: '10px', marginLeft: 'auto' }}
      className="btn btn-primary"
      onClick={onClickDownloadAll}
      title="下载全部"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#e3e3e3">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
      </svg>
    </button>
  );
}

async function DownloadNew(dir: FileSystemDirectoryHandle, file: DecryptedAudioFile) {
  const response = await fetch(file.decrypted);
  const blob = await response.blob();
  const fileHandle = await dir.getFileHandle(file.cleanName + '.' + file.ext, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
}

async function DownloadOld(file: DecryptedAudioFile) {
  const a = document.createElement('a');
  a.href = file.decrypted;
  a.download = file.cleanName + '.' + file.ext;
  document.body.append(a);
  a.click();
  a.remove();
}
