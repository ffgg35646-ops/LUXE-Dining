import {
  forwardRef,
  InputHTMLAttributes,
} from "react";

import { classNames } from "@/lib/utils";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-medium text-neutral-200"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          className={classNames(
            "w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white",
            "placeholder:text-neutral-500",
            "transition-colors duration-200",
            "focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/30",
            className
          )}
          {...props}
        />

        {error ? (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        ) : helperText ? (
          <p className="mt-2 text-sm text-neutral-400">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
