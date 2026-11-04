import { Badge } from './Badge.jsx';
export default { title: 'Núcleo/Badge', component: Badge, argTypes: { tone: { control: 'select', options: ['default', 'accent', 'brand', 'success', 'warning', 'danger'] } } };
export const PorDefecto = { args: { children: 'En tránsito' } };
export const Acento = { args: { tone: 'accent', children: 'Más económico' } };
export const Marca = { args: { tone: 'brand', children: 'Gran Azul' } };
export const Éxito = { args: { tone: 'success', children: 'Entregado' } };
export const Todos = { render: () => (<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{['default', 'accent', 'brand', 'success', 'warning', 'danger'].map((t) => <Badge key={t} tone={t}>{t}</Badge>)}</div>) };
