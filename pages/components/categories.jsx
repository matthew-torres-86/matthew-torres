import styles from "@/styles/Categories.module.css";

export default function Categories({ data, reveal }) {
  if (data == null) {
    return <p>Component Not Found</p>;
  }
  var classNames = [styles.active1, styles.active2, styles.active3];
  return (
    <div className={styles.categoriesGallery}>
      {data.map((d, i) => {
        return (
          <div
            className={reveal ? `${styles.card} ${classNames[i]}` : styles.card}
            key={i}
          >
            <a href={d.link}>
              <img src={d.image} />
              <h3>{d.name}</h3>
              <p>{d.caption}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}
