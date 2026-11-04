import React, { useState } from 'react';
import styles from './ProductCard.module.css';
import { Badge } from '../Badge/Badge.jsx';
import { Icon } from '../Icon/Icon.jsx';
import { Button } from '../Button/Button.jsx';

/** ProductCard — tarjeta del marketplace: descuento, precio anterior/actual, stock restante, favorito y carrito. */
export function ProductCard({ name, oldPrice, price, discount, stockLeft, favorite = false, onAdd }) {
  const [fav, setFav] = useState(favorite);
  return (
    <article className={styles.card}>
      <div className={styles.cover} aria-hidden="true">
        {discount && <Badge tone="danger">-{discount}%</Badge>}
        <button className={styles.fav} onClick={() => setFav(!fav)} aria-label="Favorito" aria-pressed={fav}><Icon name="heart" size={20} /></button>
      </div>
      <div className={styles.body}>
        <h3>{name}</h3>
        <p className={styles.prices}><s>{oldPrice}</s> <strong>{price}</strong></p>
        {typeof stockLeft === 'number' && <p className={styles.stock}>Quedan {stockLeft} en demo</p>}
        <Button fullWidth icon="cart" onClick={onAdd}>Añadir demo</Button>
      </div>
    </article>
  );
}
