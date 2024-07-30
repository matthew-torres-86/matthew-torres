import styles from "@/styles/Footer.module.css";
export default function Footer({ color }) {
  return (
    <footer>
      <div className={styles.copyright} style={{ backgroundColor: color }}>
        Built from scratch using Next.js. &copy; Matthew Torres. 2024
      </div>
    </footer>
  );
}
