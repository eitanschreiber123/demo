import Image from "next/image";
import styles from "./page.module.css";
import getData from "../../sanity/sanity-utils";

export const revalidate = 0;

export default async function Home() {
  const {arriba} = await getData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{arriba}</h1>
      </main>
    </div>
  );
}
