import type { AnchorHTMLAttributes } from 'react';
import { FiExternalLink } from 'react-icons/fi';

export type ExtLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: boolean;
};

export function ExtLink({ className, icon = true, children, ...props }: ExtLinkProps) {
  return (
    <a rel="noreferrer noopener nofollow" className={`link ${className}`} {...props}>
      {children}
      {icon && <FiExternalLink />}
    </a>
  );
}
