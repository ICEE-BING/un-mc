import { SDKVersion } from './SDKVersion';
import { CurrentYear } from './CurrentYear';

export function Footer() {
  const appVersionShort = '__APP_VERSION_SHORT__';
  return (
    <footer className="flex flex-col text-center p-4 bg-base-200">
      <p className="flex flex-row justify-center items-center h-[1em]">
        <a className="link link-info mr-1" href="https://git.unlock-music.dev/um/um-react">
          音乐解锁
        </a>
        (v{appVersionShort}
        <SDKVersion />) - 移除已购音乐的加密保护。
      </p>
      <p>
        {'© 2019 - '}
        <CurrentYear />{' '}
        <a className="link link-info" href="https://git.unlock-music.dev/um">
          UnlockMusic 团队
        </a>
        {' | '}
        <a className="link link-info" href="https://git.unlock-music.dev/um/um-react/src/branch/main/LICENSE">
          使用 MIT 授权协议
        </a>
      </p>
    </footer>
  );
}
