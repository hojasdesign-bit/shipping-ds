import React from 'react';
import styles from './CarrierRateRow.module.css';
import { cn } from '../../utils.js';
import { Badge } from '../Badge/Badge.jsx';
import { Button } from '../Button/Button.jsx';

/** CarrierRateRow — fila del comparador multi-paquetería demo (transportistas inventados). */
export function CarrierRateRow({ carrier, service, days, price, featured = false, onSelect }) {
  return (
    <article className={cn(styles.row, featured && styles.featured)}>
      <div>
        <strong>{carrier}</strong>
        <span>{service}</span>
      </div>
      <span className={styles.days}>{days} días demo</span>
      {featured && <Badge tone="accent">Más económico demo</Badge>}
      <strong className={styles.price}>{price}</strong>
      <Button size="sm" variant={featured ? 'primary' : 'secondary'} onClick={onSelect}>Elegir demo</Button>
    </article>
  );
}
