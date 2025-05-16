import React from 'react';

export function FilePathBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="whitespace-pre-wrap break-all">
      <code>{children}</code>
    </pre>
  );
}
