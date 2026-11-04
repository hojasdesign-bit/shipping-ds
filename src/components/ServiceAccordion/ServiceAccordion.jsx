import React, { useState } from 'react';
import styles from './ServiceAccordion.module.css';
import { Icon } from '../Icon/Icon.jsx';

/** ServiceAccordion — acordeón del stack de fulfillment (WeShipYou). Un panel abierto a la vez. */
export function ServiceAccordion({ items = [], defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <div key={item.title} className={styles.item}>
          <button className={styles.button} onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{item.title}</span><Icon name="chevron-down" size={20} />
          </button>
          {open === i && <div className={styles.panel}>{item.text}</div>}
        </div>
      ))}
    </div>
  );
}
