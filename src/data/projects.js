export const techIcons = {
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
  Tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  Android: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Markdown: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg',
  Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Telegram: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/telegram/telegram-original.svg',
};

export const mainProjects = [
  {
    name: 'Insteip - Terapias Integrales',
    repo: 'https://github.com/Alessander9/Insteip',
    demo: 'https://insteip.com',
    image: '/production/Insteip.jpg',
    desc: 'Instituto online de terapias integrales con respaldo internacional, cursos certificados y campus virtual.',
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    category: 'web',
    highlights: [
      'Plataforma educativa con más de 500 terapeutas certificados',
      'Catálogo de cursos online y presenciales con respaldo internacional',
      'Campus virtual y sistema de gestión de alumnos',
      'Panel central para administración del instituto',
    ],
  },
  {
    name: 'Kirocorp',
    repo: 'https://github.com/Alessander9/kironuevo',
    demo: 'https://kirocorp.pe',
    image: 'https://image.thum.io/get/width/900/https://kirocorp.pe',
    desc: 'Sitio web corporativo para centro quiropráctico con catálogo de servicios y reservas por WhatsApp.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    highlights: [
      'Sitio web corporativo con catálogo de servicios y tratamientos',
      'Sección de contacto y agendamiento directo vía WhatsApp',
      'Diseño optimizado para conversión y captación de clientes',
      'Despliegue activo en producción en kirocorp.pe',
    ],
  },
  {
    name: 'Charol Brasas y Parrillas',
    repo: 'https://github.com/Alessander9/charolv1',
    demo: 'https://charolv1-main.vercel.app/',
    image: '/production/Charol.jpg',
    desc: 'Landing page premium para CHAROL Karaoke Restobar (Los Olivos, Lima). SPA en React 18 + Vite con estética cálida tipo Framer, animaciones GSAP con ScrollTrigger y chatbot asistente con IA integrada.',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'web',
    slogan: 'Fuego que se comparte — CHAROL Karaoke Restobar',
    longDesc: 'Landing page moderna para CHAROL Karaoke Restobar, construida con React 18 y Vite con una estética cálida y premium inspirada en experiencias visuales tipo Framer. Pensada para un restaurante / pollería con experiencia nocturna, karaoke, shows y celebraciones en Los Olivos, Lima.',
    features: [
      'Hero con carrusel automático que avanza cada pocos segundos, con fade y controles de navegación.',
      'Navbar sticky que compacta al hacer scroll con indicadores de sección activa y menú responsive.',
      'Animaciones GSAP con ScrollTrigger: entrada del navbar, parallax suave, reveals de secciones, rotación de elementos decorativos y barra de progreso de scroll superior.',
      'Galería horizontal anclada (sticky) en escritorio para sensación de scroll inmersivo.',
      'CTA directos: reservar por WhatsApp, llamar al negocio, ver ubicación en Google Maps y visitar Instagram.',
      'Respeto global de prefers-reduced-motion: reduce o desactiva animaciones en sistemas que lo requieran.',
      'Marquee continuo de categorías y transiciones fluidas en cards y botones.',
      '11 secciones editoriales: Navbar, Hero, Marquee, Experience, Event, Celebrations, Menu, Gallery, Reservation, Location y Footer.',
      'Chatbot asistente con IA integrado: widget flotante que responde con la información real del negocio (carta, precios, horarios, karaoke, eventos y delivery).',
      'La conversación del chatbot persiste en localStorage (multi-turno) con sugerencias rápidas contextuales.',
    ],
    stackTable: [
      { name: 'React', version: '18', use: 'UI y estructura de componentes' },
      { name: 'Vite', version: 'latest', use: 'Bundler y dev server con HMR' },
      { name: 'GSAP + ScrollTrigger', version: 'latest', use: 'Animaciones de scroll, parallax y carrusel' },
      { name: 'CSS puro', version: '—', use: 'Variables, Flexbox, Grid, media queries' },
      { name: 'DM Sans', version: '—', use: 'Tipografía de texto general (Google Fonts)' },
      { name: 'Oswald', version: '—', use: 'Titulares y elementos de mayor presencia visual' },
    ],
    chatbot: {
      desc: 'Widget flotante (botón rojo inferior derecho, sobre el botón de WhatsApp) que abre un panel de chat con la estética del sitio. El frontend vive en src/components/ChatWidget.jsx y el backend en server/server.js (puerto 4000). En desarrollo, Vite redirige /api → localhost:4000 a través del proxy definido en vite.config.js.',
      providers: [
        { priority: 1, name: 'Gemini', url: 'https://aistudio.google.com/apikey' },
        { priority: 2, name: 'Groq', url: 'https://console.groq.com/keys' },
        { priority: 3, name: 'OpenRouter', url: 'https://openrouter.ai/keys' },
      ],
      deployNote: 'Backend (server/server.js) se publica en Render o Railway usando root=server, build=npm install, start=npm start. El repo incluye render.yaml y server/railway.json listos. La web se publica en cualquier hosting estático compilando con VITE_API_URL=https://tu-backend npm run build.',
    },
    deploy: 'Web estática en Vercel / Netlify / Cloudflare Pages. Backend del chatbot en Render o Railway. El repo incluye render.yaml y server/railway.json con configuración lista para despliegue sin tocar paneles.',
    highlights: [
      'Landing visual de alto impacto: "Fuego que se comparte"',
      'Carta digital interactiva con carruseles de especialidades',
      'Módulo de reservas directas por WhatsApp',
      'Chatbot IA con fallback automático entre Gemini, Groq y OpenRouter',
    ],
  },
  {
    name: 'VitalDent Odontología',
    repo: 'https://github.com/Alessander9/DentistaWeb',
    demo: 'https://dentistaweb-zeta.vercel.app/',
    image: '/production/VitalDent.jpg',
    desc: 'Clínica dental moderna con tecnología 3D, catálogo de tratamientos, equipo médico y agenda de citas online.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'web',
    slogan: 'Tu sonrisa, nuestra pasión',
    longDesc: 'Sitio web corporativo de una clínica dental moderna, construido como SPA en React + Vite. Incluye landing page con animaciones avanzadas de scroll, catálogo de servicios con fichas detalladas, equipo médico, testimonios, FAQ, formulario de contacto y acciones flotantes (WhatsApp y volver arriba).',
    features: [
      'Preloader de marca con logo, barra de progreso 0→100 y tagline — se muestra una sola vez por sesión (sessionStorage) y desliza hacia arriba para revelar el sitio.',
      'Efecto Scroll Split Card en "Por qué VitalDent": una foto se divide en 3 paneles que giran 180° al hacer scroll, revelando 3 tarjetas con la propuesta de valor.',
      'Galería acordeón de servicios con perspectiva 3D: hover/touch para expandir paneles, click para ir al detalle.',
      'Contadores animados de estadísticas: 15+ años, 12k+ pacientes, 4.9/5 y 98% de satisfacción.',
      'Marquee de especialidades en el navbar y marquee de testimonios con tarjetas que fluyen en dos direcciones.',
      'Páginas internas de catálogo y ficha de cada servicio (proceso, beneficios, precio, FAQ propia).',
      'Sección "Agenda tu cita" de 2 columnas: columna visual con imagen, badges flotantes y chips, y formulario funcional con confirmación de envío.',
      'Botones flotantes de WhatsApp con mensaje precargado y "volver arriba" que aparece al hacer scroll.',
      'Soporte global de prefers-reduced-motion: desactiva o simplifica animaciones en todo el sitio.',
      'Diseño 100% responsive con breakpoints en 1024 px, 768 px y 480 px.',
    ],
    stackTable: [
      { name: 'Vite', version: '^5.4', use: 'Bundler y dev server' },
      { name: 'React', version: '^18.3', use: 'UI' },
      { name: 'React Router DOM', version: '^7.18', use: 'Enrutamiento SPA' },
      { name: 'Framer Motion', version: '^13', use: 'Animaciones (scroll split, preloader, transiciones)' },
      { name: 'GSAP', version: '^3.15', use: 'Animaciones avanzadas' },
      { name: 'lucide-react', version: '^0.454', use: 'Iconografía' },
      { name: 'CSS puro', version: '—', use: 'Sistema de diseño sin Tailwind ni preprocesadores' },
    ],
    routes: [
      { path: '/', page: 'HomePage — portada completa' },
      { path: '/servicios', page: 'ServicesPage — catálogo de especialidades' },
      { path: '/servicios/:slug', page: 'ServiceDetailPage — ficha de un servicio' },
      { path: '*', page: 'Redirección a /' },
    ],
    deploy: 'Vercel (incluye vercel.json con rewrites SPA). Compatible con Netlify y GitHub Pages configurando el fallback a index.html.',
    highlights: [
      'Sitio web corporativo de clínica odontológica moderna',
      'Visualizador 3D y catálogo completo de especialidades',
      'Agenda de citas online y botón de contacto inmediato',
      'Animaciones suaves y optimización de velocidad',
    ],
  },
  {
    name: 'De las Gradas a la Cancha',
    repo: 'https://github.com/Alessander9/delasgradas',
    demo: 'https://delasgradas.vercel.app/index.html',
    image: '/production/DelasGradas.jpg',
    desc: 'Portal independiente de hinchas cremas: noticias, fixture, podcast, transmisiones en vivo y comunidad.',
    tech: ['TypeScript', 'React', 'Supabase', 'HTML'],
    category: 'web',
    highlights: [
      'Portal crema reconstruido con Next.js 15 y Supabase',
      'Cuenta regresiva en vivo del próximo encuentro',
      'Membresías, paneles privados para socios y sorteos',
      'Sección de noticias, podcast de la hinchada y comunidad',
    ],
  },
  {
    name: 'Charla Táctica Perú',
    repo: 'https://github.com/Alessander9/CHARLATACTICA',
    demo: 'https://charlatactica.vercel.app/',
    image: '/production/charlaTactica.jpg',
    desc: 'Canal de análisis deportivo, debate táctico y actualidad de Universitario de Deportes con pizarra interactiva.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'web',
    highlights: [
      'Espacio de debate, opinión directa y análisis de juego',
      'Pizarra táctica interactiva y coberturas de partidos',
      'Diseño personalizado con identidad crema y enlaces a YouTube',
      'Deploy optimizado en producción en Vercel',
    ],
  },
  {
    name: 'Ninja House',
    repo: 'https://github.com/Alessander9',
    demo: 'https://ninja-house-app.vercel.app/',
    image: '/production/ninjahouse.jpg',
    desc: 'Plataforma y canal oficial de contenido geek, anime, cultura pop y gaming con transmisiones en vivo y reviews.',
    tech: ['React', 'TypeScript', 'Tailwind', 'JavaScript'],
    category: 'web',
    highlights: [
      'Canal y portal oficial de contenido geek sin filtros',
      'Secciones de cine, series, terror, anime y videojuegos',
      'Transmisiones en vivo, media kit y contacto con marcas',
      'Diseño interactivo con carruseles multimedia y temas oscuros',
    ],
  },
  {
    name: 'Agujas Acupuntura Perú',
    repo: 'https://github.com/Alessander9/AgujasAcupuntura',
    demo: 'https://www.agujasacupunturaperu.com/',
    image: '/production/AgujasAcupuntura.png',
    desc: 'Catálogo digital interactivo de suministros y productos de acupuntura con carrito y pedidos directos a WhatsApp.',
    tech: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
    category: 'web',
    highlights: [
      'Catálogo de productos optimizado para celulares',
      'Carrito de compras ágil con cálculo automático',
      'Botón de pedidos directo a WhatsApp',
      'Disponible en producción en agujasacupunturaperu.com',
    ],
  },
  {
    name: 'A Presión Web',
    repo: 'https://github.com/Alessander9/A-PRESION-WEB',
    demo: 'https://apresion-web.vercel.app/',
    image: '/production/ApresionRadio.png',
    desc: 'Plataforma web de medios deportivos con secciones de programas, actualidad y transmisiones en vivo.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    highlights: [
      'Web corporativa para medio y programas deportivos',
      'Diseño moderno, dinámico y profesional',
      'Demo en producción desplegada en Vercel',
      'Estructura clara de presentación de contenidos y transmisiones',
    ],
  },
  {
    name: 'Tabla Fútbol Perú',
    repo: 'https://github.com/Alessander9',
    demo: 'https://tablafutbolperu.vercel.app/',
    image: '/production/TablaLiga1.png',
    desc: 'Aplicación web interactiva para el seguimiento de la tabla de posiciones, fixtures y estadísticas del fútbol peruano.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'web',
    highlights: [
      'Tabla de posiciones actualizada y seguimiento de puntuaciones',
      'Visualización de fixture y resultados jornada a jornada',
      'Diseño ágil, ligero y 100% optimizado para móviles',
      'Despliegue activo en producción en Vercel',
    ],
  },
  {
    name: 'MultiLinks',
    repo: 'https://github.com/Alessander9/MultiLinks',
    demo: 'https://multilinks-sepia.vercel.app/',
    image: '/production/MultiLinks.png',
    desc: 'Smartlink premium para el lanzamiento del sencillo "La Curiosidad" de Alessander (Arcadia Records, 2026). Centraliza plataformas de streaming con reproductor de vinilo interactivo, diseño cinemático y experiencia visual envolvente.',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'web',
    slogan: 'La Curiosidad — Alessander × Arcadia Records 2026',
    longDesc: 'MultiLinks es una plataforma web interactiva y responsiva diseñada como smartlink premium para promocionar el lanzamiento del sencillo "La Curiosidad" de Alessander (Arcadia Records, 2026). Ofrece a los oyentes una experiencia visual y auditiva envolvente, centralizando todos los accesos directos a plataformas de streaming con un estilo moderno, cinemático y lleno de personalidad.',
    features: [
      'Dashboard en pantalla dividida (Split-Panel): panel izquierdo con reproductor de vinilo en rotación constante y metadatos del sencillo; panel derecho con listado de plataformas de streaming.',
      'Smart Hover de color: al pasar el cursor por cada plataforma, el fondo se tiñe con el tono de marca oscuro y borde neonizado (verde bosque para Spotify, rojo vino para YouTube, naranja quemado para SoundCloud).',
      'PillNav flotante: menú estilo píldora con micro-animaciones GSAP donde una burbuja elástica persigue el cursor con magnetismo fluid. Accesos a Inicio, TikTok e Instagram.',
      'Reproductor de audio avanzado: visualización de ondas (Waveform Canvas) sincronizada, seek bar interactiva, control de volumen y transiciones elásticas. Integración nativa con SoundCloud.',
      'Luces ambientales pulsantes (ambient-glow) de tonos carmesí y burdeos que decoran los bordes de pantalla.',
      'Toda la interfaz cabe en pantalla sin scroll vertical (above the fold). En móviles colapsa fluidamente a una columna.',
      'Botones de vidrio translúcido (glassmorphism) con micro-interacciones por plataforma: Spotify, YouTube, SoundCloud, Apple Music, Amazon Music y Deezer.',
    ],
    stackTable: [
      { name: 'React', version: 'v18', use: 'UI y componentes interactivos' },
      { name: 'Vite', version: 'latest', use: 'Bundler con HMR ultrarrápido' },
      { name: 'GSAP', version: 'latest', use: 'Animaciones del PillNav y transiciones elásticas' },
      { name: 'lucide-react', version: 'latest', use: 'Iconografía' },
      { name: 'simple-icons (CDN)', version: '—', use: 'Logotipos vectorizados de plataformas' },
      { name: 'CSS nativo', version: '—', use: 'Variables CSS, Flexbox, Grid, Glassmorphism' },
    ],
    deploy: '© 2026 Arcadia Records. Desplegado en Vercel. Lanzamiento oficial del artista Alessander.',
    highlights: [
      'Smartlink estilo Linktree para centralizar enlaces',
      'Reproductor de audio con disco de vinilo animado',
      'Efectos GSAP, glassmorphism y diseño oscuro',
      'Experiencia 100% responsive en producción',
    ],
  },
  {
    name: 'Soluciones Tecnológicas Enterprise',
    repo: 'https://github.com/Alessander9/SolucionesWeb',
    demo: 'https://www.solucionestecnologicasenterprise.com/',
    image: '/production/SolucionesTecnologicas.png',
    desc: 'Portal corporativo empresarial para servicios tecnológicos, consultoría de software e infraestructura TI.',
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    category: 'web',
    highlights: [
      'Portal corporativo para servicios e infraestructura tecnológica',
      'Catálogo detallado de soluciones IT y transformación digital',
      'Formularios de contacto y cotización directa',
      'Dominio propio y despliegue empresarial en producción',
    ],
  },
];

