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
    <button className="btn btn-primary" onClick={onClickDownloadAll}>
      Download All
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
