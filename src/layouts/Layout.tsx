import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import NavigationMenu from "../components/Sidebar/NavigationMenu";
import clases from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={clases.layout}>
      <section  className={clases.header}>
        <Header />
      </section>

      <main className={clases.main}>
        <section className={clases.sidebar}>
          <NavigationMenu />
        </section>
        <section className={clases.outlet}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
