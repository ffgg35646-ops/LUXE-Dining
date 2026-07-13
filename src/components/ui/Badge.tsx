import { HTMLAttributes } from "react";

import { classNames } from "@/lib/utils";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary:
    "bg-amber-500/20 text-amber-400 border border-amber-500/30",

  secondary:
    "bg-neutral-800 text-neutral-200 border border-neutral-700",

  success:
    "bg-green-500/20 text-green-400 border border-green-500/30",

  warning:
    "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",

  danger:
    "bg-red-500/20 text-red-400 border border-red-500/30",
};

const Badge = ({
  variant = "primary",
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
