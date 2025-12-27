import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Container = { children: ReactNode; className?: string };
export const Container = ({ children, className }: Container) => {
  return <div className={cn('container mx-auto', className)}>{children}</div>;
};
