import styles from "./page.module.css";
import { Demo } from "@repo/ui";
export default function Home() {
  return (
    <div className={styles.page}>
      <p>hello world</p>
      <Demo />
    </div>
  );
}
