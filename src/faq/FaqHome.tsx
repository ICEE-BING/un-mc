import { ExtLink } from '~/components/ExtLink';

export function FaqHome() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">答疑</h1>
      <p>从目录选择一项来查看相关说明。</p>
      <p>
        也欢迎造访
        <ExtLink href={'https://t.me/unlock_music_chat'}>“音乐解锁-交流” 交流群</ExtLink> 进行交流。
      </p>
    </div>
  );
}
