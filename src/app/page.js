import Image from "next/image";
import styles from "./page.module.css";
import getData from "../../sanity/sanity-utils";
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
        <div style={{width:'100vw',height:'80vh',backgroundImage:'url(/intro.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
          <h1 style={{color:'white',fontSize:'50px',lineHeight:'58px'}}>Bienvenido a Flores de Guayaquil</h1>
          <Link href="/about" style={{padding: '12px 20px 12px 20px',color:'white',backgroundColor:'black',borderRadius:'20px',border:'none',textDecoration:'none'}}>Contacto</Link>
        </div>
        <section>
          <h1 style={{textAlign:'center'}}>Categorias</h1>
          <div style={{display:'flex',justifyContent:'space-evenly',width:'100vw',margin:'20px 0'}} className={styles.cat}>
          <Link href="/shop/red" style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'20px 0'}}>
            <Image src="/flowers/red_1.jpeg" height={200}width={200}/>
            <p>Rojo</p>
          </Link>
          <Link href="/shop/mixed" style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'20px 0'}}>
            <Image src="/flowers/mixed_1.jpeg" height={200}width={200}/>
            <p>Mixto</p>
          </Link>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
