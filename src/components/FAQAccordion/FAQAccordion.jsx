import React, { useState } from 'react';
import styles from './FAQAccordion.module.css';
import { Icon } from '../Icon/Icon.jsx';

/** FAQAccordion — preguntas frecuentes (patrón presente en ambos referentes). */
export function FAQAccordion({ items = [], defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <div key={item.question} className={styles.item}>
          <button className={styles.button} onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{item.question}</span><Icon name={open === i ? 'minus' : 'plus'} size={20} />
          </button>
          {open === i && <div className={styles.panel}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}
