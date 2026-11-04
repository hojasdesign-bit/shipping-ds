# Shipping DS · Gran Azul (local, sin deploy)

Sistema de diseño en Storybook basado en patrones encontrados en las homes y
páginas internas de solo dos referentes: WeShipYou (`weshipyou.com/es`) y
Envíoclick (`envioclick.com/mx`). En duplicados manda WeShipYou: oscuro de
base, botones en píldora, tarjetas radio 16-24.

Marca: Gran Azul. Logo en `public/logo/gran-azul.svg` (copia del archivo
entregado por el usuario). No se usan logos, fotos, textos de marketing ni
cifras reales de los referentes. Todo el contenido es demo genérico de Gran
Azul: transportistas, tiendas, socios y métricas inventados, sin afirmar
alianzas ni tarifas reales. Sin backend ni pagos reales.

## Tokens `--sd-*` (`src/tokens.css`)

Oscuro por defecto (`data-theme="oscuro"`), claro disponible (`data-theme="claro"`).
Tipografía: DM Sans (la de Gran Azul).

Valores medidos por muestreo de píxeles en vivo (2026-11-03):

- Oscuro (WeShipYou): fondo `#14171F`, header `#141823`, borde `#242938`,
  héroe degradado centro `#1C212F`, acción `#395CAC`, azul claro `#6685CC`,
  tarjeta marketplace `#ECECF0`, tarjeta oscura `#171C26`.
- Claro (Envíoclick): fondo `#F2F3F6`, header `#FCFDFD`, acción azul marino `#001142`.

Marca Gran Azul `#0075A7` / `#13C1DF` solo para logo y acentos de marca,
no como color de acción principal. El resto de grises y hover son estimaciones
visuales documentadas en `tokens.css`.

Iconos: solo HugeIcons (`@hugeicons/core-free-icons`), estilo Stroke Rounded,
grosor normalizado a 1.8, `currentColor`, rejilla 24×24, tamaños 16/20/24, en
`src/components/Icon/Icon.jsx`.

## Componentes (36 exportados en `src/index.js`)

Cada uno en `src/components/<Nombre>/` con `<Nombre>.jsx`,
`<Nombre>.module.css` y `<Nombre>.stories.jsx` en español.

### De la home (25)

Button, Input, TrackingSearch, Badge, Card, SectionHeading, SiteHeader,
TrackingHero, StorefrontCard, ProductCard, StepCard, IntegrationStrip,
ServiceAccordion, FeatureCard, DestinationCard, LockerCard, StatStrip,
ReviewCard, NewsletterCard, CTAPanel, Footer, CarrierRateRow, FAQAccordion,
PartnerGrid, BenefitCard.

### De páginas internas (10)

- RateCalculator — `/pricing`: origen, destino, peso en lb, filas comparadas.
- TrackingTimeline — `/tracking`: línea de tiempo de checkpoints.
- ShopToolbar — `/shop`: búsqueda, categorías, ordenar por, contador.
- CartDrawer — `/shop`: carrito lateral con Subtotal.
- ComparisonTable — `/integraciones`, `/pricing`: comparativa demo.
- ProductSuiteCard — páginas de producto (Core y adicionales demo).
- CustomsBreakdown — `/pricing`: aranceles/impuestos por categoría demo.
- RestrictedList — `/pricing`: restringidos/prohibidos demo.
- DocsNav — `/docs`, `/docs/api`: navegación lateral de documentación.
- ApiEndpointCard — `/docs/api`: tarjeta de endpoint demo.

Más Icon como infraestructura de iconos.

## Página de muestra

`src/main.jsx` monta una demo oscura por defecto con toggle claro/oscuro que
usa todos los componentes, con secciones propias para calculadora, rastreo,
tienda + carrito, comparativa y documentación.

## Desarrollo local (sin push ni deploy)

```bash
npm install
npm run build            # app demo -> dist/
npm run build-storybook  # Storybook -> storybook-static/
npm run storybook        # dev en http://localhost:6006
```

El push a GitHub y el despliegue en Cloudflare los hace el usuario después de
verificar este build local.
