import ServiceDetailES from '@/components/sections/ServiceDetailES';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const FAQS = [
  { q: '¿A dónde se mudan?', a: 'A cualquier parte de los Estados Unidos continentales desde nuestra base en Orlando. Florida a Texas, Georgia a California — conducimos nuestros propios camiones, sin subcontratistas ni transferencias en almacenes.' },
  { q: '¿Cómo se calcula el precio de larga distancia?', a: 'Peso + distancia + servicios. Proporcionamos un estimado vinculante después de una inspección (en persona o por video).' },
  { q: '¿Cuánto tiempo estarán mis cosas en el camino?', a: 'Entrega directa. Sus cosas van de su casa anterior a su nueva casa en el mismo camión, conducido por el mismo equipo. Tránsito típico: 2–5 días.' },
  { q: '¿Manejan almacenamiento intermedio?', a: 'Sí — podemos arreglar almacenamiento a corto plazo en el origen o destino si sus fechas de mudanza no coinciden.' },
];

export const metadata = {
  title: 'Mudanzas de Larga Distancia Orlando | Florida a Cualquier Parte',
  description: 'Mudanzas de larga distancia desde Orlando a cualquier parte de los EE.UU. Camiones dedicados, entrega directa, precios claros. Licencia USDOT 3455436.',
  alternates: { canonical: `${SITE.url}/es/long-distance-moving`, languages: { 'en-US': `${SITE.url}/long-distance-moving`, 'es': `${SITE.url}/es/long-distance-moving` } },
};

export default function LongDistanceES() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Inicio', url: `${SITE.url}/es` }, { name: 'Larga Distancia', url: `${SITE.url}/es/long-distance-moving` }]} />
      <FAQLd items={FAQS} />
      <ServiceDetailES
        eyebrow="Larga Distancia"
        title="De Florida a cualquier parte — entrega directa, sin intermediarios."
        subtitle="Sus cosas van de su casa anterior a su nueva casa en el mismo camión con el mismo equipo. Precios claros, estimados vinculantes."
        intro="Las mudanzas de larga distancia son donde la mayoría de las empresas fallan. Sus cosas se cargan en un camión, se descargan en un almacén, se recargan en un camión diferente, y son movidas por el país por extraños. Cada transferencia es una oportunidad de daño. Lo hacemos diferente: un camión, un equipo, un viaje directo."
        benefits={[
          { t: 'Entrega directa', d: 'Un camión, un equipo, un viaje directo. Sin transferencias en almacén.' },
          { t: 'Estimados vinculantes', d: 'Su cotización por escrito es el precio. Fijado antes de comenzar.' },
          { t: 'Cuidadoso, no barato', d: 'No somos la opción más barata. Somos la que llega sin daños.' },
          { t: 'Empaque completo disponible', d: 'Agregue empaque profesional y materiales para una mudanza puerta a puerta sin estrés.' },
          { t: 'Licencia interestatal', d: 'USDOT 3455436. Totalmente autorizados para mudanzas interestatales.' },
          { t: 'Almacenamiento corto plazo', d: 'Si sus fechas no coinciden, podemos almacenar entre origen y destino.' },
        ]}
        process={[
          { n: 1, t: 'Inspección', d: 'Inspección en persona o por video para pesar/medir y construir un estimado vinculante.' },
          { n: 2, t: 'Plan y reservar', d: 'Asegure ventanas de recogida y entrega que coincidan con el cierre de su nueva casa.' },
          { n: 3, t: 'Empacar y cargar', d: 'Empaque profesional (si se elige), inventario completo, carga cuidadosa.' },
          { n: 4, t: 'Conducir y entregar', d: 'Ruta directa. Tendrá un conductor con nombre y un ETA de entrega confiable.' },
        ]}
        faqs={FAQS}
      />
    </>
  );
}
