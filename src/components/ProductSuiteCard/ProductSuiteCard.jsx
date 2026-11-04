import React from 'react';
import styles from './ProductSuiteCard.module.css';
import { Icon } from '../Icon/Icon.jsx';
import { Button } from '../Button/Button.jsx';

/** ProductSuiteCard — tarjeta de producto de la suite demo (Core y productos adicionales). Nombres y textos propios de Gran Azul. */
export function ProductSuiteCard({ icon = 'package', name, tagline, features = [], featured = false }) {
  return (
    <article className={styles.card}>
      <span className={styles.icon}><Icon name={icon} size={24} /></span>
      <h3>{name}</h3>
      <p>{tagline}</p>
      <ul>{features.map((f) => <li key={f}><Icon name="check" size={16} /> {f}</li>)}</ul>
      <Button variant={featured ? 'primary' : 'secondary'} fullWidth>Ver demo</Button>
    </article>
  );
}
