import { Header4 } from '~/components/HelpText/Headers';
import { SegmentTryOfficialPlayer } from './SegmentTryOfficialPlayer';
import { QMCv2QQMusicAllInstructions } from '~/features/settings/panels/QMCv2/QMCv2QQMusicAllInstructions';

export function QQMusicFAQ() {
  return (
    <>
      <Header4>解锁失败</Header4>
      <SegmentTryOfficialPlayer />
      <p className="my-4">重复下载同一首的歌曲不重复扣下载配额，但是同一首歌的两个版本会重复扣下载配额，请仔细分辨。</p>
      <p className="mb-4">
        部分平台获取的加密文件未包含密钥。选择你<strong>下载文件时</strong>使用的客户端来查看说明。
      </p>

      <QMCv2QQMusicAllInstructions />
    </>
  );
}
