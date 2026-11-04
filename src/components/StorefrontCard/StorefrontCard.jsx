import React from 'react';
import styles from './StorefrontCard.module.css';
import { Badge } from '../Badge/Badge.jsx';
import { Icon } from '../Icon/Icon.jsx';

/** StorefrontCard — tienda verificada demo (sin alianzas reales). La imagen es un bloque con inicial, no una foto ajena. */
export function StorefrontCard({ name, location, rating = '4.8', verified = true, tag }) {
  return (
    <article className={styles.card}>
      <div className={styles.cover} aria-hidden="true">{name ? name.charAt(0) : 'G'}</div>
      <div className={styles.body}>
        <div className={styles.row}>
          <h3>{name}</h3>
          {verified && <Badge tone="success">Verificada demo</Badge>}
        </div>
        <p className={styles.meta}><Icon name="location" size={16} /> {location}</p>
        <p className={styles.meta}><Icon name="star" size={16} /> {rating} · Demo</p>
        {tag && <Badge>{tag}</Badge>}
      </div>
    </article>
  );
}
