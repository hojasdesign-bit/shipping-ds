import React from 'react';
import styles from './DestinationCard.module.css';
import { Badge } from '../Badge/Badge.jsx';
import { Icon } from '../Icon/Icon.jsx';

/** DestinationCard — destino con código de dos letras en círculo (sin banderas reales), precio demo y días demo. */
export function DestinationCard({ city, code, priceFrom, days, highlight = false }) {
  return (
    <article className={styles.card}>
      <span className={styles.code}>{code}</span>
      <div>
        <h3>{city}</h3>
        <p>Desde {priceFrom} · {days} días demo</p>
      </div>
      {highlight && <Badge tone="accent">Destacado</Badge>}
      <Icon name="arrow-up-right" size={20} />
    </article>
  );
}
