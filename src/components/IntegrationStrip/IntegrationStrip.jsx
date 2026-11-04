import React from 'react';
import styles from './IntegrationStrip.module.css';
import { Icon } from '../Icon/Icon.jsx';

/** IntegrationStrip — franja de integraciones demo. Nombres inventados: no afirma integraciones reales. */
export function IntegrationStrip({ title = 'Conecta tu tienda demo', items = [] }) {
  return (
    <section className={styles.strip}>
      <h3>{title}</h3>
      <div className={styles.items}>
        {items.map((item) => (
          <span key={item.name} className={styles.item}><Icon name={item.icon || 'building'} size={20} /> {item.name}</span>
        ))}
      </div>
    </section>
  );
}
