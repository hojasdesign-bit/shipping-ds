import React, { useState } from 'react';
import styles from './RateCalculator.module.css';
import { Input } from '../Input/Input.jsx';
import { Button } from '../Button/Button.jsx';
import { CarrierRateRow } from '../CarrierRateRow/CarrierRateRow.jsx';

/** RateCalculator — calculadora de tarifas demo de /pricing: origen, destino, peso en lb y filas comparadas. Sin tarifas reales. */
const CARRIERS = [
  { carrier: 'Paquetería Demo A', service: 'Estándar demo', days: '5-7', base: 8, perLb: 1.1 },
  { carrier: 'Paquetería Demo B', service: 'Exprés demo', days: '3-4', base: 10, perLb: 1.4 },
  { carrier: 'Paquetería Demo C', service: 'Económica demo', days: '7-10', base: 6, perLb: 0.9 },
];
export function RateCalculator({ origins = ['Ciudad Demo A', 'Ciudad Demo B'], destinations = ['Destino Demo 1', 'Destino Demo 2'] }) {
  const [origin, setOrigin] = useState(origins[0]);
  const [destination, setDestination] = useState(destinations[0]);
  const [weight, setWeight] = useState(5);
  const [results, setResults] = useState(null);
  const calculate = (e) => {
    e.preventDefault();
    const w = Math.max(0, Number(weight) || 0);
    const rows = CARRIERS.map((c) => ({ ...c, price: '$' + (c.base + c.perLb * w).toFixed(2) })).sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    setResults(rows.map((r, i) => ({ ...r, featured: i === 0 })));
  };
  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={calculate}>
        <label className={styles.field}>Origen<select value={origin} onChange={(e) => setOrigin(e.target.value)}>{origins.map((o) => <option key={o}>{o}</option>)}</select></label>
        <label className={styles.field}>Destino<select value={destination} onChange={(e) => setDestination(e.target.value)}>{destinations.map((d) => <option key={d}>{d}</option>)}</select></label>
        <Input label="Peso (lb)" type="number" min="0" step="0.5" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <Button type="submit">Calcular demo</Button>
      </form>
      {results && (
        <div className={styles.results}>
          <p className={styles.summary}>Demo: {origin} → {destination}, {weight} lb. Precios de ejemplo, no tarifas reales.</p>
          {results.map((r) => <CarrierRateRow key={r.carrier} {...r} />)}
        </div>
      )}
    </div>
  );
}
