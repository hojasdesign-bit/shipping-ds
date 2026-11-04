import React, { useState } from 'react';
import styles from './SiteHeader.module.css';
import { Button } from '../Button/Button.jsx';
import { Icon } from '../Icon/Icon.jsx';

/** SiteHeader — header fijo oscuro con controles en píldora (WeShipYou) + cajón móvil. */
export function SiteHeader({ links = ['Tienda', 'Productos', 'Precios', 'Ayuda'], theme = 'oscuro', onThemeToggle, onLogin }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#" aria-label="Gran Azul">
        <img src="/logo/gran-azul.svg" alt="Gran Azul" width="132" height="41" />
      </a>
      <nav className={styles.nav} aria-label="Principal">
        {links.map((l) => <a key={l} href="#">{l}</a>)}
      </nav>
      <div className={styles.actions}>
        <Button variant="secondary" size="sm" onClick={onThemeToggle}>{theme === 'oscuro' ? 'Modo claro' : 'Modo oscuro'}</Button>
        <Button size="sm" onClick={onLogin}>Iniciar sesión</Button>
        <button className={styles.menuButton} onClick={() => setOpen(!open)} aria-label="Abrir menú"><Icon name="menu" size={24} /></button>
      </div>
      {open && (
        <nav className={styles.drawer} aria-label="Móvil">
          {links.map((l) => <a key={l} href="#" onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
      )}
    </header>
  );
}
