import React from 'react';
import styles from './BenefitCard.module.css';
import { Icon } from '../Icon/Icon.jsx';

/** BenefitCard — beneficio con lista de verificación (patrón de beneficios de ambos referentes). */
export function BenefitCard({ icon = 'shield', title, text, checks = [] }) {
  return (
    <article className={styles.card}>
      <span className={styles.icon}><Icon name={icon} size={24} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
      <ul>
        {checks.map((c) => <li key={c}><Icon name="check" size={16} /> {c}</li>)}
      </ul>
    </article>
  );
}
