import styles from "@/styles/Statistics.module.css";

export default function Statistics({ data, reveal }) {
  if (data == null) {
    return <p>Component Not Found</p>;
  }
  var classNames = [styles.active1, styles.active2, styles.active3, styles.active4, styles.active5, styles.active6];
  return (
    <div className={styles.statisticsGallery}>
      {data.map((d, i) => {
        return (
          <div
            className={reveal ? `${styles.card} ${classNames[i]}` : styles.card}
            key={i}
          >
            <h3 className={styles.stat}>{d.stat}</h3>
            <p className={styles.title}>{d.title}</p>
          </div>
        );
      })}
    </div>
  );
}