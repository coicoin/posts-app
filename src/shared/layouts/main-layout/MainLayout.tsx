import styles from "./MainLayout.module.css";
import Footer from "@/widgets/layout-footer/Footer";
import Header from "@/widgets/layout-header/Header";
import { MainNavigation } from "@/widgets/main-nav/MainNavigation";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <MainNavigation />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { MainLayout };
