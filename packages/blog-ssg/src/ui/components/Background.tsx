import { cn } from '@/shared/cn.js';
import { type FC } from 'react';

export const Background: FC = function () {
  return (
    <>
      <div
        className={cn(
          'fixed h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full blur-[150px] md:blur-[350px] opacity-50 bg-cyan-500 left-0 top-0',
        )}></div>
      <div
        className={cn(
          'fixed h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full blur-[150px] md:blur-[350px] opacity-50 bg-lime-500 right-0 bottom-0',
        )}></div>
    </>
  );
};
