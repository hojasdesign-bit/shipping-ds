import React from 'react';
import styles from './CartDrawer.module.css';
import { Icon } from '../Icon/Icon.jsx';
import { Button } from '../Button/Button.jsx';

/** CartDrawer — carrito lateral de /shop con Subtotal demo. Sin pagos reales. */
export function CartDrawer({ open = false, onClose, items = [], onRemove }) {
  if (!open) return null;
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return (
    <div className={styles.overlay} role="dialog" aria-label="Carrito demo">
      <div className={styles.backdrop} onClick={onClose} />
      <aside className={styles.drawer}>
        <div className={styles.head}>
          <h3>Carrito demo</h3>
          <button className={styles.close} onClick={onClose} aria-label="Cerrar carrito"><Icon name="cancel" size={20} /></button>
        </div>
        {items.length === 0 ? <p className={styles.empty}>Tu carrito demo está vacío.</p> : (
          <>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.name}>
                  <div><strong>{item.name}</strong><span>{item.qty} × ${item.price.toFixed(2)}</span></div>
                  <strong>${(item.price * item.qty).toFixed(2)}</strong>
                  {onRemove && <button className={styles.remove} onClick={() => onRemove(item.name)}>Quitar</button>}
                </li>
              ))}
            </ul>
            <div className={styles.subtotal}><span>Subtotal demo</span><strong>${subtotal.toFixed(2)}</strong></div>
            <Button fullWidth>Finalizar demo (sin pago)</Button>
          </>
        )}
      </aside>
    </div>
  );
}
