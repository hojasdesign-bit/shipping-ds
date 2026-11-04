import React from 'react';
import styles from './Footer.module.css';
import { Icon } from '../Icon/Icon.jsx';

/** Footer — pie oscuro (WeShipYou) con logo Gran Azul, columnas demo y redes genéricas (sin enlaces reales). */
export function Footer({ columns = [{ title: 'Envíos demo', links: ['Rastrear', 'Precios demo', 'Casillero demo'] }, { title: 'Tienda demo', links: ['Productos demo', 'Tiendas demo', 'Ofertas demo'] }, { title: 'Ayuda demo', links: ['Soporte demo', 'Preguntas demo', 'Contacto demo'] }] }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <img src="/logo/gran-azul.svg" alt="Gran Azul" width="132" height="41" />
          <p>Demo de Gran Azul. Sin servicios reales en esta página de muestra.</p>
          <div className={styles.socials}>
            <span aria-label="Web demo"><Icon name="globe" size={20} /></span>
            <span aria-label="Correo demo"><Icon name="mail" size={20} /></span>
            <span aria-label="Chat demo"><Icon name="chat" size={20} /></span>
          </div>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((l) => <a key={l} href="#">{l}</a>)}
          </nav>
        ))}
      </div>
      <p className={styles.legal}>© Demo Gran Azul · Contenido de ejemplo, no afiliado a los referentes.</p>
    </footer>
  );
}
