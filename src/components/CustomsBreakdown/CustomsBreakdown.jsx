import React from 'react';
import styles from './CustomsBreakdown.module.css';

/** CustomsBreakdown — desglose de aranceles/impuestos por categoría demo. Porcentajes y totales de ejemplo, no tarifas reales. */
export function CustomsBreakdown({ items = [], note = 'Demo: cifras de ejemplo, no aranceles ni impuestos reales.' }) {
  const total = items.reduce((s, i) => s + i.amount, 0);
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead><tr><th>Categoría demo</th><th>Arancel demo</th><th>Impuesto demo</th><th>Monto demo</th></tr></thead>
        <tbody>
          {items.map((i) => <tr key={i.category}><td>{i.category}</td><td>{i.duty}</td><td>{i.tax}</td><td>${i.amount.toFixed(2)}</td></tr>)}
          <tr className={styles.total}><td>Total demo</td><td></td><td></td><td>${total.toFixed(2)}</td></tr>
        </tbody>
      </table>
      <p>{note}</p>
    </div>
  );
}
