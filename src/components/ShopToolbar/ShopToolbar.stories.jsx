import { ShopToolbar } from './ShopToolbar.jsx';
export default { title: 'Páginas internas/ShopToolbar', component: ShopToolbar };
export const Básico = { args: { count: 6, categories: ['Alimentos demo', 'Hogar demo'] } };
export const ConCategoría = { args: { count: 2, categories: ['Alimentos demo', 'Hogar demo'], activeCategory: 'Hogar demo' } };
