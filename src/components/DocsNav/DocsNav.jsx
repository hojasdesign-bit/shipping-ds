import React from 'react';
import styles from './DocsNav.module.css';
import { cn } from '../../utils.js';

/** DocsNav — navegación lateral de documentación demo. */
export function DocsNav({ sections = [], active = '', onSelect }) {
  return (
    <nav className={styles.nav} aria-label="Documentación demo">
      {sections.map((section) => (
        <div key={section.title}>
          <h4>{section.title}</h4>
          {section.links.map((link) => (
            <a key={link} href="#" onClick={(e) => { e.preventDefault(); if (onSelect) onSelect(link); }} className={cn(active === link && styles.active)}>{link}</a>
          ))}
        </div>
      ))}
    </nav>
  );
}
