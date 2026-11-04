import React from 'react';
import styles from './ReviewCard.module.css';
import { Icon } from '../Icon/Icon.jsx';

/** ReviewCard — reseña demo con estrellas (trazo HugeIcons; activas en acento, resto tenues). */
export function ReviewCard({ name, location, rating = 5, date, text }) {
  return (
    <article className={styles.card}>
      <div className={styles.stars} aria-label={rating + ' de 5 estrellas'}>
        {[1, 2, 3, 4, 5].map((n) => <Icon key={n} name="star" size={16} className={n <= rating ? styles.on : styles.off} />)}
      </div>
      <p className={styles.text}>{text}</p>
      <p className={styles.author}><strong>{name}</strong> · {location} {date && <>· {date}</>}</p>
    </article>
  );
}
