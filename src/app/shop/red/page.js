import Image from "next/image";
import styles from "../page.module.css";
import getData from "../../../../sanity/sanity-utils";
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
                <section style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <h1>Rojo</h1>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, 200px)',gap:'20px',width:'100vw',justifyContent:'space-evenly'}}>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <Image src={`/flowers/red_${i}.jpeg`} height={200} width={200} style={{margin:'20px'}}/>)}</div>
                </section>
                <Footer />
      </main>
    </div>
  );
}
