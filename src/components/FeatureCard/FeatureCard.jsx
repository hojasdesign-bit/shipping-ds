import React from 'react';
import styles from './FeatureCard.module.css';
import { Icon } from '../Icon/Icon.jsx';

/** FeatureCard — tarjeta oscura con icono y métrica demo (WeShipYou, "por qué usarlo"). */
export function FeatureCard({ icon = 'package', title, text, metric, metricLabel }) {
  return (
    <article className={styles.card}>
      <span className={styles.icon}><Icon name={icon} size={24} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
      {metric && <p className={styles.metric}>{metric} <span>{metricLabel}</span></p>}
    </article>
  );
}
