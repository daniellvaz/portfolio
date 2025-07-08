import type { ElementType, HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const variant = tv({
  base: "text-foreground font-bold text-2xl",
  variants: {
    size: {
      xs: "text-md leading-6",
      sm: "text-lg leading-6",
      md: "text-xl leading-7",
      lg: "text-2xl leading-8",
      xl: "text-3xl leading-9",
      "2xl": "text-4xl leading-10",
      "3xl": "text-5xl leading-none",
      "4xl": "text-6xl leading-none",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type HeadingProps = {
  as?: ElementType;
} & HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof variant>;

export function Heading({
  size,
  as = "h2",
  children,
  className,
  ...rest
}: HeadingProps) {
  const As = as;

  return (
    <As className={variant({ className, size })} {...rest}>
      {children}
    </As>
  );
}
