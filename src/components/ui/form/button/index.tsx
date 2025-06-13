import type { ButtonHTMLAttributes, ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";

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
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variant>;

export function Button({
  children,
  className,
  iconLeft: IconLeft,
  iconRight: IconRight,
}: ButtonProps) {
  return (
    <button className={variant({ className })}>
      {IconLeft && <IconLeft />}
      {children}
      {IconRight && <IconRight />}
    </button>
  );
}
