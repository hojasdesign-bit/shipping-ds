import React, { useState } from 'react';
import styles from './LockerCard.module.css';
import { Icon } from '../Icon/Icon.jsx';
import { Button } from '../Button/Button.jsx';

/** LockerCard — casillero demo: código, tarjeta de dirección demo y QR demo (patrón, no un QR real). */
export function LockerCard({ code = 'GA-DEMO-1234', address = ['Gran Azul Demo', '123 Calle Ejemplo', 'Ciudad Demo, EE. UU. 33100'] }) {
  const [copied, setCopied] = useState(false);
  const cells = Array.from({ length: 49 }, (_, i) => ((i * 7 + code.length * 3) % 5) < 2);
  const copy = async () => { try { await navigator.clipboard.writeText(address.join(', ')); } catch {} setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <article className={styles.card}>
      <div>
        <p className={styles.label}>Tu casillero demo</p>
        <h3>{code}</h3>
        <address className={styles.address}>{address.map((l) => <span key={l}>{l}</span>)}</address>
        <Button variant="secondary" size="sm" icon="check" onClick={copy}>{copied ? 'Copiado' : 'Copiar dirección demo'}</Button>
      </div>
      <div className={styles.qr} aria-label="QR demo">
        {cells.map((on, i) => <span key={i} className={on ? styles.on : styles.off} />)}
        <span className={styles.qrLabel}><Icon name="qr" size={16} /> QR demo</span>
      </div>
    </article>
  );
}
