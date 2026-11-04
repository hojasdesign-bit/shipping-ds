import React from 'react';
import styles from './StepCard.module.css';
import { Icon } from '../Icon/Icon.jsx';

/** StepCard — paso numerado de "cómo funciona" (WeShipYou). */
export function StepCard({ number, icon = 'package', title, text }) {
  return (
    <article className={styles.card}>
      <span className={styles.number}>{number}</span>
      <span className={styles.icon}><Icon name={icon} size={24} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
