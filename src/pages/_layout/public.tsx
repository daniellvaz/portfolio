import { Outlet } from "react-router-dom";

import { Navbar } from "../../components/navbar";

export function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