export const secondaryProjects = [
  {
    name: 'E-Commerce-sistema',
    repo: 'https://github.com/Alessander9/E-Commerce-sistema',
    image: 'https://opengraph.githubassets.com/1/Alessander9/E-Commerce-sistema',
    desc: 'Sistema tipo tienda online: muestra productos y trabaja con base de datos para administrar información.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS'],
    category: 'backend',
    highlights: [
      'Catálogo de productos con listado y detalle desde base de datos',
      'Carrito de compras y flujo de pedidos tipo tienda online',
      'Panel para administrar productos e información del negocio',
      'Lógica de negocio en Spring Boot con persistencia en MySQL',
    ],
  },
  {
    name: 'ProyectoFinalApp',
    repo: 'https://github.com/Alessander9/ProyectoFinalApp',
    image: 'https://opengraph.githubassets.com/1/Alessander9/ProyectoFinalApp',
    desc: 'App Android con funciones reales y conexión a servicios en la nube para guardar y mostrar información.',
    tech: ['Kotlin', 'Android', 'Firebase', 'AWS'],
    category: 'mobile',
    highlights: [
      'App Android nativa con interfaz en Kotlin',
      'Autenticación y datos sincronizados con Firebase',
      'Servicios en la nube (AWS) para guardar y mostrar información',
      'Funciones reales pensadas para el uso diario',
    ],
  },
  {
    name: 'ValleNatural-proy',
    repo: 'https://github.com/Alessander9/ValleNatural-proy',
    image: 'https://opengraph.githubassets.com/1/Alessander9/ValleNatural-proy',
    desc: 'Catálogo tipo tienda con ofertas, categorías y pedidos por WhatsApp. Incluye un panel demo para gestionar productos.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    highlights: [
      'Catálogo tipo tienda con ofertas y categorías',
      'Pedidos directos por WhatsApp desde cada producto',
      'Panel demo para gestionar productos',
      'Desarrollado con HTML, CSS y JavaScript, sin dependencias',
    ],
  },
  {
    name: 'Arquimedes',
    repo: 'https://github.com/Alessander9/Arquimedes',
    image: 'https://opengraph.githubassets.com/1/Alessander9/Arquimedes',
    desc: 'Sistema web con estructura de intranet (pantallas y secciones para gestionar información).',
    tech: ['C#', '.NET', 'HTML', 'JavaScript'],
    category: 'backend',
    highlights: [
      'Sistema web con estructura de intranet',
      'Pantallas y secciones para gestionar información',
      'Backend en C# con .NET',
      'Base para portales institucionales con roles',
    ],
  },
  {
    name: 'SistemaCitasTelegram',
    repo: 'https://github.com/Alessander9/SistemaCitasTelegram',
    image: 'https://opengraph.githubassets.com/1/Alessander9/SistemaCitasTelegram',
    desc: 'Bot de Telegram para gestionar citas: registro, consulta y confirmación de turnos desde el chat.',
    tech: ['TypeScript', 'Telegram'],
    category: 'backend',
    highlights: [
      'Bot de Telegram para gestionar citas',
      'Registro y consulta de turnos desde el chat',
      'Confirmación de citas automatizada',
      'Lógica en TypeScript con persistencia de datos',
    ],
  },
  {
    name: 'ocr_yape_plin',
    repo: 'https://github.com/Alessander9/ocr_yape_plin-main',
    image: 'https://opengraph.githubassets.com/1/Alessander9/ocr_yape_plin-main',
    desc: 'Script Python que usa OCR para leer y extraer datos de capturas de pantalla de Yape y Plin.',
    tech: ['Python'],
    category: 'backend',
    highlights: [
      'Script Python que usa OCR para leer capturas',
      'Extrae datos de capturas de Yape y Plin',
      'Automatiza el registro de pagos',
      'Procesamiento por línea de comandos',
    ],
  },
];

