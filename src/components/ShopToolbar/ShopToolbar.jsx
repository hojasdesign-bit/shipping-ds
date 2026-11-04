import React from 'react';
import styles from './ShopToolbar.module.css';
import { cn } from '../../utils.js';
import { Input } from '../Input/Input.jsx';

/** ShopToolbar — barra de /shop: búsqueda, categorías, ordenar por y contador de productos demo. */
export function ShopToolbar({ count = 0, categories = [], activeCategory = 'Todos', onCategoryChange, sort = 'relevancia', onSortChange, search = '', onSearchChange }) {
  return (
    <div className={styles.toolbar}>
      <Input placeholder="Buscar productos demo" icon="search" value={search} onChange={(e) => onSearchChange && onSearchChange(e.target.value)} aria-label="Buscar productos demo" />
      <div className={styles.cats} role="group" aria-label="Categorías demo">
        {['Todos', ...categories].map((c) => (
          <button key={c} className={cn(styles.cat, activeCategory === c && styles.active)} onClick={() => onCategoryChange && onCategoryChange(c)}>{c}</button>
        ))}
      </div>
      <label className={styles.sort}>Ordenar por
        <select value={sort} onChange={(e) => onSortChange && onSortChange(e.target.value)}>
          <option value="relevancia">Relevancia demo</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
        </select>
      </label>
      <p className={styles.count}>{count} productos demo</p>
    </div>
  );
}
