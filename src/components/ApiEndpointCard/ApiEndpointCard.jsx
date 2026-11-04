import React from 'react';
import styles from './ApiEndpointCard.module.css';
import { Badge } from '../Badge/Badge.jsx';

/** ApiEndpointCard — tarjeta de endpoint demo (método, ruta, descripción y respuesta de ejemplo). */
export function ApiEndpointCard({ method = 'GET', path, description, example }) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <Badge tone={method === 'POST' ? 'success' : 'accent'}>{method}</Badge>
        <code>{path}</code>
      </div>
      <p>{description}</p>
      {example && <pre className={styles.code}>{example}</pre>}
    </article>
  );
}
