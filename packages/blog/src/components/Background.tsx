import { cn } from '@digital-garden/utils';
import { type FunctionComponent } from 'react';

export const Background: FunctionComponent = function () {
  return (
    <>
      <div className={cn(common, 'bg-cyan-500 left-0 top-0')}></div>
      <div className={cn(common, 'bg-lime-500 right-0 bottom-0')}></div>
    </>
  );
};

const common =
  'fixed h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full blur-[150px] md:blur-[350px] opacity-50 -z-10' as const;