export const skillsData = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: techIcons.HTML },
      { name: 'CSS', icon: techIcons.CSS },
      { name: 'JavaScript', icon: techIcons.JavaScript },
      { name: 'TypeScript', icon: techIcons.TypeScript },
      { name: 'Angular', icon: techIcons.Angular },
      { name: 'Tailwind', icon: techIcons.Tailwind },
    ],
  },
  {
    title: 'Backend y BD',
    skills: [
      { name: 'Java 17', icon: techIcons.Java },
      { name: 'Spring Boot', icon: techIcons['Spring Boot'] },
      { name: 'C#', icon: techIcons['C#'] },
      { name: '.NET', icon: techIcons['.NET'] },
      { name: 'SQL', text: true },
      { name: 'MySQL', icon: techIcons.MySQL },
      { name: 'PostgreSQL', icon: techIcons.PostgreSQL },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Android', icon: techIcons.Android },
      { name: 'Kotlin', icon: techIcons.Kotlin },
      { name: 'Swift (iOS)', icon: techIcons.Swift },
    ],
  },
  {
    title: 'Cloud y Herramientas',
    skills: [
      { name: 'Firebase', icon: techIcons.Firebase },
      { name: 'AWS (S3)', icon: techIcons.AWS },
      { name: 'Git', icon: techIcons.Git },
      { name: 'GitHub', icon: techIcons.GitHub },
      { name: 'Make (Automatizaciones)', text: true },
    ],
  },
];

