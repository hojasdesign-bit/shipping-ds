import React from 'react';
import styles from './TrackingHero.module.css';
import { Icon } from '../Icon/Icon.jsx';
import { TrackingSearch } from '../TrackingSearch/TrackingSearch.jsx';

/** TrackingHero — héroe con degradado oscuro, icono en cuadrado redondeado y rastreo (WeShipYou). */
export function TrackingHero({ title = 'Rastrea tu paquete', subtitle = 'Escribe tu código demo y consulta el estado de ejemplo de tu envío.', onTrack }) {
  return (
    <section className={styles.hero}>
      <div className={styles.iconBox}><Icon name="truck" size={24} /></div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <TrackingSearch onTrack={onTrack} />
      <p className={styles.note}>Demo sin backend: cualquier código muestra un ejemplo.</p>
    </section>
  );
}
