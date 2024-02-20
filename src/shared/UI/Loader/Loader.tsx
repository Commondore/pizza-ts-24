import styles from "./style.module.css";

const Loader = () => {
  const pizzaItem = Array.from(Array(12), (_, i) => (
    <div key={i} />
  ));
  return (
    <div className={styles.loaderWrap}>
      <div className={styles.loader}>{pizzaItem}</div>
    </div>
  );
};

export default Loader;
