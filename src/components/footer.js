"use client"
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section style={{display:'flex',width:'100vw',justifyContent:'space-evenly'}} className="container">
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Menu</h1>
            <Link href="/">Inicio</Link>
            <Link href="/shop">Tienda</Link>
            <Link href="/about">Quienes somos</Link>
            <Link href="/about">Contacto</Link>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}> 
            <h1>Flores de Guayaquil</h1>
            <div style={{display:'flex'}}>
              <svg aria-hidden="true" class="e-font-icon-svg e-fas-map-marker-alt" width="30" height="30" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
</svg><p>Hurtado entre Tungurahua y Lizardo García</p></div>
            <div style={{display:'flex'}}>
              <svg aria-hidden="true" class="e-font-icon-svg e-far-clock" width="30" height="30" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
</svg><p>Lun - Sab de 8:30am - 6:00pm</p></div>
            <div style={{display:'flex'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
  <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg><p>+593 97 921 2069</p></div>
            <span></span>
            <span></span>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Nosotros</h1>
<p>Preguntas Frecuentes</p>
<p>Políticas de Privacidad</p>
<p>Términos y Condiciones</p>
          </div>
          <style>{`
        .container {
          flex-direction:row;
        }
        @media (max-width: 750px) {
          .container {
            flex-direction:column;
          }
        }
      `}</style>
        </section>
  );
}