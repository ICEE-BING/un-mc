import { DecryptedAudioFile, ProcessState, selectFiles } from '~/features/file-listing/fileListingSlice';
import { FaDownload } from 'react-icons/fa';
import { useAppSelector } from '~/hooks';
import { toast } from 'react-toastify';

export function DownloadAll() {
  const files = useAppSelector(selectFiles);
  const onClickDownloadAll = async () => {
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
    const filesLength = Object.keys(completeFiles).length;

    //开始下载
    let dir: FileSystemDirectoryHandle | undefined;
    let success = 0;
    try {
      dir = await window.showDirectoryPicker({ mode: 'readwrite' });
    } catch (e) {
      console.error(e);
      if (e instanceof Error && e.name === 'AbortError') {
        return;
      }
    }
    toast.warning('开始下载，请稍候');
    for (const [_, file] of Object.entries(completeFiles)) {
      if (file.state !== ProcessState.COMPLETE) {
        return;
      }
      try {
        if (dir) {
          await DownloadNew(dir, file);
        } else {
          await DownloadOld(file);
        }
        success++;
      } catch (e) {
        console.error(`下载失败: ${file.fileName}`, e);
        toast.error(`出现错误: ${e}`);
      }
    }
    if (success === filesLength) {
      toast.success(`成功下载: ${success}/${filesLength}首`);
    } else {
      toast.warning(`成功下载: ${success}/${filesLength}首`);
    }
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
