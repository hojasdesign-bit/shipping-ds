import React, { useState } from 'react';
import styles from './TrackingSearch.module.css';
import { Icon } from '../Icon/Icon.jsx';
import { Button } from '../Button/Button.jsx';

/** TrackingSearch — campo de rastreo en píldora (WeShipYou). Solo demo, sin backend. */
export function TrackingSearch({ placeholder = 'Escribe tu número de rastreo', buttonLabel = 'Rastrear', onTrack, className = '' }) {
  const [value, setValue] = useState('');
  const submit = (e) => { e.preventDefault(); if (onTrack) onTrack(value.trim()); };
  return (
    <form className={styles.form + (className ? ' ' + className : '')} onSubmit={submit} role="search">
      <Icon name="search" size={20} />
      <input className={styles.input} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} aria-label="Número de rastreo" />
      <Button type="submit">{buttonLabel}</Button>
    </form>
  );
}
