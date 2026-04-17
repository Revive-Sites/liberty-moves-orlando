import ServiceDetailES from '@/components/sections/ServiceDetailES';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const FAQS = [
  { q: '¿Pueden mudar oficinas los fines de semana?', a: 'Sí — la mayoría de nuestras mudanzas comerciales ocurren viernes por la noche, sábado o domingo para minimizar el tiempo de inactividad.' },
  { q: '¿Proveen certificados de seguro?', a: 'Sí. Podemos proporcionar COIs que nombran a su arrendador, nuevo edificio o compañía de seguros — generalmente el mismo día.' },
  { q: '¿Pueden manejar equipo de IT?', a: 'Sí — servidores, estaciones de trabajo, equipo de red. Coordinamos con su equipo de IT y usamos envoltura anti-estática y manejo cuidadoso.' },
  { q: '¿Desmontan y vuelven a montar muebles?', a: 'Cubículos, mesas de conferencias, escritorios pesados — sí. Traemos las herramientas y hacemos todo en el sitio.' },
];

export const metadata = {
  title: 'Mudanzas Comerciales Orlando | Reubicación de Negocios',
  description: 'Mudanzas comerciales en Orlando — oficinas, tiendas, almacenes. Mudanzas de fin de semana para mantener su negocio abierto. Con licencia, asegurados.',
  alternates: { canonical: `${SITE.url}/es/commercial-moving`, languages: { 'en-US': `${SITE.url}/commercial-moving`, 'es': `${SITE.url}/es/commercial-moving` } },
};

export default function CommercialES() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Inicio', url: `${SITE.url}/es` }, { name: 'Mudanzas Comerciales', url: `${SITE.url}/es/commercial-moving` }]} />
      <FAQLd items={FAQS} />
      <ServiceDetailES
        eyebrow="Mudanzas Comerciales"
        title="Mudanzas de oficinas y negocios, en su horario."
        subtitle="Cero tiempo de inactividad es la meta. Trabajamos noches y fines de semana para que su equipo regrese el lunes a una oficina funcionando."
        intro="Las mudanzas comerciales son diferentes. Equipo de IT, cubículos, salas de conferencias, cumplimiento, arrendadores, seguro — un paso perdido puede costarle días. Liberty Moves Orlando maneja reubicaciones comerciales en todo el centro de Florida con planificación detallada, equipos dedicados y la flexibilidad para mudarse en su cronograma."
        benefits={[
          { t: 'Mudanzas de fin de semana y fuera de horas', d: 'Viernes a domingo es nuestra temporada alta comercial.' },
          { t: 'COIs para arrendadores y edificios', d: 'Certificados de seguro emitidos bajo petición, generalmente el mismo día.' },
          { t: 'Manejo experto de IT', d: 'Servidores, estaciones y cableado manejados con cuidado.' },
          { t: 'Desmontaje de muebles incluido', d: 'Cubículos, mesas de conferencias, escritorios pesados.' },
          { t: 'Configuración organizada', d: 'Los escritorios llegan donde deben. Las cajas van a la oficina correcta.' },
          { t: 'Un solo punto de contacto', d: 'Un capataz maneja su mudanza de principio a fin.' },
        ]}
        process={[
          { n: 1, t: 'Inspección', d: 'Visita en sitio para planear el alcance y la logística.' },
          { n: 2, t: 'Plan y horario', d: 'Plan de mudanza detallado con cronograma, equipo y coordinación del edificio.' },
          { n: 3, t: 'Día(s) de mudanza', d: 'Noches, fines de semana, mudanzas por etapas — lo que minimice su tiempo de inactividad.' },
          { n: 4, t: 'Listo para el lunes', d: 'Todo colocado, etiquetado y listo para que su equipo enchufe y funcione.' },
        ]}
        faqs={FAQS}
      />
    </>
  );
}
