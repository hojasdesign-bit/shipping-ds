import React from 'react';
import styles from './Card.module.css';
import { cn } from '../../utils.js';

/** Card — tarjeta base, radio 20-24 (WeShipYou). */
export function Card({ children, variant = 'surface', className = '', ...rest }) {
  return <div className={cn(styles.card, styles[variant], className)} {...rest}>{children}</div>;
}
