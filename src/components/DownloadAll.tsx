import { DecryptedAudioFile, ProcessState, selectFiles } from '~/features/file-listing/fileListingSlice';
import { FaDownload } from 'react-icons/fa';
import { useAppSelector } from '~/hooks';
import { toast } from 'react-toastify';

export function DownloadAll() {
  const files = useAppSelector(selectFiles);
  const onClickDownloadAll = async () => {
    console.time('DownloadAll'); //开始计时
    if (Object.keys(files).length === 0) {
      toast.warning('未添加文件');
      return;
    }

    //判断所有文件是否处理完成
    const allComplete = Object.values(files).every((file) => file.state !== ProcessState.PROCESSING);
    if (!allComplete) {
      toast.warning('请等待所有文件解密完成');
      return;
    }

    //过滤处理失败的文件
    const completeFiles = Object.values(files).filter((file) => file.state === ProcessState.COMPLETE);
    const fileCount = Object.keys(files).length;

    //开始下载
    let dir: FileSystemDirectoryHandle | undefined;
    try {
      dir = await window.showDirectoryPicker({ mode: 'readwrite' });
    } catch (e) {
      console.error(e);
      if (e instanceof Error && e.name === 'AbortError') {
        return;
      }
    }
    toast.warning('开始下载，请稍候');

    let success = 0;
    const promises: Promise<void>[] = [];
    for (const [_, file] of Object.entries(completeFiles)) {
      const promise = new Promise<void>((resolve, reject) => {
        console.log(`开始下载: ${file.fileName}`);
        const action = dir ? DownloadNew(dir, file) : DownloadOld(file);
        action.then(
          () => {
            console.log(`成功下载: ${file.fileName}`);
            success++;
            resolve();
          },
          (e) => {
            console.error(`下载失败: ${file.fileName}`, e);
            toast.error(`出现错误: ${e}`);
            reject(e);
          },
        );
      });
      promises.push(promise);
    }
    try {
      await Promise.allSettled(promises);
      toast.success(`成功下载: ${success}/${fileCount}首`);
    } catch {
      toast.warning(`成功下载: ${success}/${fileCount}首`);
    }
    console.timeEnd('DownloadAll'); //停止计时
  };

  return (
    <button
      style={{ width: '48px', height: '48px', paddingInline: '0px', margin: '10px', marginLeft: 'auto' }}
      className="btn btn-primary"
      onClick={onClickDownloadAll}
      title="下载全部"
    >
      <FaDownload />
    </button>
  );
}

async function DownloadNew(dir: FileSystemDirectoryHandle, file: DecryptedAudioFile) {
  const fileHandle = await dir.getFileHandle(file.cleanName + '.' + file.ext, { create: true });
  const writable = await fileHandle.createWritable();
  await fetch(file.decrypted).then((res) => res.body?.pipeTo(writable));
}

async function DownloadOld(file: DecryptedAudioFile) {
  const a = document.createElement('a');
  a.href = file.decrypted;
  a.download = file.cleanName + '.' + file.ext;
  document.body.append(a);
  a.click();
  a.remove();
}
