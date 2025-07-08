import { forwardRef, type TextareaHTMLAttributes } from "react";

export type TextareaProps = {
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, ...rest }, ref) => (
    <>
      <textarea
        ref={ref}
        {...rest}
        data-has-errors={!!error}
        className="p-2 bg-foreground/10 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-primary-main transition-colors data-[has-errors=true]:border-red-500"
      ></textarea>
      {error && <small className="text-red-500">{error}</small>}
    </>
  )
);

Textarea.displayName = "Textarea";
