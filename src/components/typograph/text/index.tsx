import type { ElementType, HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const variant = tv({
  base: "text-foreground text-2xl",
  variants: {
    size: {
      xs: "text-xs leading-4",
      sm: "text-sm leading-5",
      md: "text-md leading-6",
      lg: "text-lg leading-6",
      xl: "text-xl leading-7",
      "2xl": "text-2xl leading-8",
      "3xl": "text-3xl leading-9",
      "4xl": "text-4xl leading-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type TextProps = {
  as?: ElementType;
} & HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof variant>;

export function Text({ as = "p", children, className, ...rest }: TextProps) {
  const As = as;

  return (
    <As className={variant({ className })} {...rest}>
      {children}
    </As>
  );
}
