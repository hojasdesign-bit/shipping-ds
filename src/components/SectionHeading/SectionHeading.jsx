import React from 'react';
import styles from './SectionHeading.module.css';
import { cn } from '../../utils.js';

/** SectionHeading — eyebrow en mayúsculas + título + texto, como las secciones de los referentes. */
export function SectionHeading({ eyebrow, title, text, align = 'center', className = '' }) {
  return (
    <div className={cn(styles.wrap, styles[align], className)}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
