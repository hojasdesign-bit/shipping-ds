import { CustomsBreakdown } from './CustomsBreakdown.jsx';
const items = [{ category: 'Alimentos demo', duty: '5% demo', tax: '2% demo', amount: 7 }, { category: 'Hogar demo', duty: '8% demo', tax: '3% demo', amount: 11 }];
export default { title: 'Páginas internas/CustomsBreakdown', component: CustomsBreakdown };
export const Básico = { args: { items } };
