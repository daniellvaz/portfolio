import type { ButtonHTMLAttributes, ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Spinner } from "./spinner";

const variant = tv({
  base: "w-fit cursor-pointer px-4 py-2  flex gap-4 items-center justify-center text-zinc-50 rounded transition-colors",
  variants: {
    variant: {
      primary: "bg-primary-main hover:bg-primary-main-dark",
      ghost: "bg-foreground hover:bg-foreground/25",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonProps = {
  iconLeft?: ElementType;
  iconRight?: ElementType;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variant>;

export function Button({
  children,
  className,
  isLoading = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
}: ButtonProps) {
  if (isLoading) {
    return (
      <button className={variant({ className })}>
        <Spinner />
      </button>
    );
  }

  return (
    <button className={variant({ className })}>
      {IconLeft && <IconLeft />}
      {children}
      {IconRight && <IconRight />}
    </button>
  );
}
