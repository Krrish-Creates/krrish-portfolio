import * as React from "react";
export function Badge({ children, className='' }: {children: React.ReactNode, className?: string}){
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${className}`}>{children}</span>;
}
