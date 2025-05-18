import { ComponentType, Fragment } from 'react';
import { Header3 } from '~/components/HelpText/Headers';
import { KuwoFAQ } from '~/faq/KuwoFAQ';
import { OtherFAQ } from '~/faq/OtherFAQ';
import { QQMusicFAQ } from '~/faq/QQMusicFAQ';
import { KugouFAQ } from '~/faq/KugouFAQ.tsx';

type FAQEntry = {
  id: string;
  title: string;
  Help: ComponentType;
};

const faqEntries: FAQEntry[] = [
  { id: 'qqmusic', title: 'QQ 音乐', Help: QQMusicFAQ },
  { id: 'kuwo', title: '酷我音乐', Help: KuwoFAQ },
  { id: 'kugou', title: '酷狗音乐', Help: KugouFAQ },
  { id: 'other', title: '其它问题', Help: OtherFAQ },
];

export function FaqTab() {
  return (
    <section className="container pb-10 px-4">
      <h2 className="text-3xl font-bold text-center">常见问题解答</h2>
      <Header3>答疑目录</Header3>
      <ul className="list-disc pl-6">
        {faqEntries.map(({ id, title }) => (
          <li key={id}>
            <a className="link link-info no-underline" href={`#faq-${id}`}>
              {title}
            </a>
          </li>
        ))}
      </ul>
      {faqEntries.map(({ id, title, Help }) => (
        <Fragment key={id}>
          <Header3 id={`faq-${id}`}>{title}</Header3>
          <Help />
        </Fragment>
      ))}
    </section>
  );
}
