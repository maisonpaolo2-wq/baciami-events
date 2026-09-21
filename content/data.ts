export const site = {
  name: 'Baciami Events',
  fullName: 'Baciami Events Studio',
  url: 'https://baciamievents.com',
  tagline: 'Wedding Planner · Costa Brava · Girona · Barcelona',
  description:
    'Bodas exclusivas en la Costa Brava. Organización integral, diseño y coordinación para parejas que buscan una boda que se convierta en un recuerdo eterno.',
  email: 'hola@baciamievents.com',
  phone: '+34 600 000 000',
  whatsapp: '34600000000',
  whatsappMessage: 'Hola Alba, me gustaría hablar sobre mi boda.',
  instagram: '@baciamieventstudio',
  instagramUrl: 'https://www.instagram.com/baciamieventstudio',
  location: 'Costa Brava · Girona · Barcelona',
  plannerName: 'Alba',
  structuredDataAddress: {
    locality: 'Girona',
    region: 'Cataluña',
    country: 'ES',
  },
}

export const navLinks = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Bodas', href: '/bodas' },
  { label: 'Sobre Alba', href: '/sobre-alba' },
  { label: 'Contacto', href: '/contacto' },
]

export const services = [
  {
    id: 'organizacion-integral',
    title: 'Organización Integral',
    tag: 'Planificación · Diseño · Coordinación',
    lead: 'Me encargo de todo desde el primer concepto hasta el último vals. Búsqueda de finca, selección de proveedores, diseño del espacio y coordinación completa el día.',
    detail:
      'Para parejas que quieren vivir el proceso sin agobios, con alguien de confianza que entienda su visión y la haga realidad sin sacrificar ningún detalle.',
    includes: [
      'Búsqueda y gestión de todos los proveedores',
      'Creación del concepto y diseño visual del evento',
      'Presupuesto detallado y control de gastos',
      'Diseño y organización de cada espacio',
      'Seguimiento de todos los preparativos',
      'Coordinación completa el gran día',
    ],
    image: '/photos/table-setup.jpg',
    imageAlt: 'Organización integral de boda en Costa Brava',
  },
  {
    id: 'coordinacion-dia',
    title: 'Coordinación del Día',
    tag: 'El día que más importa',
    lead: 'Has organizado vuestra boda con cariño. Ahora necesitas a alguien que lo ejecute con precisión mientras tú te casas. Ese día solo tienes que aparecer.',
    detail:
      'Me incorporo 8 semanas antes. Asumo la relación con todos los proveedores, construyo el timing y el día de la boda nada se improvisa.',
    includes: [
      'Reunión de traspaso 6–8 semanas antes',
      'Timeline detallado y personalizado',
      'Contacto directo con todos los proveedores',
      'Presencia total el día de la boda',
      'Gestión de cualquier imprevisto en tiempo real',
    ],
    image: '/photos/ceremony-outdoor.jpg',
    imageAlt: 'Coordinación de boda en Costa Brava',
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento',
    tag: 'Una sesión clara',
    lead: 'Estáis empezando a planificar y no sabéis por dónde. En 90 minutos pongo orden en vuestra cabeza, vuestro presupuesto y vuestros próximos pasos.',
    detail:
      'Sin rodeos. Revisamos vuestra situación, os doy una hoja de ruta concreta y salís con todo claro.',
    includes: [
      'Sesión de 90 minutos (online o presencial)',
      'Preparación previa personalizada',
      'Revisión de vuestro estado actual',
      'Hoja de ruta con próximos pasos',
      'Soporte escrito 48 horas post-sesión',
    ],
    image: '/photos/table-flowers.jpg',
    imageAlt: 'Asesoramiento de bodas en Costa Brava',
  },
]

export const weddings = [
  {
    slug: 'boda-mm-costa-brava',
    couple: 'M & M',
    location: 'Costa Brava, Girona',
    year: '2026',
    season: 'Junio',
    type: 'Organización integral',
    description:
      'Una masía con cipreses centenarios y vistas a la Costa Brava. Paleta de blancos rotos, verdes mediterráneos y detalles en cristal vintage. Una boda que parecía haber nacido en ese lugar.',
    longDescription:
      'M y M querían una boda que sintieran propia desde el primer momento. Trabajamos juntos durante más de un año: desde la búsqueda de la finca hasta cada detalle floral. El resultado fue una celebración íntima entre cipreses y luz de verano, con una mesa larga donde cada comensal tenía la sensación de estar en la mejor cena de su vida.',
    photos: ['/photos/couple-cypress.jpg', '/photos/dress-chandelier.jpg', '/photos/bride-stairs.jpg'],
  },
  {
    slug: 'boda-katelyn-pablo-cadaques',
    couple: 'Katelyn & Pablo',
    location: 'Cadaqués · Bagur, Costa Brava',
    year: '2026',
    season: 'Agosto',
    type: 'Organización integral',
    description:
      'Mar, piedra y luz mediterránea. Una celebración entre el pueblo de Cadaqués y las calas de Bagur. Íntima, viajera y completamente ellos.',
    longDescription:
      'Katelyn y Pablo buscaban una boda que capturara la esencia de la Costa Brava que tanto amaban. Diseñamos una jornada que comenzaba en el puerto de Cadaqués y terminaba bajo las estrellas en Bagur, con una cena larga entre olivos y el sonido del mar. Una celebración que sus invitados recordarán como un sueño.',
    photos: ['/photos/bagur-dock.jpg', '/photos/bagur-table.jpg', '/photos/groom-porsche.jpg'],
  },
  {
    slug: 'boda-laura-kevin-asturias',
    couple: 'Laura & Kevin',
    location: 'Hostería de Torazo, Asturias',
    year: '2026',
    season: 'Septiembre',
    type: 'Organización integral',
    description:
      'Cruzamos el país para acompañar a Laura y Kevin. Una finca histórica en Asturias, una carpa de cristal con vistas a los montes, y una pareja que llenó cada rincón de alegría.',
    longDescription:
      'No todas las bodas son en la Costa Brava. Laura y Kevin nos eligieron para organizar su boda en la Hostería de Torazo, y cruzamos el país con la misma dedicación de siempre. El resultado fue una celebración elegante y llena de vida, con una mesa redonda en carpa de cristal y los montes asturianos de fondo.',
    photos: ['/photos/ceremony-torazo-1.jpg', '/photos/alba-flowers.jpg', '/photos/garden-reception.jpg'],
  },
]

