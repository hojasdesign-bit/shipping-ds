import React from 'react';
import styles from './Badge.module.css';
import { cn } from '../../utils.js';

/** Badge — etiqueta pequeña en píldora. */
export function Badge({ children, tone = 'default', className = '', ...rest }) {
  return <span className={cn(styles.badge, styles[tone], className)} {...rest}>{children}</span>;
}
