import React from 'react';
import styles from './CTAPanel.module.css';
import { cn } from '../../utils.js';
import { Button } from '../Button/Button.jsx';

/** CTAPanel — llamada final (WeShipYou "START NOW" / Envíoclick cierre). */
export function CTAPanel({ title = 'Empieza hoy (demo)', text = 'Texto demo propio de Gran Azul.', primaryLabel = 'Empezar demo', secondaryLabel = 'Ver precios demo', variant = 'accent' }) {
  return (
    <section className={cn(styles.panel, styles[variant])}>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={styles.actions}>
        <Button variant={variant === 'brand' ? 'brand' : 'primary'}>{primaryLabel}</Button>
        <Button variant="secondary">{secondaryLabel}</Button>
      </div>
    </section>
  );
}
