import React from 'react';
import styles from './StatStrip.module.css';

/** StatStrip — franja de cifras demo. Los valores son de ejemplo, no métricas reales. */
export function StatStrip({ stats = [] }) {
  return (
    <div className={styles.strip}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <strong>{s.value}</strong><span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
