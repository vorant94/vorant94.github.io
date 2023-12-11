import classNames from 'classnames';
import { type ReactElement } from 'react';
import { THEME } from '../../Theme';

export function Background(): ReactElement {
  const common =
    'fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full blur-[150px] md:blur-[350px] opacity-50';

  return (
    <>
      <div
        className={classNames(
          common,
          THEME.backgroundTop,
          'left-0 top-0',
        )}></div>
      <div
        className={classNames(
          common,
          THEME.backgroundBottom,
          'right-0 bottom-0',
        )}></div>
    </>
  );
}