export const clientSites = [
  {
    name: 'Ninja House',
    url: 'https://ninja-house-app.vercel.app/',
    image: '/production/ninjahouse.jpg',
    desc: 'Canal de contenido geek, anime, cultura pop y gaming con transmisiones en vivo y reviews.',
  },
  {
    name: 'Charla Táctica Perú',
    url: 'https://charlatactica.vercel.app/',
    image: '/production/charlaTactica.jpg',
    desc: 'Canal de análisis deportivo, debate táctico y actualidad de Universitario de Deportes con pizarra interactiva.',
  },
  {
    name: 'De las Gradas a la Cancha',
    url: 'https://delasgradas.vercel.app/index.html',
    image: '/production/DelasGradas.jpg',
    desc: 'Portal independiente de hinchas cremas: noticias, fixture, podcast, transmisiones en vivo y comunidad.',
  },
  {
    name: 'Charol Brasas y Parrillas',
    url: 'https://charolv1-main.vercel.app/',
    image: '/production/Charol.jpg',
    desc: 'Restobar, pollería y parrillas con carta digital interactiva, agenda de shows en vivo y reservas por WhatsApp.',
  },
  {
    name: 'INSTEIP - Terapias Integrales',
    url: 'https://insteip.com',
    image: '/production/Insteip.jpg',
    desc: 'Instituto online de terapias integrales con respaldo internacional, cursos certificados y campus virtual.',
  },
  {
    name: 'VitalDent Odontología',
    url: 'https://dentistaweb-zeta.vercel.app/',
    image: '/production/VitalDent.jpg',
    desc: 'Clínica dental moderna con tecnología 3D, catálogo de tratamientos, equipo médico y agenda de citas online.',
  },
];

