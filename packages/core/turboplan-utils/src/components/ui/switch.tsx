"use client";

import * as React from "react";

import { cn } from "../../tailwind";

/**
 * Hand-rolled switch — deliberately not `@radix-ui/react-switch`, which is not
 * installed and is not worth a new dependency for a two-state control. A
 * `<button role="switch">` already gives keyboard activation (Space/Enter),
 * focus handling and disabled semantics for free.
 *
 * Sized to sit next to `text-xs` label text (16px tall track).
 */
interface SwitchProps
  extends Omit<
    React.ComponentPropsWithoutRef<"button">,
    "onChange" | "type" | "role" | "aria-checked" | "children"
  > {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    { className, checked, onCheckedChange, disabled, onClick, ...props },
    ref,
  ) => (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }
        onCheckedChange?.(!checked);
      }}
      className={cn(
        "relative inline-flex h-4 w-7 shrink-0 cursor-pointer items-center rounded-full",
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "transition-[background-color,transform] duration-200 active:scale-95",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100",
        checked ? "bg-primary" : "bg-gray-300",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0.5 size-3 rounded-full bg-white shadow-sm",
          "transition-transform duration-200 ease-out",
          checked ? "translate-x-3" : "translate-x-0",
        )}
      />
    </button>
  ),
);
Switch.displayName = "Switch";

export { Switch };
export type { SwitchProps };
