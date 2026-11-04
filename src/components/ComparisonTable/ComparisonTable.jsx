import React from 'react';
import styles from './ComparisonTable.module.css';
import { cn } from '../../utils.js';

/** ComparisonTable — tabla comparativa demo (logística convencional vs integrada; planes demo). La columna destacada se marca, sin cifras reales. */
export function ComparisonTable({ headers = [], rows = [], highlightColumn = 1 }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead><tr>{headers.map((h, i) => <th key={h} className={cn(i === highlightColumn && styles.highlight)}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>{row.map((cell, i) => <td key={i} className={cn(i === highlightColumn && styles.highlight)}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
