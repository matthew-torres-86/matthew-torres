import styles from "@/styles/Footer.module.css";
export default function Footer({ color }) {
  return (
    <footer>
      <div className={styles.copyright} style={{ backgroundColor: color }}>
        Built before claude. &copy; Matthew Torres. 2026
      </div>
    </footer>
  );
}
