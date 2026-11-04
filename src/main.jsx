import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';
import './base.css';
import './demo.css';
import { Icon } from './components/Icon/Icon.jsx';
import { Button } from './components/Button/Button.jsx';
import { Input } from './components/Input/Input.jsx';
import { TrackingSearch } from './components/TrackingSearch/TrackingSearch.jsx';
import { Badge } from './components/Badge/Badge.jsx';
import { Card } from './components/Card/Card.jsx';
import { SectionHeading } from './components/SectionHeading/SectionHeading.jsx';
import { SiteHeader } from './components/SiteHeader/SiteHeader.jsx';
import { TrackingHero } from './components/TrackingHero/TrackingHero.jsx';
import { StorefrontCard } from './components/StorefrontCard/StorefrontCard.jsx';
import { ProductCard } from './components/ProductCard/ProductCard.jsx';
import { StepCard } from './components/StepCard/StepCard.jsx';
import { IntegrationStrip } from './components/IntegrationStrip/IntegrationStrip.jsx';
import { ServiceAccordion } from './components/ServiceAccordion/ServiceAccordion.jsx';
import { FeatureCard } from './components/FeatureCard/FeatureCard.jsx';
import { DestinationCard } from './components/DestinationCard/DestinationCard.jsx';
import { LockerCard } from './components/LockerCard/LockerCard.jsx';
import { StatStrip } from './components/StatStrip/StatStrip.jsx';
import { ReviewCard } from './components/ReviewCard/ReviewCard.jsx';
import { NewsletterCard } from './components/NewsletterCard/NewsletterCard.jsx';
import { CTAPanel } from './components/CTAPanel/CTAPanel.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { CarrierRateRow } from './components/CarrierRateRow/CarrierRateRow.jsx';
import { FAQAccordion } from './components/FAQAccordion/FAQAccordion.jsx';
import { PartnerGrid } from './components/PartnerGrid/PartnerGrid.jsx';
import { BenefitCard } from './components/BenefitCard/BenefitCard.jsx';
import { RateCalculator } from './components/RateCalculator/RateCalculator.jsx';
import { TrackingTimeline } from './components/TrackingTimeline/TrackingTimeline.jsx';
import { ShopToolbar } from './components/ShopToolbar/ShopToolbar.jsx';
import { CartDrawer } from './components/CartDrawer/CartDrawer.jsx';
import { ComparisonTable } from './components/ComparisonTable/ComparisonTable.jsx';
import { ProductSuiteCard } from './components/ProductSuiteCard/ProductSuiteCard.jsx';
import { CustomsBreakdown } from './components/CustomsBreakdown/CustomsBreakdown.jsx';
import { RestrictedList } from './components/RestrictedList/RestrictedList.jsx';
import { DocsNav } from './components/DocsNav/DocsNav.jsx';
import { ApiEndpointCard } from './components/ApiEndpointCard/ApiEndpointCard.jsx';

const PRODUCTS = [
  { name: 'Combo demo familiar', category: 'Alimentos demo', price: 39, oldPrice: '$50.00', priceLabel: '$39.00', discount: 22, stockLeft: 5 },
  { name: 'Canasta demo hogar', category: 'Hogar demo', price: 28, oldPrice: '$35.00', priceLabel: '$28.00', discount: 20, stockLeft: 8 },
  { name: 'Despensa demo básica', category: 'Alimentos demo', price: 19, oldPrice: '$24.00', priceLabel: '$19.00', discount: 21, stockLeft: 12 },
  { name: 'Kit demo cocina', category: 'Hogar demo', price: 45, oldPrice: '$60.00', priceLabel: '$45.00', discount: 25, stockLeft: 3 },
  { name: 'Combo demo merienda', category: 'Alimentos demo', price: 15, oldPrice: '$18.00', priceLabel: '$15.00', discount: 17, stockLeft: 20 },
  { name: 'Set demo limpieza', category: 'Hogar demo', price: 22, oldPrice: '$27.00', priceLabel: '$22.00', discount: 19, stockLeft: 7 },
];
const CHECKPOINTS = [
  { label: 'Paquete demo recibido', date: 'Día 1 demo', place: 'Casillero demo', state: 'done' },
  { label: 'En tránsito demo', date: 'Día 3 demo', place: 'Ruta demo', state: 'current' },
  { label: 'Entrega demo', date: 'Pendiente demo', place: 'Destino demo', state: 'pending' },
];

