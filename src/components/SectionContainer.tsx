import { ReactNode } from 'react';
import { cn } from './ui/utils';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
};

export default function SectionContainer({
  children,
  className,
  innerClassName,
  id
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      <div className={cn('mx-auto w-full max-w-6xl 2xl:max-w-7xl', innerClassName)}>
        {children}
      </div>
    </section>
  );
}
