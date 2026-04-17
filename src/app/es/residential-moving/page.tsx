import ServiceDetailES from '@/components/sections/ServiceDetailES';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const FAQS = [
  { q: '¿Cuánto cuesta una mudanza residencial local en Orlando?', a: 'La mayoría de los apartamentos de 2 habitaciones cuestan entre $600 y $1,100; casas de 3–4 habitaciones entre $1,200 y $2,400. El precio es por hora según el tamaño del equipo, tamaño del camión y traslado.' },
  { q: '¿Proveen cajas y materiales de empaque?', a: 'Sí — cajas, papel, cinta, cajas para ropa, cubiertas para TV y colchón. Se venden al costo. También puede empacar usted mismo y solo hacemos la mudanza.' },
  { q: '¿Desmontan y vuelven a montar muebles?', a: 'Sí, incluido sin costo adicional. Camas, mesas, cunas, escritorios — manejamos todo y la herramienta.' },
  { q: '¿Pueden manejar escaleras y elevadores?', a: 'Sí. Solo indíquenos cuando reserve para llevar el equipo adecuado. Sin tarifas sorpresa por escaleras.' },
];

export const metadata = {
  title: 'Mudanzas Residenciales Orlando | Servicios de Mudanza Residencial',
  description: 'Servicio completo de mudanzas residenciales en Orlando y centro de Florida. Precios claros, equipos cuidadosos, mudanzas locales el mismo día. Licencia USDOT 3455436.',
  alternates: { canonical: `${SITE.url}/es/residential-moving`, languages: { 'en-US': `${SITE.url}/residential-moving`, 'es': `${SITE.url}/es/residential-moving` } },
};

export default function ResidentialES() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Inicio', url: `${SITE.url}/es` }, { name: 'Mudanzas Residenciales', url: `${SITE.url}/es/residential-moving` }]} />
      <FAQLd items={FAQS} />
      <ServiceDetailES
        eyebrow="Mudanzas Residenciales"
        title="Mudanzas residenciales en Orlando con cuidado y precios claros."
        subtitle="Apartamentos, condominios, casas adosadas, casas unifamiliares — lo empacamos, lo movemos, y lo colocamos. En un solo día, la mayoría de las veces."
        intro="Una mudanza residencial es más que un camión y un equipo — es confianza. Usted está entregando las pertenencias de su familia a extraños, y tomamos eso en serio. Cada equipo de Liberty Moves Orlando está verificado, entrenado, uniformado, y supervisado por un capataz que se queda con su mudanza de principio a fin."
        benefits={[
          { t: 'Precios claros y por escrito', d: 'Su cotización es su precio. Sin tarifas sorpresa por combustible, escaleras o traslado largo.' },
          { t: 'Desmontaje y montaje gratis', d: 'Camas, cunas, mesas, escritorios — manejamos la herramienta.' },
          { t: 'Protección incluida', d: 'Protegemos pisos, paredes y muebles con materiales profesionales.' },
          { t: 'Mudanzas el mismo día', d: '98% de las mudanzas residenciales locales terminan el mismo día.' },
          { t: 'Cobertura de reemplazo disponible', d: 'Mejora la cobertura estándar para mudanzas grandes.' },
          { t: 'Equipos amables y verificados', d: 'Uniformados, con antecedentes verificados, respetuosos con su hogar.' },
        ]}
        process={[
          { n: 1, t: 'Cotización gratis', d: 'Llame, envíe texto o complete el formulario. Le damos un estimado por escrito rápidamente.' },
          { n: 2, t: 'Inspección', d: 'Inspección en persona o por video para mudanzas más grandes.' },
          { n: 3, t: 'Día de mudanza', d: 'Equipo uniformado llega a tiempo. Protecciones, envolturas y carretillas listas.' },
          { n: 4, t: 'Descarga y organización', d: 'Camas armadas, sofás colocados, cajas donde las quiere.' },
        ]}
        faqs={FAQS}
      />
    </>
  );
}
