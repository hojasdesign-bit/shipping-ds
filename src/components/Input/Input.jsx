import React from 'react';
import styles from './Input.module.css';
import { cn } from '../../utils.js';
import { Icon } from '../Icon/Icon.jsx';

/** Input — campo con etiqueta, icono opcional, ayuda y error. */
export function Input({ label, hint, error, icon = null, className = '', ...rest }) {
  return (
    <label className={cn(styles.wrap, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <span className={cn(styles.field, error && styles.hasError)}>
        {icon && <Icon name={icon} size={20} />}
        <input className={styles.input} {...rest} />
      </span>
      {hint && !error && <span className={styles.hint}>{hint}</span>}
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
