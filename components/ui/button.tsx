import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
};

export function Button({ className, variant="default", size="md", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-2xl transition border";
  const variants = {
    default: "bg-black text-white border-black hover:opacity-90 dark:bg-white dark:text-black dark:border-white",
    secondary: "bg-transparent text-current border-current/30 hover:bg-current/10",
    ghost: "bg-transparent border-transparent hover:bg-white/10",
  } as const;
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-2.5 text-base",
    icon: "p-2",
  } as const;
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}
