import { Header4 } from '~/components/HelpText/Headers';
import { SegmentKeyImportInstructions } from './SegmentKeyImportInstructions';
import { KugouAllInstructions } from '~/features/settings/panels/Kugou/KugouAllInstructions.tsx';
import { RiErrorWarningLine } from 'react-icons/ri';

export function KugouFAQ() {
  return (
    <>
      <Header4>解锁失败</Header4>
      <p>
        酷狗现在对部分用户推送了 <code>kgg</code> 加密格式（安卓、Windows 客户端）。
      </p>
      <p className="my-4">根据平台不同，你需要提取密钥数据库。</p>

      <div className="p-2 @container">
        <div className="alert alert-warning">
          <RiErrorWarningLine className="size-6" />
          <p>安卓用户提取密钥需要 root 权限，或注入文件提供器。</p>
        </div>
      </div>

      <SegmentKeyImportInstructions tab="酷狗密钥" clientInstructions={<KugouAllInstructions />} />
    </>
  );
}
