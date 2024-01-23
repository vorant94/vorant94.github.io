import classNames from 'classnames';
import {
  type AnchorHTMLAttributes,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';
import { THEME } from '../foundation';

export const Link: FunctionComponent<PropsWithChildren<LinkProps>> = function ({
  href,
  className,
  children,
  ...props
}) {
  return (
    <a
      className={classNames(THEME.link, THEME.linkDecoration, className)}
      href={href}
      {...props}>
      {children}
    </a>
  );
};

// not ElementRef<'a'> because of TS complains about
// "Type string is not assignable to type HTMLAttributeReferrerPolicy | undefined"
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}
