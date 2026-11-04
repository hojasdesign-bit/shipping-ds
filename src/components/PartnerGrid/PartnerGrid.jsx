import React from 'react';
import styles from './PartnerGrid.module.css';

/** PartnerGrid — cuadrícula de nombres demo. No son alianzas ni logos reales. */
export function PartnerGrid({ partners = [] }) {
  return (
    <div className={styles.grid}>
      {partners.map((p) => (
        <div key={p} className={styles.tile}><span>{p.charAt(0)}</span>{p}</div>
      ))}
    </div>
  );
}