export const productionSites = [
  {
    name: 'Ninja House',
    desc: 'Canal de gaming, anime y cultura pop con contenido en vivo y reviews.',
    url: 'https://ninja-house-app.vercel.app/',
  },
  {
    name: 'Charla Táctica Perú',
    desc: 'Análisis de Universitario y fútbol peruano con pizarra táctica interactiva.',
    url: 'https://charlatactica.vercel.app/',
  },
  {
    name: 'De las Gradas a la Cancha',
    desc: 'Portal independiente de hinchas de Universitario: noticias, fixture, podcast y comunidad.',
    url: 'https://delasgradas.vercel.app/index.html',
  },
  {
    name: 'Charol Brasas y Parrillas',
    desc: 'Restobar, brasas y parrillas con carta digital interactiva y reservas.',
    url: 'https://charolv1-main.vercel.app/',
  },
  {
    name: 'INSTEIP',
    desc: 'Instituto online de terapias integrales con cursos certificados y campus virtual.',
    url: 'https://insteip.com',
  },
  {
    name: 'VitalDent',
    desc: 'Clínica dental moderna con tecnología 3D y agenda de citas.',
    url: 'https://dentistaweb-zeta.vercel.app/',
  },
];

/* ── Routing helpers para subpáginas de proyectos ── */

export const SITE_TITLE = 'Luis Alexander Fernandez Paz | Portafolio'

export const PROJECT_ROUTE_PREFIX = '#/proyecto/'

export const allProjects = [...mainProjects, ...secondaryProjects]

export const featuredProjects = [...allProjects]

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export function getProjectBySlug(slug) {
  return allProjects.find((p) => slugify(p.name) === slug)
}

export const findProjectBySlug = getProjectBySlug

export const categoryLabels = {
  web: 'Desarrollo Web',
  mobile: 'App Móvil',
  backend: 'Backend & BD',
  academico: 'Proyecto Académico',
}
