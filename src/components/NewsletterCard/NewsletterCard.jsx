import React, { useState } from 'react';
import styles from './NewsletterCard.module.css';
import { Input } from '../Input/Input.jsx';
import { Button } from '../Button/Button.jsx';

/** NewsletterCard — suscripción demo, sin backend ni envío real. */
export function NewsletterCard({ title = 'Únete al boletín demo', text = 'Texto demo: novedades de ejemplo de Gran Azul, sin spam real.' }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e) => { e.preventDefault(); if (email.includes('@')) setDone(true); };
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
      {done ? <p className={styles.done}>¡Gracias! Esta demo no guarda tu correo.</p> : (
        <form className={styles.form} onSubmit={submit}>
          <Input placeholder="tu@ejemplo.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Correo demo" />
          <Button type="submit">Suscribirme demo</Button>
        </form>
      )}
    </section>
  );
}
