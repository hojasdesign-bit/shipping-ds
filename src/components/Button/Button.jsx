import React from 'react';
import styles from './Button.module.css';
import { cn } from '../../utils.js';
import { Icon } from '../Icon/Icon.jsx';

/** Button — botón en píldora (WeShipYou). Variantes: primary, secondary, ghost, brand. */
export function Button({ variant = 'primary', size = 'md', fullWidth = false, loading = false, disabled = false, arrow = false, icon = null, children, className = '', ...rest }) {
  return (
    <button className={cn(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth, loading && styles.loading, className)} disabled={disabled || loading} {...rest}>
      {icon && <Icon name={icon} size={16} />}
      <span>{children}</span>
      {arrow && <Icon name="arrow-right" size={16} />}
    </button>
  );
}
