import { ExtLink } from '~/components/ExtLink';
import { Header4, Header5 } from '~/components/HelpText/Headers';
import { VQuote } from '~/components/HelpText/VQuote';
import { ProjectIssue } from '~/components/ProjectIssue';
import { RiErrorWarningLine } from 'react-icons/ri';

import LdPlayerSettingsMisc2x from './assets/ld_settings_misc@2x.webp';
import MumuSettingsMisc2x from './assets/mumu_settings_misc@2x.webp';

export function OtherFAQ() {
  return (
    <>
      <Header4>解密后没有封面等信息</Header4>
      <p>该项目进行解密处理。如果加密前的资源没有内嵌元信息或封面，解密的文件也没有。</p>
      <p>请使用第三方工具进行编辑或管理元信息。</p>

      <Header4>批量下载</Header4>
      <p>
        {'暂时没有实现，不过你可以在 '}
        <ProjectIssue id={34} title="[UI] 全部下载功能" />
        {' 以及 '}
        <ProjectIssue id={43} title="批量下载" />
        {' 追踪该问题。'}
      </p>

      <Header4>安卓: 浏览器支持说明</Header4>
      <p>⚠️ 手机端浏览器支持有限，请使用最新版本的 Chrome 或 Firefox 官方浏览器。</p>
      <div className="flex flex-col md:flex-row gap-2 md:gap-8">
        <div>
          <Header5>已知有问题的浏览器</Header5>
          <ul className="list-disc list-inside pl-2">
            <li>Via 浏览器</li>
            <li>夸克浏览器</li>
            <li>UC 浏览器</li>
          </ul>
        </div>

        <div>
          <Header5>可能会遇到的问题包括</Header5>
          <ul className="list-disc list-inside pl-2">
            <li>网页白屏</li>
            <li>无法下载解密后内容</li>
            <li>下载的文件名错误</li>
          </ul>
        </div>
      </div>

      <Header4>安卓: root 相关说明</Header4>
      <p>
        对安卓设备获取 root 特权通常会破坏系统的完整性并导致部分功能无法使用。
        例如部分厂商的安卓设备会在解锁后丧失保修资格，或导致无法使用 NFC 移动支付等限制。
      </p>
      <p>如果希望不破坏系统完整性，你可以考虑在电脑上使用安卓模拟器。</p>
      <p>
        很多安卓模拟器都提供了 root 特权支持，可以很方便的启用，例如
        <VQuote>
          <ExtLink href="https://mumu.163.com/">网易 MuMu 模拟器（安卓 12，推荐）</ExtLink>
        </VQuote>
        或
        <VQuote>
          <ExtLink href="https://www.ldmnq.com/">雷电模拟器（安卓 9）</ExtLink>
        </VQuote>
        。
      </p>

      <div className="my-4 alert alert-warning">
        <RiErrorWarningLine className="text-lg" />
        <div>
          <p>
            根据应用的风控策略，使用模拟器登录的账号<strong>有可能会导致账号被封锁</strong>。
          </p>
          <p>使用前请自行评估风险。</p>
        </div>
      </div>

      <p>以下是为上述模拟器启用 root 的方式：</p>
      <div className="grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-2">
        <div>
          <Header5>网易 MuMu模拟器</Header5>
          <ul className="list-disc pl-6">
            <li>
              打开<VQuote>设置中心</VQuote>
            </li>
            <li>
              选择<VQuote>其他</VQuote>
            </li>
            <li>
              勾选<VQuote>开启手机Root权限</VQuote>
            </li>
          </ul>
          <img className="rounded-md border border-base-300" loading="lazy" srcSet={`${MumuSettingsMisc2x} 2x`} />
        </div>

        <div>
          <Header5>雷电模拟器</Header5>
          <ul className="list-disc pl-6">
            <li>
              打开<VQuote>模拟器设置</VQuote>
            </li>
            <li>
              选择<VQuote>其他</VQuote>
            </li>
            <li>
              设置<VQuote>ROOT 权限</VQuote>为<VQuote>开启</VQuote>状态
            </li>
          </ul>
          <img className="rounded-md border border-base-300" loading="lazy" srcSet={`${LdPlayerSettingsMisc2x} 2x`} />
        </div>
      </div>

      <Header4>相关项目</Header4>
      <ul className="list-disc pl-6">
        <li>
          <p>
            <ExtLink className="mr-2" href="https://github.com/CarlGao4/um-react-electron">
              <strong>
                <code>um-react-electron</code>
              </strong>
            </ExtLink>
            利用 Electron 框架打包的本地版，提供适用于 Windows、Linux 和 Mac 平台的可执行文件。
          </p>
          <ul className="list-disc pl-6">
            <li>
              <p>
                <ExtLink href="https://github.com/CarlGao4/um-react-electron/releases/latest">GitHub 下载</ExtLink>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <ExtLink className="mr-2" href="https://git.unlock-music.dev/um/um-react-wry">
              <strong>
                <code>um-react-wry</code>
              </strong>
            </ExtLink>
            使用 WRY 框架封装的 Win64 单文件（需要
            <ExtLink href="https://go.microsoft.com/fwlink/p/?LinkId=2124703">安装 Edge WebView2 运行时</ExtLink>
            {'，Win10+ 操作系统自带）'}
          </p>
          <ul className="list-disc pl-6">
            <li>
              <p>
                <ExtLink href="https://git.unlock-music.dev/um/um-react/releases/latest">仓库下载</ExtLink>
                {' | 寻找文件名为 '}
                <code>um-react-win64-</code> 开头的附件
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <Header4>有更多问题？</Header4>
      <p className="flex flex-row gap-1">
        欢迎加入
        <ExtLink href={'https://t.me/unlock_music_chat'}>“音乐解锁-交流” 交流群</ExtLink>
        一起讨论。
      </p>
    </>
  );
}
