import { Outlet } from "react-router-dom";

import { Navbar } from "../../components/surfaces/navbar";
import { Footer } from "../../components/surfaces/footer";

export function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
