export function InstructionsPC() {
  return (
    <>
      <p>
        使用 <span className="text-primary">19.51 或更低版本</span>下载的歌曲文件
        <mark>无需密钥</mark>。
      </p>
      <p className="mt-2">
        使用 <span className="text-error">19.57 或更高版本</span>下载的歌曲文件
        <mark>需要导入密钥</mark>。
        <br />
        目前未公开密钥获取方式。
      </p>
    </>
  );
}