export const testimonials = [
  {
    quote:
      'Volvería a repetir mil veces. Confiaba en poder hacerlo yo sola todo y me equivocaba. Es realmente imprescindible, la tranquilidad que da que una persona prácticamente haga todo por ti, te tranquiliza, le saca solución a todo. No hubiera sido igual de especial sin su ayuda.',
    author: 'Maialen',
    date: 'Febrero 2024',
    service: 'Organización integral',
  },
  {
    quote:
      'No solo estuvo en todo momento pendiente de absolutamente todo, sino que también no faltó detalle y cosas que incluso nosotros mismos no nos acordamos que habíamos hablado, tú estuviste ahí para todo. Sinceramente no creo que hubiera sido posible sin ti.',
    author: 'M & D',
    date: 'Julio 2025',
    service: 'Coordinación del día',
  },
  {
    quote:
      'Alba fue un amor de verdad, me salvó de los nervios el día de la boda. Estuvo ahí en todo para controlarlo todo, y traer apoyo y calma. Fue una ayuda fundamental y sin la cual hubiera sido muy difícil. Tiene un tacto y un amor por lo que hace que se nota en cada pequeño detalle.',
    author: 'Ariadna',
    date: 'Octubre 2025',
    service: 'Coordinación del día',
  },
]

export const process = [
  {
    step: '01',
    title: 'Nos conocemos',
    description:
      'Una llamada de 30 minutos sin formularios previos. Me cuentas vuestra boda y veo si tenemos fit. Si lo hay, avanzamos.',
  },
  {
    step: '02',
    title: 'Propuesta a medida',
    description:
      'Preparo una propuesta personalizada con el servicio que tiene sentido para vosotros, lo que incluye y cómo trabajamos.',
  },
  {
    step: '03',
    title: 'Empezamos',
    description:
      'Firmamos, confirmo vuestra fecha y empieza el proceso. Juntos, sin prisa, pero sin parar hasta el gran día.',
  },
  {
    step: '04',
    title: 'El gran día',
    description:
      'Todo preparado. Vosotros solo tenéis que aparecer y disfrutar. Yo me encargo de que nada falle.',
  },
]

export const fitYes = [
  'Queréis una boda con identidad propia y sensibilidad estética',
  'Valoráis la tranquilidad de tener a alguien de confianza que lleva el proceso',
  'Os gustan los espacios con alma: masías, fincas históricas, entornos naturales',
  'Buscáis elegancia sin exceso, intimidad sin sacrificar detalle',
  'La experiencia de vuestros invitados es tan importante como la vuestra',
]

export const fitNo = [
  'Buscáis solo precio sin valorar la dedicación y el criterio',
  'Queréis una boda de producción masiva con cientos de invitados',
  'Tenéis el concepto completamente cerrado y solo necesitáis ejecución mecánica',
  'No valoran la comunicación constante y la relación cercana durante el proceso',
]

export const faqs = [
  {
    q: '¿En qué zonas trabajáis?',
    a: 'Principalmente en la Costa Brava, Girona y Barcelona. También viajamos a otras provincias para bodas especiales, como hemos hecho en Asturias, Cadaqués y otras localizaciones únicas.',
  },
  {
    q: '¿Con cuánta antelación hay que contactar?',
    a: 'Para organización integral, lo ideal es entre 12 y 18 meses antes. Para coordinación del día, con 6–8 meses suele ser suficiente. Si vuestra fecha está más cerca, consultadme igualmente.',
  },
  {
    q: '¿Cuántas bodas aceptáis al año?',
    a: 'Trabajo con un número limitado de parejas para poder estar presente de verdad en cada proceso. La agenda 2027 y 2028 ya está abierta.',
  },
  {
    q: '¿Tenéis proveedores propios?',
    a: 'Tengo una red de proveedores de confianza en la Costa Brava y Girona con quienes trabajo habitualmente. Pero nunca trabajo con catálogos cerrados: cada boda tiene sus propias necesidades y buscamos lo que os encaje a vosotros.',
  },
  {
    q: '¿Cómo funcionan los pagos?',
    a: 'Una señal al confirmar la fecha, pagos intermedios durante el proceso y el resto antes del día. Todo queda detallado desde el principio, sin sorpresas.',
  },
  {
    q: '¿Organizáis bodas internacionales o para parejas extranjeras?',
    a: 'Sí. Trabajamos con parejas de cualquier país que quieran casarse en la Costa Brava o Girona. Nos comunicamos también en inglés.',
  },
]
