import { CTAPanel } from './CTAPanel.jsx';
export default { title: 'Contenido/CTAPanel', component: CTAPanel, argTypes: { variant: { control: 'select', options: ['accent', 'brand', 'dark'] } } };
export const Acento = { args: {} };
export const Marca = { args: { variant: 'brand', title: 'Gran Azul demo' } };
export const Oscuro = { args: { variant: 'dark' } };
