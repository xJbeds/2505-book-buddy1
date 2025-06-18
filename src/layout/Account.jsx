import { Outlet } from "react-router";

import Account from "./Account";

const Layout = () => {
  return (
    <>
      <Account/>
      <main>
        <Outlet />
      </main>
    </>
  );
}