function Demo() {
  const [theme, setTheme] = useState('oscuro');
  const [tracked, setTracked] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const [sort, setSort] = useState('relevancia');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [doc, setDoc] = useState('Empezar demo');
  const [demoCode, setDemoCode] = useState('');

  const filtered = PRODUCTS.filter((p) => (category === 'Todos' || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase()));
  const sorted = [...filtered].sort((a, b) => (sort === 'precio-asc' ? a.price - b.price : sort === 'precio-desc' ? b.price - a.price : 0));
  const addToCart = (p) => setCart((prev) => {
    const found = prev.find((i) => i.name === p.name);
    return found ? prev.map((i) => (i.name === p.name ? { ...i, qty: i.qty + 1 } : i)) : [...prev, { name: p.name, price: p.price, qty: 1 }];
  });

  return (
    <div data-theme={theme} className="sd-demo">
      <SiteHeader theme={theme} onThemeToggle={() => setTheme(theme === 'oscuro' ? 'claro' : 'oscuro')} onLogin={() => alert('Demo: el inicio de sesión no está conectado.')} />
      <TrackingHero onTrack={(code) => setTracked(code || 'GA-DEMO-1234')} />

      <section className="sd-section" aria-labelledby="base">
        <SectionHeading eyebrow="Sistema" title="Componentes base" text="Botones, campos, insignias y tarjetas del Shipping DS, en el tema actual." />
        <Card>
          <div className="sd-row">
            <Icon name="package" size={24} />
            <Badge tone="accent">Demo</Badge>
            <Badge tone="brand">Gran Azul</Badge>
            <Button arrow>Botón principal</Button>
            <Button variant="secondary">Secundario</Button>
          </div>
          <div style={{ marginTop: 16, maxWidth: 420 }}>
            <Input label="Campo demo" placeholder="Escribe algo demo" hint="Este campo no guarda nada." />
          </div>
        </Card>
      </section>

      <section className="sd-section" aria-labelledby="rastreo">
        <SectionHeading eyebrow="Rastreo" title="Rastrea y sigue tu envío demo" text="El rastreador es solo una muestra: cualquier código genera el mismo ejemplo." />
        <TrackingSearch onTrack={(code) => setTracked(code || 'GA-DEMO-1234')} />
        <div className="sd-track-result">
          <p><strong>Código demo:</strong> {tracked || 'GA-DEMO-1234 (ejemplo)'}</p>
          <TrackingTimeline checkpoints={CHECKPOINTS} />
        </div>
      </section>

      <section className="sd-section" aria-labelledby="tiendas">
        <SectionHeading eyebrow="Tiendas" title="Tiendas demo verificadas" text="Nombres inventados para la demo; no son tiendas ni alianzas reales." />
        <div className="sd-grid">
          <StorefrontCard name="Tienda Demo Norte" location="Ciudad Demo, EE. UU." rating="4.8" tag="Envíos demo" />
          <StorefrontCard name="Tienda Demo Sur" location="Ciudad Demo, EE. UU." rating="4.5" tag="Ofertas demo" />
          <StorefrontCard name="Tienda Demo Centro" location="Ciudad Demo, EE. UU." rating="4.9" verified={false} tag="Novedades demo" />
        </div>
      </section>

      <section className="sd-section" aria-labelledby="tienda">
        <SectionHeading eyebrow="Tienda demo" title="Compra demo, sin pagos reales" text="Filtra, ordena y añade productos demo al carrito lateral." />
        <ShopToolbar count={sorted.length} categories={['Alimentos demo', 'Hogar demo']} activeCategory={category} onCategoryChange={setCategory} sort={sort} onSortChange={setSort} search={search} onSearchChange={setSearch} />
        <div className="sd-row"><Button variant="secondary" onClick={() => setCartOpen(true)}>Ver carrito demo ({cart.reduce((s, i) => s + i.qty, 0)})</Button></div>
        <div className="sd-grid">
          {sorted.map((p) => <ProductCard key={p.name} name={p.name} oldPrice={p.oldPrice} price={p.priceLabel} discount={p.discount} stockLeft={p.stockLeft} onAdd={() => addToCart(p)} />)}
        </div>
        {sorted.length === 0 && <p>No hay productos demo con ese filtro.</p>}
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onRemove={(name) => setCart(cart.filter((i) => i.name !== name))} />
      </section>

      <section className="sd-section" aria-labelledby="pasos">
        <SectionHeading eyebrow="Cómo funciona" title="Enviar con Gran Azul, en cuatro pasos demo" />
        <div className="sd-grid">
          <StepCard number="01" icon="package" title="Prepara tu envío demo" text="Texto demo: describe el paquete de ejemplo." />
          <StepCard number="02" icon="building" title="Recíbelo en tu casillero demo" text="Texto demo: usa la dirección de ejemplo." />
          <StepCard number="03" icon="truck" title="Lo enviamos demo" text="Texto demo: sale con rastreo de ejemplo." />
          <StepCard number="04" icon="check" title="Entrega demo" text="Texto demo: el destino recibe el ejemplo." />
        </div>
      </section>

      <section className="sd-section" aria-labelledby="integraciones">
        <IntegrationStrip title="Conecta tu tienda demo" items={[{ name: 'Tienda Demo Norte', icon: 'building' }, { name: 'Venta Directa Demo', icon: 'cart' }, { name: 'API Gran Azul Demo', icon: 'globe' }]} />
      </section>

      <section className="sd-section" aria-labelledby="servicios">
        <SectionHeading eyebrow="Servicios" title="El stack de fulfillment demo" />
        <ServiceAccordion items={[
          { title: 'Recepción demo', text: 'Texto demo: recibimos el paquete de ejemplo en el casillero.' },
          { title: 'Preparación demo', text: 'Texto demo: revisamos, empacamos y etiquetamos el ejemplo.' },
          { title: 'Envío demo', text: 'Texto demo: sale hacia el destino de ejemplo con rastreo.' },
        ]} />
        <div className="sd-grid">
          <ProductSuiteCard icon="package" name="Gran Azul Core demo" tagline="Texto demo: el producto central de ejemplo para envíos." features={['Rastreo demo', 'Casillero demo', 'Soporte demo']} featured />
          <ProductSuiteCard icon="shield" name="Protección demo" tagline="Texto demo: cobertura de ejemplo para paquetes demo." features={['Cobertura demo', 'Reclamos demo']} />
          <ProductSuiteCard icon="truck" name="Envíos demo" tagline="Texto demo: rutas y tarifas de ejemplo." features={['Comparador demo', 'Tarifas demo']} />
        </div>
      </section>

      <section className="sd-section" aria-labelledby="beneficios">
        <SectionHeading eyebrow="Por qué Gran Azul demo" title="Beneficios de ejemplo" />
        <div className="sd-grid">
          <FeatureCard icon="package" title="Inventario demo por SKU" text="Texto demo: cada artículo de ejemplo tiene su código." metric="24 h" metricLabel="preparación demo" />
          <FeatureCard icon="truck" title="Envío demo el mismo día" text="Texto demo: ejemplo de preparación rápida, sin cifras reales." />
          <BenefitCard icon="shield" title="Envío demo protegido" text="Texto demo: ejemplo de cobertura y seguimiento." checks={['Rastreo demo incluido', 'Soporte demo', 'Sin pagos reales']} />
        </div>
      </section>

      <section className="sd-section" aria-labelledby="destinos">
        <SectionHeading eyebrow="Destinos" title="Destinos demo destacados" />
        <div className="sd-grid">
          <DestinationCard city="La Habana (demo)" code="LH" priceFrom="$12.00" days="5-7" highlight />
          <DestinationCard city="Santiago (demo)" code="ST" priceFrom="$14.00" days="6-8" />
          <DestinationCard city="Camagüey (demo)" code="CM" priceFrom="$13.00" days="5-8" />
        </div>
      </section>

      <section className="sd-section" aria-labelledby="casillero">
        <SectionHeading eyebrow="Casillero" title="Tu casillero demo gratis" text="Dirección y QR de ejemplo; no es una dirección real de recepción." />
        <LockerCard />
      </section>

      <section className="sd-section" aria-labelledby="calculadora">
        <SectionHeading eyebrow="Precios demo" title="Calcula tu tarifa demo" text="Origen, destino y peso en lb, con filas comparadas de ejemplo. No son tarifas reales." />
        <RateCalculator />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <CarrierRateRow carrier="Paquetería Demo A" service="Estándar demo" days="5-7" price="$18.50" />
          <CarrierRateRow carrier="Paquetería Demo B" service="Exprés demo" days="3-4" price="$16.20" featured />
        </div>
        <CustomsBreakdown items={[{ category: 'Alimentos demo', duty: '5% demo', tax: '2% demo', amount: 7 }, { category: 'Hogar demo', duty: '8% demo', tax: '3% demo', amount: 11 }]} />
        <RestrictedList items={[{ name: 'Artículo demo A', reason: 'Ejemplo: requiere revisión demo.', level: 'restringido' }, { name: 'Artículo demo B', reason: 'Ejemplo: no se acepta en demo.', level: 'prohibido' }]} />
      </section>

      <section className="sd-section" aria-labelledby="comparativa">
        <SectionHeading eyebrow="Comparativa demo" title="Logística convencional vs integrada (demo)" />
        <ComparisonTable headers={['Característica demo', 'Convencional demo', 'Integrada demo']} rows={[['Rastreo demo', 'Manual demo', 'Automático demo'], ['Etiquetas demo', 'Una por una demo', 'En lote demo'], ['Soporte demo', 'Correo demo', 'Chat demo']]} highlightColumn={2} />
      </section>

      <section className="sd-section" aria-labelledby="metricas">
        <StatStrip stats={[{ value: '150+', label: 'Destinos demo' }, { value: '280+', label: 'Rutas demo' }, { value: '24 h', label: 'Preparación demo' }, { value: '4.8', label: 'Valoración demo' }]} />
      </section>

      <section className="sd-section" aria-labelledby="resenas">
        <SectionHeading eyebrow="Reseñas demo" title="Lo que dicen los ejemplos" />
        <div className="sd-grid">
          <ReviewCard name="María Demo" location="Ciudad Demo" rating={5} date="Demo" text="Texto demo inventado: el seguimiento de ejemplo fue claro de principio a fin." />
          <ReviewCard name="Carlos Demo" location="Ciudad Demo" rating={4} text="Texto demo inventado: buena experiencia de ejemplo." />
        </div>
      </section>

      <section className="sd-section" aria-labelledby="socios">
        <SectionHeading eyebrow="Socios demo" title="Logística demo, sin alianzas reales" />
        <PartnerGrid partners={['Logística Demo A', 'Logística Demo B', 'Logística Demo C', 'Logística Demo D']} />
      </section>

      <section className="sd-section" aria-labelledby="faq">
        <SectionHeading eyebrow="Preguntas demo" title="Preguntas frecuentes de ejemplo" />
        <FAQAccordion items={[
          { question: '¿Esto es un servicio real?', answer: 'No: esta es una demo del sistema de diseño, sin backend ni pagos reales.' },
          { question: '¿Cómo rastreo un envío demo?', answer: 'Escribe cualquier código demo en el rastreador y verás un estado de ejemplo.' },
          { question: '¿Las tarifas son reales?', answer: 'No: la calculadora y el desglose usan cifras de ejemplo.' },
        ]} />
      </section>

      <section className="sd-section" aria-labelledby="docs">
        <SectionHeading eyebrow="Documentación demo" title="Docs y API de ejemplo" />
        <div className="sd-docs">
          <DocsNav sections={[{ title: 'Guías demo', links: ['Empezar demo', 'Envíos demo', 'Rastreo demo'] }, { title: 'API demo', links: ['Crear envío demo', 'Consultar envío demo'] }]} active={doc} onSelect={setDoc} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p>Sección demo seleccionada: <strong>{doc}</strong></p>
            <ApiEndpointCard method="GET" path="/v1/envios/demo" description="Ejemplo demo: consulta un envío de ejemplo." example={'{ "codigo": "GA-DEMO-1234", "estado": "En tránsito demo" }'} />
            <ApiEndpointCard method="POST" path="/v1/envios/demo" description="Ejemplo demo: crea un envío de ejemplo." example={'{ "ok": true, "codigo": "GA-DEMO-1234" }'} />
          </div>
        </div>
      </section>

      <section className="sd-section" aria-labelledby="cta">
        <CTAPanel title="Empieza hoy (demo)" text="Texto demo propio de Gran Azul: explora el sistema sin servicios ni pagos reales." primaryLabel="Empezar demo" secondaryLabel="Ver precios demo" />
        <NewsletterCard />
      </section>

      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Demo />);
