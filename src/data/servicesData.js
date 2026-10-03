export const SERVICES_ROUTE_PREFIX = '#/servicio/'

export const SERVICES_DATA = [
  {
    id: 'landing-page',
    num: '01',
    category: 'PÁGINAS WEB PARA VENDER',
    filterCategory: 'web',
    title: 'Páginas Web de Alto Impacto (Landing Pages)',
    desc: 'Una página web moderna, rápida y atractiva diseñada con un solo objetivo: que las personas que entren se conviertan en clientes y te escriban directamente a tu WhatsApp.',
    
    // ¿Qué es?
    whatIs: 'Es una página web de una sola sección principal, diseñada especialmente para mostrar tu producto o servicio de forma clara, bonita y convincente. Su meta es atrapar la atención del cliente en los primeros 3 segundos y guiarlo a comprar o pedir información.',
    
    // ¿Qué problema soluciona?
    problemSolved: 'Muchos negocios pierden clientes porque su página actual es lenta, se ve antigua o tiene demasiada información confusa. Esta página elimina las distracciones y hace que comprarte o contactarte sea facilísimo.',
    
    // ¿En qué te ayuda y para qué sirve?
    benefits: [
      {
        title: 'Más Clientes Escribiéndote',
        desc: 'Los botones de WhatsApp están ubicados en los lugares exactos para que la gente no dude en pedirte informes o cotizar.'
      },
      {
        title: 'Abre al Instante en Celulares',
        desc: 'Carga en menos de 1 segundo para que nadie se vaya por impaciencia antes de ver lo que ofreces.'
      },
      {
        title: 'Transmite Confianza y Profesionalismo',
        desc: 'Un diseño limpio y moderno hace que tu negocio se vea formal, sólido y seguro para comprar.'
      },
      {
        title: 'Perfecta para tus Redes Sociales y Anuncios',
        desc: 'Es el enlace ideal para poner en tu biografía de Instagram, TikTok o en anuncios de Facebook y Google.'
      }
    ],

    // ¿Qué te entregamos listo para usar?
    included: [
      'Diseño 100% personalizado con los colores y fotos de tu negocio',
      'Adaptada para que se vea perfecta en celulares, tablets y computadoras',
      'Botones directos para que te hablen a tu WhatsApp en un toque',
      'Formulario de contacto para recibir mensajes en tu correo',
      'Tu propio nombre en internet (.com o .pe) y candado de seguridad (SSL)',
      'Velocidad de carga ultrarrápida para que nadie espere',
      'Lista para conectar con anuncios de Facebook, Instagram o Google Ads',
      'Video tutorial de 5 minutos explicándote cómo funciona todo'
    ],

    // ¿Cómo se hace? (Paso a paso fácil)
    process: [
      { step: '01', title: 'Me cuentas tu idea', desc: 'Hablamos por WhatsApp o videollamada para saber qué vendes y qué quieres lograr.' },
      { step: '02', title: 'Preparamos la propuesta', desc: 'Te muestro cómo se verá el diseño, los textos y los botones de contacto.' },
      { step: '03', title: 'La construimos', desc: 'La programamos con alta calidad para que funcione rápido y sin fallos.' },
      { step: '04', title: '¡Lanzamiento!', desc: 'Conectamos tu dominio, la publicamos en internet y te la dejamos 100% lista para recibir clientes.' }
    ],

    // Preguntas Frecuentes
    faq: [
      {
        q: '¿En cuántos días estará lista mi página?',
        a: 'Normalmente está lista en 4 a 7 días hábiles una vez que tengamos tus fotos y la información de tu negocio.'
      },
      {
        q: '¿Tengo que pagar mensualidades obligatorias?',
        a: 'No. El desarrollo de la página se paga una sola vez. Solo tendrás tu hosting y dominio anual como cualquier sitio web.'
      },
      {
        q: '¿Puedo poner mis propios precios y fotos?',
        a: 'Sí, todo el contenido se adapta exactamente a tus productos, servicios y logotipo.'
      }
    ],

    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790824448/Landing-Alex.mp4',
    poster: '/production/ninjahouse.jpg',
    stat1: { value: '+95%', label: 'Fácil de usar' },
    stat2: { value: '< 1s', label: 'Carga instantánea' },
    tags: ['Para Celulares', 'Botón a WhatsApp', 'Rápida y Segura', 'Lista para Anuncios'],
    url: 'https://ninja-house-app.vercel.app/',
    quoteMsg: 'Hola Luis, me interesa cotizar una página web para mi negocio.'
  },
  {
    id: 'sistema-web',
    num: '02',
    category: 'SISTEMAS Y HERRAMIENTAS WEB',
    filterCategory: 'web',
    title: 'Sistemas Web y Plataformas Interactivas',
    desc: 'Creamos sistemas y herramientas web personalizadas con funciones interactivas en vivo (como pizarras tácticas, paneles de control y seguimiento de datos) para que tu equipo trabaje más rápido.',
    
    whatIs: 'Es una aplicación que funciona desde cualquier navegador web (Google Chrome, Safari, etc.) sin necesidad de instalar programas pesados. Permite realizar tareas interactivas, como mover fichas en pantalla, registrar datos, ver estadísticas en tiempo real y gestionar usuarios.',
    
    problemSolved: 'Reemplaza hojas de cálculo desordenadas, papeles y programas anticuados por una herramienta moderna, centralizada y accesible desde cualquier lugar con conexión a internet.',
    
    benefits: [
      {
        title: 'Interactividad en Tiempo Real',
        desc: 'Puedes interactuar con mapas, pizarras digitales, gráficos y tableros interactivos desde tu pantalla.'
      },
      {
        title: 'Acceso desde Cualquier Dispositivo',
        desc: 'Úsalo desde tu laptop, computadora de escritorio, tablet o teléfono sin complicaciones.'
      },
      {
        title: 'Panel Fácil de Administrar',
        desc: 'Actualiza noticias, resultados, jugadores, productos o usuarios sin saber de programación.'
      },
      {
        title: 'Todo Seguro en la Nube',
        desc: 'Tus datos se guardan automáticamente para que nunca pierdas información importante.'
      }
    ],

    included: [
      'Pizarra o herramienta interactiva hecha exactamente a tu medida',
      'Panel de control fácil para administrar toda la información',
      'Funciona en tablets, laptops y pantallas táctiles',
      'Base de datos segura en la nube con copias de respaldo continuas',
      'Exportación de imágenes, reportes o datos con un solo clic',
      'Capacitación guiada para ti y tu equipo de trabajo'
    ],

    process: [
      { step: '01', title: 'Definimos lo que necesitas', desc: 'Identificamos qué botones, pantallas y funciones debe tener tu sistema.' },
      { step: '02', title: 'Diseño visual y flujo', desc: 'Diseñamos una vista previa para que pruebes cómo se sentirá usarlo.' },
      { step: '03', title: 'Desarrollo de las funciones', desc: 'Programamos la lógica para que todo funcione rápido y sin errores.' },
      { step: '04', title: 'Entrega y capacitación', desc: 'Te entregamos los accesos y te enseñamos paso a paso a utilizarlo.' }
    ],

    faq: [
      {
        q: '¿Se puede adaptar a cualquier tipo de negocio o deporte?',
        a: 'Sí, adaptamos la herramienta a tus necesidades exactas: deportes, academias, inmobiliarias, logística o gestión interna.'
      },
      {
        q: '¿Necesito instalar algún programa en mi computadora?',
        a: 'No, funciona directamente en internet a través de tu navegador favorito.'
      }
    ],

    accentColor: '#7C3AED',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790825922/sistemas_web.mp4',
    poster: '/production/charlaTactica.jpg',
    stat1: { value: '100%', label: 'A tu Medida' },
    stat2: { value: 'En Vivo', label: 'Tiempo Real' },
    tags: ['Pizarra Interactiva', 'Panel de Control', 'En la Nube', 'Fácil de Usar'],
    url: 'https://charlatactica.vercel.app/',
    quoteMsg: 'Hola Luis, me gustaría cotizar un sistema web interactivo a medida.'
  },
  {
    id: 'app-android',
    num: '03',
    category: 'APPS PARA CELULARES',
    filterCategory: 'mobile',
    title: 'Aplicaciones para Teléfonos Android',
    desc: 'Lleva tu negocio directamente a la pantalla de tus clientes con una aplicación rápida, fácil de usar y lista para descargar en la Google Play Store.',
    
    whatIs: 'Una app instalable en los teléfonos de tus clientes con el logo de tu negocio en su pantalla de inicio, que les permite consultar información, comprar, recibir avisos y usar tus servicios en cualquier momento.',
    
    problemSolved: 'Te ayuda a que tus clientes no te olviden. En lugar de depender de que busquen tu página web cada vez, tienen tu negocio en su bolsillo a un solo toque.',
    
    benefits: [
      {
        title: 'Tu Marca en su Celular',
        desc: 'Estar presente en la pantalla de tus clientes genera lealtad y compras más frecuentes.'
      },
      {
        title: 'Mensajes y Promociones Directas',
        desc: 'Envía avisos (notificaciones) a sus pantallas para contarles de ofertas, novedades o recordatorios.'
      },
      {
        title: 'Funciona Súper Rápido',
        desc: 'Al estar instalada en el teléfono, la app abre al instante y brinda una experiencia muy cómoda.'
      },
      {
        title: 'Publicada en Google Play',
        desc: 'Cualquier persona podrá buscar tu app y descargarla de forma oficial y segura.'
      }
    ],

    included: [
      'Desarrollo completo de la app para teléfonos y tablets Android',
      'Diseño visual moderno con tus colores, logo y estilo',
      'Sistema para enviar notificaciones a todos tus usuarios',
      'Conexión automática a tu base de datos en la nube',
      'Preparación de archivos para la tienda Google Play Store',
      'Acompañamiento y asesoría para publicar la app con éxito'
    ],

    process: [
      { step: '01', title: 'Planeamos tu App', desc: 'Definimos qué pantallas y botones tendrá tu aplicación.' },
      { step: '02', title: 'Diseñamos la experiencia', desc: 'Creamos cómo se verá la app en la pantalla del celular.' },
      { step: '03', title: 'La programamos', desc: 'Construimos la app asegurando que funcione rápido y sin fallos.' },
      { step: '04', title: 'Subida a Google Play', desc: 'Te ayudamos a publicarla en la tienda oficial para que todos la descarguen.' }
    ],

    faq: [
      {
        q: '¿Me ayudas con el trámite de Google Play?',
        a: 'Sí, te guiamos de la mano en todo el proceso para que tu app quede publicada correctamente.'
      },
      {
        q: '¿Mis clientes necesitarán celulares caros para usarla?',
        a: 'No, la optimizamos para que funcione de forma ligera y fluida en casi cualquier modelo de celular Android.'
      }
    ],

    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790826013/Android.mp4',
    poster: '/production/DelasGradas.jpg',
    stat1: { value: 'Google Play', label: 'Tienda Oficial' },
    stat2: { value: 'Avisos', label: 'Notificaciones' },
    tags: ['Android', 'Fideliza Clientes', 'Notificaciones Push', 'Google Play Ready'],
    url: null,
    quoteMsg: 'Hola Luis, tengo una idea para una app móvil y quisiera cotizarla.'
  },
  {
    id: 'e-commerce',
    num: '04',
    category: 'TIENDAS POR INTERNET',
    filterCategory: 'ecommerce',
    title: 'Tienda Virtual para Vender por Internet',
    desc: 'Tu propia tienda online abierta las 24 horas del día. Muestra tus productos, cobra con tarjetas o billeteras digitales y recibe los pedidos organizados automáticamente.',
    
    whatIs: 'Es un sitio web completo de comercio electrónico donde tus clientes pueden ver fotos de tus productos, elegir tallas o colores, agregarlos a un carrito y pagar de forma segura en segundos.',
    
    problemSolved: 'Se acabaron las ventas perdidas por no poder atender de noche o por tardar en enviar números de cuenta. Tu tienda cobra y confirma pedidos automáticamente mientras tú te enfocas en despachar.',
    
    benefits: [
      {
        title: 'Vende las 24 Horas del Día',
        desc: 'Tu negocio sigue vendiendo mientras duermes, descansas o estás atendiendo otros pendientes.'
      },
      {
        title: 'Cobros Fáciles y Seguros',
        desc: 'Acepta pagos con tarjetas de débito/crédito, Yape, Plin y transferencias bancarias.'
      },
      {
        title: 'Sin Comisiones Mensuales Abusivas',
        desc: 'La tienda es completamente tuya, sin pagar porcentajes de tus ventas a intermediarios.'
      },
      {
        title: 'Tú Mismo Cambias Precios y Fotos',
        desc: 'Incluye un panel súper fácil para que agregues nuevos productos cuando quieras desde tu celular o laptop.'
      }
    ],

    included: [
      'Catálogo completo con fotos, precios, tallas, colores y descripción',
      'Carrito de compras ágil para comprar en un solo paso',
      'Integración con pagos con tarjeta (Mercado Pago, Niubiz, Stripe) y Yape/Plin',
      'Panel sencillo para que subas tus propios productos y manejes el stock',
      'Avisos automáticos a tu correo o WhatsApp cada vez que alguien compre',
      'Calculadora de costos de envío según la ciudad o distrito',
      'Video tutorial exclusivo para que aprendas a administrar tu tienda'
    ],

    process: [
      { step: '01', title: 'Organizamos tus productos', desc: 'Revisamos tu lista de artículos, precios, fotos y formas de cobro.' },
      { step: '02', title: 'Diseñamos la tienda', desc: 'Creamos una tienda bonita, clara y muy fácil de usar para tus clientes.' },
      { step: '03', title: 'Conectamos los pagos', desc: 'Configuramos las pasarelas seguras para que el dinero llegue a tu cuenta.' },
      { step: '04', title: '¡A vender!', desc: 'Te capacitamos para subir productos y dejamos la tienda abierta al público.' }
    ],

    faq: [
      {
        q: '¿Cómo recibo el dinero de las ventas?',
        a: 'El dinero va directamente a tu cuenta bancaria a través de la pasarela de pagos que elijas (Mercado Pago, Niubiz, Culqi, etc.) o por transferencias directas.'
      },
      {
        q: '¿Es difícil agregar nuevos productos después?',
        a: 'Para nada. Es tan fácil como subir una foto a Facebook o Instagram y te daremos un video paso a paso.'
      }
    ],

    accentColor: '#7C3AED',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790831432/e-commerce_brutal.mp4',
    poster: '/production/VitalDent.jpg',
    stat1: { value: '24 / 7', label: 'Ventas Activas' },
    stat2: { value: '0%', label: 'Comisiones Extra' },
    tags: ['Carrito de Compras', 'Pagos con Tarjeta', 'Yape y Plin', 'Panel Autogestionable'],
    url: null,
    quoteMsg: 'Hola Luis, me gustaría cotizar una tienda virtual para vender mis productos por internet.'
  },
  {
    id: 'automatizacion-ia',
    num: '05',
    category: 'AHORRO DE TIEMPO CON IA',
    filterCategory: 'ai',
    title: 'Automatización de Tareas con Inteligencia Artificial',
    desc: 'Ponemos la Inteligencia Artificial a trabajar para tu negocio: conectamos tu WhatsApp, correos y sistemas para que las tareas repetitivas se hagan solas en automático.',
    
    whatIs: 'Es conectar tus programas del día a día (WhatsApp, Excel, Google Sheets, correo, facturación) con Inteligencia Artificial para que respondan mensajes, creen cotizaciones, guarden datos y envíen confirmaciones sin que tú tengas que hacerlo a mano.',
    
    problemSolved: 'Elimina las horas que tú o tus empleados pierden copiando y pegando datos, redactando cotizaciones idénticas o pasando información de un lado a otro.',
    
    benefits: [
      {
        title: 'Ahorra Horas de Trabajo Todos los Días',
        desc: 'Deja que la tecnología haga el trabajo pesado mientras tú te enfocas en vender y hacer crecer tu negocio.'
      },
      {
        title: 'Respuestas al Instante a tus Clientes',
        desc: 'Tus prospectos reciben cotizaciones y respuestas en segundos, aumentando tus probabilidades de cerrar la venta.'
      },
      {
        title: 'Cero Errores al Pasar Datos',
        desc: 'La información de clientes, pedidos y pagos se registra con total exactitud.'
      },
      {
        title: 'Atiende 10 Veces Más Clientes',
        desc: 'Multiplica tu capacidad de atención sin necesidad de contratar más personal para tareas mecánicas.'
      }
    ],

    included: [
      'Revisión de qué tareas repetitivas de tu negocio se pueden automatizar',
      'Conexión entre WhatsApp, Google Sheets / Excel, correo y tu base de datos',
      'Generación automática de cotizaciones en PDF y mensajes de confirmación',
      'Configuración de Inteligencia Artificial segura y entrenada para tu negocio',
      'Pruebas exhaustivas para garantizar que todo funcione con precisión',
      'Soporte y ajustes después de ponerlo en marcha'
    ],

    process: [
      { step: '01', title: 'Identificamos tus tareas pesadas', desc: 'Vemos qué procesos te quitan más tiempo en el día a día.' },
      { step: '02', title: 'Diseñamos el flujo automático', desc: 'Armamos el camino que seguirá la información de forma automática.' },
      { step: '03', title: 'Conectamos y probamos', desc: 'Configuramos las conexiones y probamos que todo funcione sin fallos.' },
      { step: '04', title: 'Todo en piloto automático', desc: 'Dejamos tus procesos funcionando 24/7 de manera autónoma.' }
    ],

    faq: [
      {
        q: '¿Qué tipo de cosas se pueden automatizar?',
        a: 'Casi todo: enviar cotizaciones por WhatsApp, guardar pedidos en Excel automáticamente, emitir recibos, avisar a clientes sobre entregas y calificar prospectos.'
      },
      {
        q: '¿Es seguro para los datos de mi negocio?',
        a: 'Totalmente. Utilizamos conexiones oficiales y seguras con contraseñas encriptadas.'
      }
    ],

    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790839392/automatizacion_2.mp4',
    poster: '/production/Charol.jpg',
    stat1: { value: '80%', label: 'Menos Trabajo Manual' },
    stat2: { value: 'Segundos', label: 'Respuesta Inmediata' },
    tags: ['Ahorro de Tiempo', 'WhatsApp Automático', 'Excel Inteligente', 'Sin Errores'],
    url: null,
    quoteMsg: 'Hola Luis, me interesa automatizar tareas de mi negocio con Inteligencia Artificial.'
  },
  {
    id: 'cursos-online',
    num: '06',
    category: 'CLASES Y CURSOS POR INTERNET',
    filterCategory: 'edtech',
    title: 'Plataforma para Vender Cursos y Clases Online',
    desc: 'Crea tu propia academia virtual para vender cursos, talleres o membresías. Tus alumnos compran, ven las clases en video, hacen exámenes y reciben su certificado automático.',
    
    whatIs: 'Es una página web como un "Netflix educativo" para tu marca. Tus estudiantes crean su cuenta, pagan su inscripción y acceden a tus videos ordenados por módulos, con material para descargar y certificados.',
    
    problemSolved: 'Evita enviar enlaces sueltos de Drive o YouTube que se comparten gratis. Protege tus videos para que solo quienes pagaron puedan verlos y automatiza la entrega de accesos.',
    
    benefits: [
      {
        title: 'Ingresos Automáticos',
        desc: 'Gana dinero vendiendo tu conocimiento a personas de cualquier ciudad o país en automático.'
      },
      {
        title: 'Tus Videos Seguros y Protegidos',
        desc: 'Protegemos tus lecciones para evitar que sean descargadas o compartidas sin permiso.'
      },
      {
        title: 'Certificados Automáticos con Código QR',
        desc: 'Al terminar el curso, el sistema emite el diploma personalizado del alumno sin que tengas que diseñar nada a mano.'
      },
      {
        title: 'Estudian desde su Celular o Computadora',
        desc: 'Tus alumnos pueden avanzar sus clases a su propio ritmo cuando y donde quieran.'
      }
    ],

    included: [
      'Aula virtual organizada por módulos, lecciones y videos',
      'Pasarela de pagos para cobrar cursos individuales o suscripciones mensuales',
      'Generador automático de certificados en PDF con el nombre del alumno',
      'Módulo para exámenes y cuestionarios con nota automática',
      'Panel para que veas qué alumnos están inscritos y cuánto has vendido',
      'Zona para que los alumnos descarguen PDFs, plantillas y dejen preguntas'
    ],

    process: [
      { step: '01', title: 'Estructuramos tus cursos', desc: 'Definimos los módulos, precios y cómo quieres cobrar tus clases.' },
      { step: '02', title: 'Diseñamos tu academia', desc: 'Creamos un campus moderno con tu marca, logo y colores.' },
      { step: '03', title: 'Subimos tus lecciones', desc: 'Cargamos tus primeros videos y configuramos los exámenes y certificados.' },
      { step: '04', title: '¡Lanzamos tu academia!', desc: 'Tu plataforma queda lista para recibir estudiantes y cobrar inscripciones.' }
    ],

    faq: [
      {
        q: '¿Cómo subo nuevos cursos en el futuro?',
        a: 'Tendrás un panel de profesor muy sencillo donde con pocos clics podrás crear cursos, subir videos y definir precios.'
      },
      {
        q: '¿Puedo cobrar membresías mensuales a mis alumnos?',
        a: 'Sí, la plataforma puede cobrar mensualidades automáticas a las tarjetas de tus alumnos.'
      }
    ],

    accentColor: '#7C3AED',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790841621/LMS_comercial.mp4',
    poster: '/production/Insteip.jpg',
    stat1: { value: 'Diplomas', label: 'Automáticos' },
    stat2: { value: 'Seguro', label: 'Videos Protegidos' },
    tags: ['Aula Virtual', 'Cobros Automáticos', 'Certificados con QR', 'Videos Protegidos'],
    url: null,
    quoteMsg: 'Hola Luis, me interesa cotizar una plataforma web para vender cursos online.'
  },
  {
    id: 'consultoria',
    num: '07',
    category: 'ASESORÍA Y ACOMPAÑAMIENTO',
    filterCategory: 'edtech',
    title: 'Asesoría Técnica y Consultoría para tu Proyecto',
    desc: 'Te acompaño y asesoro paso a paso para que no gastes dinero de más en tecnología. Analizamos tu idea, elegimos las herramientas correctas y te doy un plan claro.',
    
    whatIs: 'Es una sesión de trabajo directa conmigo donde revisamos tu negocio o idea digital, resolvemos todas tus dudas técnicas en lenguaje 100% claro y te entrego una guía práctica de qué hacer y cuánto debería costarte.',
    
    problemSolved: 'Evita que programadores o agencias te cobren de más por cosas que no necesitas, o que elijas tecnologías complicadas que luego no puedas mantener.',
    
    benefits: [
      {
        title: 'Evita Gastar de Más',
        desc: 'Te digo con honestidad qué necesitas exactamente para no tirar tu presupuesto a la basura.'
      },
      {
        title: 'Claridad Total sin Palabras Raras',
        desc: 'Te explico todo con ejemplos cotidianos para que tomes decisiones con total seguridad.'
      },
      {
        title: 'Acompañamiento Personalizado',
        desc: 'Revisamos tu caso particular y te doy soluciones prácticas para tu presupuesto.'
      },
      {
        title: 'Plan de Acción por Escrito',
        desc: 'Recibes un resumen claro con los pasos exactos a seguir para tu proyecto.'
      }
    ],

    included: [
      'Videollamada privada 1 a 1 por Google Meet o Zoom',
      'Diagnóstico de tu página web, sistema actual o idea de negocio',
      'Recomendación de las mejores herramientas según tu presupuesto',
      'Documento resumen con el plan de acción paso a paso',
      'Grabación en video de la sesión para que la consultes cuando quieras',
      'Respuestas a todas tus dudas de tecnología y desarrollo'
    ],

    process: [
      { step: '01', title: 'Agendamos la sesión', desc: 'Elegimos el día y hora que mejor te acomode para reunirnos por videollamada.' },
      { step: '02', title: 'Revisamos tu caso', desc: 'Analizamos a fondo tu negocio, tus dudas y lo que quieres construir.' },
      { step: '03', title: 'Trazamos la estrategia', desc: 'Te explico la forma más rápida, económica y segura de hacerlo realidad.' },
      { step: '04', title: 'Te entrego tu plan', desc: 'Recibes la guía detallada con los pasos y proveedores recomendados.' }
    ],

    faq: [
      {
        q: '¿Es para ideas nuevas o para negocios que ya tienen página web?',
        a: 'Para ambos: si tienes una idea desde cero te digo cómo empezar, y si ya tienes un sistema te ayudo a mejorarlo.'
      },
      {
        q: '¿Cómo se realiza la reunión?',
        a: 'Por videollamada de Google Meet o Zoom, grabada para que tu equipo la pueda revisar.'
      }
    ],

    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790841685/consultoria_Tech.mp4',
    poster: '/production/SolucionesTecnologicas.png',
    stat1: { value: '1 a 1', label: 'Atención Directa' },
    stat2: { value: '100%', label: 'Sin Rodeos' },
    tags: ['Asesoría 1 a 1', 'Ahorro de Dinero', 'Plan por Escrito', 'Lenguaje Sencillo'],
    url: null,
    quoteMsg: 'Hola Luis, me interesa agendar una asesoría técnica para mi proyecto.'
  },
  {
    id: 'catalogo-productos',
    num: '08',
    category: 'CATÁLOGO PARA WHATSAPP',
    filterCategory: 'ecommerce',
    title: 'Catálogo de Productos con Pedidos a WhatsApp',
    desc: 'Tus clientes eligen sus productos desde su celular, arman su carrito y te mandan el pedido listo y ordenado directo a tu WhatsApp en un solo toque.',
    
    whatIs: 'Es una vitrina virtual súper rápida para celulares. El cliente ve tus fotos y precios, selecciona cantidades y al tocar un botón se abre su WhatsApp con la lista exacta de lo que quiere comprar.',
    
    problemSolved: 'Te ahorra responder 50 veces al día "¿qué precio tiene?" o "¿qué modelos te quedan?". El cliente ya te escribe con la lista lista para cobrar y despachar.',
    
    benefits: [
      {
        title: 'Cierras Pedidos en Segundos',
        desc: 'El cliente te manda el mensaje con los nombres de los productos, cantidades y el precio total sumado.'
      },
      {
        title: 'Súper Fácil para tus Clientes',
        desc: 'Cualquier persona, sin importar su edad, puede usarlo en su celular sin enredos.'
      },
      {
        title: 'Sin Pagar Comisiones por Venta',
        desc: 'Todo el dinero de tus ventas es 100% para ti, sin pagar porcentajes como en las apps de delivery.'
      },
      {
        title: 'El Enlace Ideal para tu Instagram y TikTok',
        desc: 'Ponlo en tu perfil para que todos tus seguidores vean tu catálogo al instante.'
      }
    ],

    included: [
      'Catálogo visual optimizado especialmente para celulares',
      'Buscador rápido y filtros por categorías de productos',
      'Carrito de compras con cálculo automático del precio total',
      'Botón que genera el mensaje de pedido directo a tu WhatsApp',
      'Panel sencillo para que actualices precios y fotos en 2 minutos',
      'Sin costos mensuales obligatorios de mantenimiento',
      'Enlace corto listo para tu biografía de redes sociales y código QR'
    ],

    process: [
      { step: '01', title: 'Me pasas tus productos', desc: 'Organizamos tu lista de artículos, fotos, precios y número de WhatsApp.' },
      { step: '02', title: 'Personalizamos tu catálogo', desc: 'Lo armamos con tu logo, colores y estilo de marca.' },
      { step: '03', title: 'Probamos los pedidos', desc: 'Validamos que los mensajes de WhatsApp lleguen claros y ordenados.' },
      { step: '04', title: '¡Listo para compartir!', desc: 'Te entregamos tu enlace y código QR para poner en tus redes y local.' }
    ],

    faq: [
      {
        q: '¿Cómo me llega el pedido del cliente?',
        a: 'Te llega un mensaje a tu WhatsApp con el detalle: producto, cantidad, precio unitario, total sumado y datos del cliente.'
      },
      {
        q: '¿Puedo cambiar precios o marcar productos agotados?',
        a: 'Sí, tienes un acceso fácil donde puedes actualizar precios o pausar productos cuando se termine el stock.'
      }
    ],

    accentColor: '#7C3AED',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790842142/catalogo_ventas_wsp.mp4',
    poster: '/production/AgujasAcupuntura.png',
    stat1: { value: '1 Toque', label: 'Pedido a WhatsApp' },
    stat2: { value: '0%', label: 'Sin Comisiones' },
    tags: ['Para WhatsApp', 'Ideal para Celular', 'Sin Comisiones', 'Fácil de Usar'],
    url: 'https://www.agujasacupunturaperu.com/',
    quoteMsg: 'Hola Luis, me gustaría cotizar un catálogo virtual de productos con pedidos a WhatsApp.'
  },
  {
    id: 'chatbot-ai',
    num: '09',
    category: 'ATENCIÓN AL CLIENTE 24/7',
    filterCategory: 'ai',
    title: 'Chatbots Inteligentes con IA (WhatsApp y Web)',
    desc: 'Un asistente virtual con Inteligencia Artificial entrenado con la información de tu negocio que responde dudas, atiende clientes y agenda citas a cualquier hora del día.',
    
    whatIs: 'Es un agente virtual inteligente que conversa de forma natural como una persona real. Conoce tus precios, horarios, servicios y políticas, respondiendo al instante las 24 horas del día.',
    
    problemSolved: 'Evita perder clientes que te escriben de noche, los fines de semana o cuando estás ocupado. Tus prospectos siempre reciben una respuesta inmediata y cordial.',
    
    benefits: [
      {
        title: 'Atención Continua las 24 Horas',
        desc: 'Nunca más dejes a un cliente en visto. Tu negocio responde de día, de noche y feriados.'
      },
      {
        title: 'Habla de Forma Natural y Amable',
        desc: 'No es un robot aburrido de botones tiesos; comprende lo que la gente pregunta y responde con calidez.'
      },
      {
        title: 'Filtra a los Clientes Más Interesados',
        desc: 'Pide los datos de contacto y te pasa a tu WhatsApp a las personas listas para comprar.'
      },
      {
        title: 'Resuelve el 80% de Preguntas Frecuentes',
        desc: 'Libera a tu equipo de responder las mismas dudas básicas una y otra vez.'
      }
    ],

    included: [
      'Entrenamiento de la IA con los manuales, precios y preguntas de tu negocio',
      'Conexión directa a tu WhatsApp Business oficial o ventana de chat en tu web',
      'Registro de nombre, teléfono y requerimiento de cada cliente que escribe',
      'Opción para transferir la conversación a un asesor humano cuando sea necesario',
      'Configuración de seguridad para que solo responda cosas oficiales de tu empresa',
      'Monitoreo y ajustes para que cada día responda mejor'
    ],

    process: [
      { step: '01', title: 'Recopilamos tu información', desc: 'Juntamos tus preguntas frecuentes, precios, horarios y formas de trabajo.' },
      { step: '02', title: 'Entrenamos al asistente', desc: 'Configuramos la personalidad, tono de voz y respuestas del bot.' },
      { step: '03', title: 'Conectamos a WhatsApp o Web', desc: 'Lo integramos para que empiece a responder mensajes en vivo.' },
      { step: '04', title: 'Pruebas y puesta en marcha', desc: 'Hacemos pruebas reales juntos para asegurarnos de que responda perfecto.' }
    ],

    faq: [
      {
        q: '¿Qué pasa si el cliente hace una pregunta muy difícil?',
        a: 'El bot detecta que es un caso especial y le avisa a tu equipo humano para que una persona tome la conversación.'
      },
      {
        q: '¿El bot puede inventar cosas que no son ciertas?',
        a: 'No, le colocamos reglas estrictas para que SOLO responda con la información oficial que tú nos autorices.'
      }
    ],

    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790842189/chatbot_ia.mp4',
    poster: '/production/SolucionesTecnologicas.png',
    stat1: { value: '24 / 7', label: 'Siempre Disponible' },
    stat2: { value: 'Al Instante', label: 'Cero Esperas' },
    tags: ['Atención 24/7', 'Para WhatsApp', 'Respuestas Naturales', 'Pasa a Humanos'],
    url: null,
    quoteMsg: 'Hola Luis, me gustaría cotizar un Chatbot con Inteligencia Artificial para mi negocio.'
  }
]

export function getServiceById(id) {
  return SERVICES_DATA.find((s) => s.id === id)
}

export function getAllServices() {
  return SERVICES_DATA
}
