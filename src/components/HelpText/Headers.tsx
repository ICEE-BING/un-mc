import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Header3({ children, className, id }: HeaderProps) {
  return (
    <h3 id={id} className={`text-2xl pt-3 pb-1 font-bold border-b border-base-300 ${className}`}>
      {children}
    </h3>
  );
}

export function Header4({ children, className, id }: HeaderProps) {
  return (
    <h4 id={id} className={`text-xl pt-3 pb-1 font-semibold ${className}`}>
      {children}
    </h4>
  );
}

export function Header5({ children, className, id }: HeaderProps) {
  return (
    <h5 id={id} className={`text-lg pt-3 pb-1 font-semibold ${className}`}>
      {children}
    </h5>
  );
}
