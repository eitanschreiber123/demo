import Image from "next/image";
import styles from "./page.module.css";
import getData from "../../../sanity/sanity-utils";
import Link from "next/link";
import Header from "@/components/newHeader";
import Footer from "@/components/footer";

export const revalidate = 0;

export default async function Home() {
  const {arriba} = await getData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
                <section style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <h1>Una tienda de Flores</h1>
                </section>
                <Footer />
      </main>
    </div>
  );
}
