import styles from "./Loader.module.css";

type LoaderProps = {
  size?: number;
};

function Loader({ size = 40 }: LoaderProps) {
  return (
    <div className={styles.loadingWrapper}>
      <div
        className={styles.loading}
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
}

export default Loader;
