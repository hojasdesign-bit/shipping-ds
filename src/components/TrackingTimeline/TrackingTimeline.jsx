import React from 'react';
import styles from './TrackingTimeline.module.css';
import { cn } from '../../utils.js';
import { Icon } from '../Icon/Icon.jsx';

/** TrackingTimeline — línea de tiempo de checkpoints de /tracking. Estados: hecho, actual, pendiente. */
export function TrackingTimeline({ checkpoints = [] }) {
  return (
    <ol className={styles.list}>
      {checkpoints.map((c, i) => (
        <li key={c.label} className={cn(styles.item, styles[c.state || 'pending'])}>
          <span className={styles.dot}><Icon name={c.state === 'done' ? 'check' : 'clock'} size={16} /></span>
          <div>
            <strong>{c.label}</strong>
            <span>{c.date}{c.place ? ' · ' + c.place : ''}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
