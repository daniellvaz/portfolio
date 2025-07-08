import { forwardRef, type InputHTMLAttributes } from "react";

export type InputProps = {
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...rest }, ref) => (
    <>
      <input
        ref={ref}
        {...rest}
        type="text"
        data-has-errors={!!error}
        className="p-2 bg-foreground/10 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-primary-main transition-colors data-[has-errors=true]:border-red-500"
      />
      {error && <small className="text-red-500">{error}</small>}
    </>
  )
);

Input.displayName = "Input";
