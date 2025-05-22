import { Outlet } from "react-router-dom";
import type { HTMLAttributes } from "react";

export type PrivateLayoutProps = {} & HTMLAttributes<HTMLElement>;

export function PublicLayout({ ...rest }: PrivateLayoutProps) {
  return (
    <div {...rest}>
      <Outlet />
    </div>
  );
}
