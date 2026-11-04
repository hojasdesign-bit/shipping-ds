import { ComparisonTable } from './ComparisonTable.jsx';
const headers = ['Característica demo', 'Convencional demo', 'Integrada demo'];
const rows = [['Rastreo demo', 'Manual demo', 'Automático demo'], ['Etiquetas demo', 'Una por una demo', 'En lote demo'], ['Soporte demo', 'Correo demo', 'Chat demo']];
export default { title: 'Páginas internas/ComparisonTable', component: ComparisonTable };
export const Básico = { args: { headers, rows } };
