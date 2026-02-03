import styles from "./MainLayout.module.css";
import Footer from "@/widgets/layout-footer/Footer";
import Header from "@/widgets/layout-header/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
