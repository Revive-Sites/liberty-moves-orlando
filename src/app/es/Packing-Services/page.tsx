import ServiceDetailES from '@/components/sections/ServiceDetailES';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const FAQS = [
  { q: '¿Proveen las cajas y materiales?', a: 'Sí — cajas, papel, cinta, plástico de burbujas, cajas para ropa, cubiertas para TV y colchones. Se venden al costo, nunca con sobreprecio.' },
  { q: '¿Puedo empacar parte y ustedes el resto?', a: 'Absolutamente. La mayoría de clientes quieren que empacamos la cocina y lo frágil mientras ellos manejan ropa y libros. Cobramos empaque parcial por hora.' },
  { q: '¿Cuánto tiempo toma empacar una casa completa?', a: 'Una casa de 3 habitaciones típicamente se empaca en 6–10 horas con un equipo de 2 personas.' },
  { q: '¿Y el desempaque en el nuevo lugar?', a: 'Sí — podemos desempacar y llevarnos las cajas vacías si lo desea. Solo pregunte al cotizar.' },
];

export const metadata = {
  title: 'Servicios de Empaque Orlando | Empacadores Profesionales',
  description: 'Empaque profesional en Orlando — casa completa, parcial o solo cocina. Materiales de alta calidad, manejo cuidadoso, garantía sin daños.',
  alternates: { canonical: `${SITE.url}/es/Packing-Services`, languages: { 'en-US': `${SITE.url}/Packing-Services`, 'es': `${SITE.url}/es/Packing-Services` } },
};

export default function PackingES() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Inicio', url: `${SITE.url}/es` }, { name: 'Servicios de Empaque', url: `${SITE.url}/es/Packing-Services` }]} />
      <FAQLd items={FAQS} />
      <ServiceDetailES
        eyebrow="Servicios de Empaque"
        title="Empaque profesional que hace fácil el día de mudanza."
        subtitle="Casa completa, parcial o solo cocina. Materiales de alta calidad, equipos cuidadosos, y nada roto al otro lado."
        intro="Empacar es la parte de la mudanza que agota incluso a las familias más organizadas. Solo la cocina puede tomar un fin de semana completo. Una casa entera — días. Liberty Moves Orlando quita el empaque completamente de su lista. Nuestros equipos llegan con materiales profesionales (cajas vendidas al costo, no con sobreprecio), envuelven y empacan cada artículo, y etiquetan cada caja."
        benefits={[
          { t: 'Materiales profesionales', d: 'Cajas de doble pared, papel libre de ácido, plástico de burbujas — todo incluido.' },
          { t: 'Etiquetadas por habitación', d: 'Cada caja etiquetada para desempaque rápido.' },
          { t: 'Responsables por daños', d: 'Cuando nosotros empacamos, somos responsables por daños. Diferente a cajas que usted empaca.' },
          { t: 'Especialistas en frágiles', d: 'Porcelana, cristalería, espejos, TVs, arte enmarcado — manejados con envoltura especializada.' },
          { t: 'Empaque parcial disponible', d: 'Solo la cocina? Solo lo frágil? Cobramos empaque parcial por hora.' },
          { t: 'Desempaque disponible', d: 'Podemos desempacar y llevar las cajas vacías si quiere saltar esa tarea también.' },
        ]}
        process={[
          { n: 1, t: 'Llamada de inventario', d: 'Revisamos qué necesita empaque y le damos un estimado firme.' },
          { n: 2, t: 'Materiales entregados', d: 'Las cajas y suministros llegan el día anterior o el mismo día.' },
          { n: 3, t: 'Día de empaque', d: 'El equipo llega, envuelve, empaca, etiqueta y apila — mientras usted descansa o hace mandados.' },
          { n: 4, t: 'Cargar y mudar', d: 'Cargamos el camión y movemos — todo manejado por un equipo coordinado.' },
        ]}
        faqs={FAQS}
      />
    </>
  );
}
