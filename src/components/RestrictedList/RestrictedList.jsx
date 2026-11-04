import React from 'react';
import styles from './RestrictedList.module.css';
import { Badge } from '../Badge/Badge.jsx';
import { Icon } from '../Icon/Icon.jsx';

/** RestrictedList — artículos restringidos/prohibidos demo. Lista de ejemplo, no normativa real. */
export function RestrictedList({ items = [] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.name}>
          <Icon name={item.level === 'prohibido' ? 'cancel' : 'shield'} size={20} />
          <div><strong>{item.name}</strong><span>{item.reason}</span></div>
          <Badge tone={item.level === 'prohibido' ? 'danger' : 'warning'}>{item.level === 'prohibido' ? 'Prohibido demo' : 'Restringido demo'}</Badge>
        </li>
      ))}
    </ul>
  );
}
