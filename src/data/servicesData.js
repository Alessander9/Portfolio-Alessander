export const SERVICES_ROUTE_PREFIX = '#/servicio/'

export const SERVICES_DATA = [
  {
    id: 'citas-medicas',
    num: '01',
    category: 'SALUD & CLÍNICAS',
    filterCategory: 'salud',
    title: 'Sistema de Citas Médicas y Gestión de Pacientes',
    desc: 'Plataforma digital para consultorios, clínicas y centros de salud que permite a los pacientes agendar sus citas online las 24 horas y a los doctores gestionar historias clínicas con total orden.',
    
    // ¿Qué es?
    whatIs: 'Es una aplicación web y móvil donde tus pacientes pueden elegir el doctor, la especialidad, el día y la hora de su atención desde su celular. Al mismo tiempo, el personal médico cuenta con un panel privado para ver sus horarios, registrar diagnósticos y consultar historias clínicas.',
    
    // ¿Qué problema soluciona?
    problemSolved: 'Elimina las llamadas perdidas, la saturación en recepción y el desorden de agendas en papel. Los pacientes no tienen que esperar a que el consultorio abra para separar su cita, y el consultorio nunca pierde un paciente por falta de atención inmediata.',
    
    // ¿En qué te ayuda y para qué sirve?
    benefits: [
      {
        title: 'Citas Automáticas las 24 Horas',
        desc: 'Tus pacientes pueden agendar su consulta un domingo por la noche o en cualquier momento sin esperar respuesta humana.'
      },
      {
        title: 'Historias Clínicas 100% Seguras',
        desc: 'Guarda antecedentes, recetas, diagnósticos y fotos médicas en la nube con acceso restringido para doctores autorizados.'
      },
      {
        title: 'Recordatorios por WhatsApp y Correo',
        desc: 'Envía avisos automáticos a los pacientes antes de su cita para reducir las ausencias y cancelaciones de última hora.'
      },
      {
        title: 'Control por Especialidad y Sedes',
        desc: 'Administra múltiples doctores, consultorios o locales desde una sola pantalla sin cruces de horarios.'
      }
    ],

    // ¿Qué te entregamos listo para usar?
    included: [
      'Portal web para pacientes con reserva rápida de citas en 3 pasos',
      'Panel administrativo para doctores y recepcionistas',
      'Módulo de historias clínicas y recetas médicas digitales',
      'Calendario interactivo con vista diaria, semanal y mensual',
      'Notificaciones y confirmaciones directas por WhatsApp',
      'Reporte de ingresos, pacientes atendidos y citas canceladas',
      'Capacitación guiada para tu equipo de recepción y médicos',
      'Dominio propio, hosting seguro con SSL y soporte técnico'
    ],

    // ¿Cómo se hace?
    process: [
      { step: '01', title: 'Revisamos tu flujo médico', desc: 'Identificamos tus especialidades, doctores, horarios de atención y sedes.' },
      { step: '02', title: 'Personalizamos la plataforma', desc: 'Configuramos tu marca, logotipo, doctores, servicios y tarifas médicas.' },
      { step: '03', title: 'Pruebas y capacitación', desc: 'Ensayamos el agendamiento y capacitamos a tu equipo médico en el uso diario.' },
      { step: '04', title: '¡Puesta en marcha!', desc: 'Publicamos el sistema y lo conectamos a tus redes y WhatsApp institucional.' }
    ],

    // Preguntas Frecuentes
    faq: [
      {
        q: '¿Los doctores pueden acceder desde su celular o tablet?',
        a: 'Sí, el sistema está totalmente adaptado para verse perfecto en teléfonos, tablets y computadoras.'
      },
      {
        q: '¿Se puede integrar con pasarelas de pago online?',
        a: 'Sí, puedes permitir que el paciente pague la consulta al reservar o que pague presencialmente en clínica.'
      },
      {
        q: '¿La información médica está protegida?',
        a: 'Completamente. Utilizamos bases de datos cifradas y copias de seguridad automáticas.'
      }
    ],

    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791014344/app_citas_clinica.mp4',
    poster: '/production/clinica_dental.jpg',
    stat1: { value: '24/7', label: 'Citas online' },
    stat2: { value: '-80%', label: 'Ausencias' },
    tags: ['Historias Clínicas', 'Recordatorios WhatsApp', 'Gestión Doctores', 'Fácil para Pacientes'],
    url: '#',
    quoteMsg: 'Hola Luis, me interesa cotizar el Sistema de Citas Médicas para mi clínica/consultorio.'
  },
  {
    id: 'automatizacion-redes',
    num: '02',
    category: 'AUTOMATIZACIÓN & IA',
    filterCategory: 'ia',
    title: 'Automatización de Redes Sociales con Inteligencia Artificial',
    desc: 'Atiende mensajes de Facebook, Instagram y WhatsApp en segundos y programa publicaciones de forma automática sin estar pegado al celular todo el día.',
    
    whatIs: 'Es un sistema inteligente que atiende las dudas y pedidos de tus clientes de manera inmediata en tus redes sociales. Puede responder preguntas sobre precios, horarios, enviar tu catálogo y capturar los números de contacto de los interesados sin intervención manual.',
    
    problemSolved: 'Muchos clientes le compran al primer negocio que les responde. Si tardas horas en contestar en Instagram o Facebook, el cliente se va con la competencia. Este sistema responde en 3 segundos a cualquier hora.',
    
    benefits: [
      {
        title: 'Respuestas al Instante en 3 Segundos',
        desc: 'Tus clientes reciben información clara de tus productos o servicios inmediatamente, aumentando las posibilidades de venta.'
      },
      {
        title: 'Filtra y Califica Prospectos Reales',
        desc: 'La IA hace preguntas clave y te entrega en tu WhatsApp solo a los clientes listos para pagar.'
      },
      {
        title: 'Publicaciones y Contenido Programado',
        desc: 'Deja listos tus posts e historias del mes para que se publiquen automáticamente en los mejores horarios.'
      },
      {
        title: 'Ahorro de Tiempo y Personal',
        desc: 'Automatiza el 80% de las preguntas repetitivas para que tú y tu equipo se enfoquen en cerrar ventas.'
      }
    ],

    included: [
      'Configuración de chatbot con IA para WhatsApp, Instagram Direct y Facebook Messenger',
      'Flujos de conversación naturales con respuestas sobre tus productos y precios',
      'Captura automática de datos (nombre, teléfono, correo) en una base de datos',
      'Panel de control para supervisar conversaciones en vivo',
      'Programador de publicaciones automáticas multicanal',
      'Entrenamiento de la IA con la información de tu negocio',
      'Guía paso a paso para monitorear y ajustar respuestas'
    ],

    process: [
      { step: '01', title: 'Recopilamos tus preguntas frecuentes', desc: 'Reunimos las dudas que siempre te hacen los clientes sobre tus productos.' },
      { step: '02', title: 'Entrenamos al asistente inteligente', desc: 'Le enseñamos tus precios, condiciones, catálogo y tono de comunicación.' },
      { step: '03', title: 'Conectamos tus cuentas oficiales', desc: 'Vinculamos el sistema con tu WhatsApp Business, Instagram y Facebook.' },
      { step: '04', title: '¡Atención en piloto automático!', desc: 'Tu negocio empieza a responder y captar prospectos las 24 horas del día.' }
    ],

    faq: [
      {
        q: '¿La IA suena como un robot frío o como una persona real?',
        a: 'La entrenamos con un lenguaje cercano, amable y natural, adaptado a cómo le hablas a tus clientes.'
      },
      {
        q: '¿Puedo intervenir en una conversación si quiero responder yo mismo?',
        a: 'Sí, en cualquier momento puedes tomar el control del chat desde tu teléfono.'
      },
      {
        q: '¿Hay riesgo de baneo en WhatsApp?',
        a: 'No, utilizamos las integraciones oficiales autorizadas por Meta para total seguridad.'
      }
    ],

    accentColor: '#7C3AED',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791014349/Automatizaci%C3%B3n_de_redes_sociales.mp4',
    poster: '/production/ai-automation.jpg',
    stat1: { value: '3 seg', label: 'Respuesta promedio' },
    stat2: { value: '+40%', label: 'Cierre de prospectos' },
    tags: ['Chatbot Inteligente', 'WhatsApp Auto', 'Instagram DM', 'Sin Perder Ventas'],
    url: '#',
    quoteMsg: 'Hola Luis, quiero cotizar la Automatización de Redes Sociales con Inteligencia Artificial.'
  },
  {
    id: 'app-movil-empresas',
    num: '03',
    category: 'APLICACIONES MÓVILES',
    filterCategory: 'movil',
    title: 'App Móvil para Empresas y Clientes',
    desc: 'Tu propia aplicación móvil con el logo de tu empresa instalada en el celular de tus clientes y colaboradores para compras, servicios y notificaciones directas.',
    
    whatIs: 'Es una aplicación nativa para teléfonos Android e iPhone creada especialmente para tu marca. Tus clientes pueden descargarla, ver tus servicios, comprar productos, acumular puntos y recibir notificaciones especiales directamente en su pantalla.',
    
    problemSolved: 'En páginas web o redes sociales dependes del algoritmo o de que el usuario abra el navegador. Con una app estás presente en el bolsillo de tu cliente con icono propio y avisos directos.',
    
    benefits: [
      {
        title: 'Presencia Directa en el Teléfono',
        desc: 'Tu logo visible todos los días en la pantalla principal de tus clientes más fieles.'
      },
      {
        title: 'Notificaciones Push Gratuitas',
        desc: 'Envía avisos de promociones, descuentos y novedades que aparecen como alertas en su celular.'
      },
      {
        title: 'Compras y Pagos en 2 Toques',
        desc: 'Permite a los usuarios guardar su dirección y métodos de pago para recompras ultrarrápidas.'
      },
      {
        title: 'Panel Interno para Colaboradores',
        desc: 'También se puede usar para choferes, técnicos de campo o vendedores para registrar entregas o pedidos.'
      }
    ],

    included: [
      'Desarrollo de la aplicación para teléfonos Android (Google Play) e iOS',
      'Diseño visual moderno con tus colores, logo y estilo de marca',
      'Módulo de catálogo de productos/servicios y carrito de compras',
      'Sistema de notificaciones push para enviar mensajes a todos los usuarios',
      'Panel web de administración para gestionar productos, pedidos y clientes',
      'Registro de usuarios por correo, teléfono o Google',
      'Publicación oficial en Google Play Store'
    ],

    process: [
      { step: '01', title: 'Definimos las funciones clave', desc: 'Determinamos qué podrán hacer tus clientes y qué necesitas en el panel de control.' },
      { step: '02', title: 'Diseñamos las pantallas de la app', desc: 'Te mostramos prototipos visuales de cómo se verá y sentirá en un teléfono real.' },
      { step: '03', title: 'Programación y pruebas', desc: 'Construimos la app con alta velocidad, seguridad y fluidez.' },
      { step: '04', title: 'Publicación e instalación', desc: 'La publicamos y te enseñamos cómo compartirla para que todos la descarguen.' }
    ],

    faq: [
      {
        q: '¿Cuánto tiempo tarda en desarrollarse la app?',
        a: 'Dependiendo de las funciones, suele tomar entre 3 y 6 semanas de desarrollo completo.'
      },
      {
        q: '¿Puedo actualizar los precios y productos sin tener que reprogramar la app?',
        a: 'Sí, todo se actualiza en tiempo real desde tu panel web de administración.'
      }
    ],

    accentColor: '#3B82F6',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791014365/android_app_empresarial.mp4',
    poster: '/production/app_android.jpg',
    stat1: { value: '100%', label: 'Personalizada' },
    stat2: { value: 'Push', label: 'Avisos directos' },
    tags: ['Android & iOS', 'Notificaciones Push', 'Panel Web', 'Marca Propia'],
    url: '#',
    quoteMsg: 'Hola Luis, me gustaría cotizar una App Móvil para mi empresa.'
  },
  {
    id: 'sistema-cms',
    num: '04',
    category: 'SISTEMAS WEB & CMS',
    filterCategory: 'software',
    title: 'Sistema CMS y Panel Autoadministrable',
    desc: 'Un panel de control superfácil e intuitivo donde puedes cambiar textos, subir nuevas fotos, publicar noticias y actualizar tu página web sin saber programar.',
    
    whatIs: 'Es un administrador privado para tu sitio web que te da el control total de tu contenido. Te permite editar títulos, precios, añadir nuevos productos o publicar artículos de blog con solo hacer clic y escribir, como si fuera Word o PowerPoint.',
    
    problemSolved: 'Ya no tienes que depender de un programador ni pagar dinero extra cada vez que quieras cambiar un texto, subir una foto de un trabajo realizado o modificar un número de contacto.',
    
    benefits: [
      {
        title: 'Independencia Total',
        desc: 'Actualiza tu página web en cualquier momento desde tu computadora o celular sin pedir ayuda.'
      },
      {
        title: 'Panel Visual e Intuitivo',
        desc: 'Diseñado con botones claros y campos sencillos para que cualquier persona de tu equipo lo use sin enredos.'
      },
      {
        title: 'Gestor de Medios e Imágenes',
        desc: 'Sube fotos, videos y documentos PDF que se optimizan automáticamente para que tu web nunca se ponga pesada.'
      },
      {
        title: 'Múltiples Usuarios y Permisos',
        desc: 'Crea accesos para redactores, administradores o vendedores con permisos controlados.'
      }
    ],

    included: [
      'Panel de administración web con usuario y contraseña seguros',
      'Editor visual de páginas, banners, testimonios y servicios',
      'Galería de fotos y documentos optimizada en la nube',
      'Módulo de blog / artículos para posicionar en Google (SEO)',
      'Gestor de formularios de contacto y mensajes recibidos',
      'Manual de usuario y video tutorial paso a paso',
      'Copias de seguridad automáticas de todo tu contenido'
    ],

    process: [
      { step: '01', title: 'Analizamos qué secciones quieres editar', desc: 'Definimos los bloques que cambiarás frecuentemente (fotos, textos, precios, blog).' },
      { step: '02', title: 'Construimos el panel personalizado', desc: 'Armamos tu CMS a medida para que solo veas las opciones que realmente usas.' },
      { step: '03', title: 'Cargamos tu contenido inicial', desc: 'Dejamos tu web armada con tus fotos, textos y logotipos.' },
      { step: '04', title: 'Te enseñamos a usarlo', desc: 'Hacemos una sesión práctica donde aprendes a modificar todo en 10 minutos.' }
    ],

    faq: [
      {
        q: '¿Necesito saber algo de programación para usar el CMS?',
        a: 'Absolutamente nada. Está diseñado para que cualquier persona que sepa usar un correo electrónico pueda manejarlo.'
      },
      {
        q: '¿Puedo romper la página por error?',
        a: 'No, el diseño estructural está protegido. Solo editas contenidos seguros como textos e imágenes.'
      }
    ],

    accentColor: '#10B981',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791014527/CMS.mp4',
    poster: '/production/cms_preview.jpg',
    stat1: { value: '0 Code', label: 'Fácil de editar' },
    stat2: { value: '100%', label: 'Autonomía' },
    tags: ['Panel Privado', 'Fácil de Usar', 'Subida de Fotos', 'Blog & Noticias'],
    url: '#',
    quoteMsg: 'Hola Luis, quiero cotizar un Sistema CMS para administrar mi sitio web.'
  },
  {
    id: 'sistema-erp',
    num: '05',
    category: 'GESTIÓN EMPRESARIAL ERP',
    filterCategory: 'software',
    title: 'Sistema ERP y Control Integral de Negocios',
    desc: 'Software todo-en-uno para controlar inventarios, compras, ventas, facturación, caja y personal desde una sola pantalla en tiempo real.',
    
    whatIs: 'Es el cerebro digital de tu empresa: centraliza todas las áreas de tu negocio para que sepas exactamente cuánto vendes, qué mercadería te queda en almacén, qué deudas tienes pendientes y cuánto dinero hay en caja cada día.',
    
    problemSolved: 'Reemplaza hojas de Excel desordenadas, cuadernos y cálculos manuales por un sistema automático que evita pérdidas de mercadería, errores de cobranza y dolores de cabeza contables.',
    
    benefits: [
      {
        title: 'Inventario y Almacén Exacto',
        desc: 'Conoce en tiempo real el stock de cada producto y recibe alertas automáticas cuando un artículo se esté agotando.'
      },
      {
        title: 'Control de Ventas y Facturación',
        desc: 'Emite comprobantes, cotizaciones y pedidos rápidamente registrando cada movimiento contable.'
      },
      {
        title: 'Caja y Finanzas Claras',
        desc: 'Apertura y cierre de caja diario, balance de ingresos, egresos y cálculo automático de ganancias netas.'
      },
      {
        title: 'Reportes y Estadísticas en Vivo',
        desc: 'Gráficos claros que te muestran qué productos se venden más y en qué meses ganas más dinero.'
      }
    ],

    included: [
      'Módulo de Inventarios y kardex multialmacén',
      'Punto de venta (POS) y facturación rápida',
      'Módulo de compras, proveedores y cuentas por pagar',
      'Control de clientes, cotizaciones y créditos',
      'Cierre de caja diario y arqueo por turnos',
      'Panel de métricas y exportación a Excel / PDF',
      'Permisos por roles (cajeros, administradores, contadores)',
      'Acceso seguro en la nube desde cualquier dispositivo'
    ],

    process: [
      { step: '01', title: 'Estudiamos tu operación', desc: 'Revisamos cómo manejas tus compras, ventas, productos y facturación.' },
      { step: '02', title: 'Configuración de catálogo y reglas', desc: 'Cargamos tus productos, precios, stock inicial y tipos de pago.' },
      { step: '03', title: 'Capacitación a tu equipo', desc: 'Entrenamos a tus cajeros, administradores y personal de almacén.' },
      { step: '04', title: 'Lanzamiento y acompañamiento', desc: 'Arrancamos el sistema con soporte en vivo para resolver cualquier duda.' }
    ],

    faq: [
      {
        q: '¿Se puede usar en varias sucursales a la vez?',
        a: 'Sí, el sistema está en la nube y puedes controlar múltiples tiendas o locales centralizados.'
      },
      {
        q: '¿Mis datos están seguros si se corta la luz en mi local?',
        a: 'Sí, toda la información se almacena en la nube en servidores seguros con respaldo continuo.'
      }
    ],

    accentColor: '#F59E0B',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791014551/ERP.mp4',
    poster: '/production/erp_preview.jpg',
    stat1: { value: '100%', label: 'Control total' },
    stat2: { value: 'Multi', label: 'Sucursales' },
    tags: ['Control de Stock', 'Punto de Venta', 'Caja Diaria', 'Reportes en Vivo'],
    url: '#',
    quoteMsg: 'Hola Luis, me interesa cotizar un Sistema ERP para gestionar mi empresa.'
  },
  {
    id: 'software-restaurantes',
    num: '06',
    category: 'RESTAURANTES & GASTRONOMÍA',
    filterCategory: 'software',
    title: 'Software para Restaurantes, Comandas y Delivery',
    desc: 'Sistema ágil para restaurantes, cafeterías, bares y dark kitchens con toma de pedidos en mesas desde celulares, comanda a cocina y control de caja.',
    
    whatIs: 'Es un programa rápido y fácil para meseros, cocineros y cajeros. El mozo toma el pedido en la mesa desde su celular o tablet, la orden se imprime o aparece en la pantalla de cocina al instante, y el cajero cobra con un solo clic.',
    
    problemSolved: 'Elimina las demoras en atención, los pedidos equivocados por letra ilegible en papel y los cobros incompletos, acelerando la rotación de mesas y mejorando la satisfacción de los comensales.',
    
    benefits: [
      {
        title: 'Comanda Directa a Cocina',
        desc: 'El pedido llega a la cocina en 1 segundo apenas el mozo lo anota en su celular, sin necesidad de caminar hasta la barra.'
      },
      {
        title: 'Mapa Visual de Mesas en Vivo',
        desc: 'Mira en pantalla qué mesas están libres, ocupadas, pidiendo la cuenta o reservadas.'
      },
      {
        title: 'Control de Recetas e Ingredientes',
        desc: 'El sistema descuenta automáticamente los insumos utilizados en cada plato vendido para evitar mermas.'
      },
      {
        title: 'Módulo de Delivery y Para Llevar',
        desc: 'Gestiona pedidos de clientes por teléfono o WhatsApp con dirección y datos de motorizado.'
      }
    ],

    included: [
      'Punto de venta táctil para mozos y cajeros',
      'Plano visual de mesas interactivo y editable',
      'Módulo de comanda para cocina y barra (impresora o pantalla KDS)',
      'División de cuentas (separar cuentas entre varios clientes de una mesa)',
      'Control de ingredientes, recetas e inventario de insumos',
      'Arqueo y cierre de caja diario por turnos de mozos',
      'Reporte de platos más vendidos y horas con mayor afluencia'
    ],

    process: [
      { step: '01', title: 'Cargamos tu carta gastronómica', desc: 'Subimos tus platos, bebidas, combos, precios y adicionales (salsas, guarniciones).' },
      { step: '02', title: 'Configuramos tus impresoras / pantallas', desc: 'Conectamos las comandas de cocina, barra y ticketera de caja.' },
      { step: '03', title: 'Capacitación a mozos y cocina', desc: 'Hacemos simulaciones de atención para que todo el equipo domine el sistema en minutos.' },
      { step: '04', title: '¡Servicio más rápido!', desc: 'Tu restaurante empieza a operar con máxima velocidad y control.' }
    ],

    faq: [
      {
        q: '¿Los mozos pueden usar sus propios teléfonos para tomar pedidos?',
        a: 'Sí, pueden usar cualquier celular, tablet o dispositivo POS con navegador web.'
      },
      {
        q: '¿Funciona si se cae el internet por momentos?',
        a: 'Sí, el sistema incluye soporte para red local en salón para que nunca dejes de atender.'
      }
    ],

    accentColor: '#EF4444',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791014572/Software_para_restaurantes_video__1080p_20260929041953.mp4',
    poster: '/production/restaurante_preview.jpg',
    stat1: { value: '< 2 min', label: 'Mesa a Cocina' },
    stat2: { value: '0 Errores', label: 'En comandas' },
    tags: ['Comanda Digital', 'Mapa de Mesas', 'Control de Caja', 'Delivery Rápido'],
    url: '#',
    quoteMsg: 'Hola Luis, quiero cotizar el Software para mi Restaurante / Cafetería.'
  },
  {
    id: 'sistema-veterinario',
    num: '07',
    category: 'VETERINARIAS & MASCOTAS',
    filterCategory: 'salud',
    title: 'Sistema Veterinario y Control de Mascotas',
    desc: 'Software especializado para clínicas veterinarias y pet shops con historial clínico de mascotas, recordatorios de vacunas y control de citas.',
    
    whatIs: 'Es una plataforma completa donde registras las fichas médicas de perros, gatos y otras mascotas (vacunas, desparasitaciones, cirugías, tratamientos, alergias y servicios de baño/peluquería), con recordatorios automáticos por WhatsApp para sus dueños.',
    
    problemSolved: 'Muchos dueños olvidan la fecha de la siguiente vacuna o baño de su mascota. Con este sistema, la veterinaria les envía recordatorios automáticos, asegurando ingresos recurrentes y fidelidad.',
    
    benefits: [
      {
        title: 'Historial Clínico con Foto de la Mascota',
        desc: 'Ficha completa con peso, vacunas aplicadas, cirugías, recetas médicas y notas del veterinario.'
      },
      {
        title: 'Avisos Automáticos de Vacunas por WhatsApp',
        desc: 'El sistema notifica al dueño días antes de que venza su vacuna o antipulgas.'
      },
      {
        title: 'Agenda de Baños, Peluquería y Consultas',
        desc: 'Controla los turnos de grooming y consultas para evitar aglomeraciones en sala de espera.'
      },
      {
        title: 'Tienda Pet Shop y Facturación',
        desc: 'Vende alimentos, accesorios y medicinas con control de stock y boletas al instante.'
      }
    ],

    included: [
      'Registro de mascotas y dueños con historial clínico completo',
      'Calendario de vacunas, desparasitaciones y cirugías',
      'Módulo de citas para veterinaria, baño y corte de pelo',
      'Mensajes de recordatorio automáticos por WhatsApp',
      'Punto de venta para pet shop y farmacia veterinaria',
      'Generador de recetas y certificados médicos imprimibles o PDF',
      'Reporte de ingresos, servicios más demandados y clientes recurrentes'
    ],

    process: [
      { step: '01', title: 'Configuramos tus servicios', desc: 'Registramos tus tipos de consultas, vacunas, servicios de baño y productos pet shop.' },
      { step: '02', title: 'Personalizamos las fichas médicas', desc: 'Adaptamos los campos clínicos a tu metodología de trabajo.' },
      { step: '03', title: 'Activamos las notificaciones', desc: 'Configuramos los mensajes automáticos de WhatsApp con tu nombre y logo.' },
      { step: '04', title: '¡Veterinaria conectada!', desc: 'Comienzas a brindar una atención moderna que los dueños de mascotas aman.' }
    ],

    faq: [
      {
        q: '¿Puedo enviar la receta médica al WhatsApp del dueño?',
        a: 'Sí, el sistema genera la receta en PDF con un botón directo para enviarla por WhatsApp.'
      },
      {
        q: '¿Sirve tanto para consultas como para pet shop?',
        a: 'Sí, integra la parte médica y la venta de productos en un solo lugar.'
      }
    ],

    accentColor: '#06B6D4',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791014629/sisvet.mp4',
    poster: '/production/veterinaria_preview.jpg',
    stat1: { value: '+60%', label: 'Retorno a vacunas' },
    stat2: { value: 'Digital', label: 'Historial clínico' },
    tags: ['Fichas de Mascotas', 'Avisos WhatsApp', 'Grooming & Baños', 'Pet Shop'],
    url: '#',
    quoteMsg: 'Hola Luis, me gustaría cotizar el Sistema Veterinario para mi clínica/pet shop.'
  },
  {
    id: 'manejo-redes-sociales',
    num: '08',
    category: 'MARKETING & REDES SOCIALES',
    filterCategory: 'ia',
    title: 'Manejo de Redes Sociales y Publicidad Digital',
    desc: 'Estrategia completa de contenido profesional y campañas de anuncios pagados en Facebook, Instagram y TikTok para atraer prospectos calificados todos los días.',
    
    whatIs: 'Nos encargamos de gestionar profesionalmente tus redes sociales: creamos las piezas gráficas, redactamos los textos persuasivos, publicamos en los mejores horarios y administramos campañas de publicidad pagada (Meta Ads) para que personas interesadas en tus productos te escriban a diario.',
    
    problemSolved: 'Resuelve el problema de no tener tiempo para publicar, no saber qué diseñar o invertir dinero en anuncios que no traen ventas. Creamos campañas enfocadas directamente en conseguir clientes reales.',
    
    benefits: [
      {
        title: 'Diseños Atractivos y Profesionales',
        desc: 'Tus redes se verán como las de una gran marca, generando confianza inmediata en quienes visiten tu perfil.'
      },
      {
        title: 'Anuncios Segmentados a tu Cliente Ideal',
        desc: 'Llegamos a personas de tu ciudad o país con la edad, intereses y poder adquisitivo adecuado.'
      },
      {
        title: 'Flujo Constante de Mensajes a WhatsApp',
        desc: 'Las campañas se configuran para que los interesados hagan clic y te hablen directamente a tu WhatsApp.'
      },
      {
        title: 'Reportes Claros de Resultados',
        desc: 'Sabrás exactamente cuántas personas vieron tus anuncios y cuántos contactos conseguiste cada semana.'
      }
    ],

    included: [
      'Estrategia mensual de contenido visual y videos cortos (Reels / TikToks)',
      'Diseño gráfico profesional de posts, carruseles e historias',
      'Redacción de copies persuasivos con llamadas a la acción claras',
      'Configuración y optimización de campañas de anuncios en Meta Ads (Facebook e Instagram)',
      'Configuración del píxel de seguimiento y audiencias personalizadas',
      'Reporte mensual de rendimiento, alcance y mensajes recibidos'
    ],

    process: [
      { step: '01', title: 'Definimos tu cliente objetivo', desc: 'Identificamos a quién le vendes, tu propuesta de valor y tu presupuesto de anuncios.' },
      { step: '02', title: 'Creamos el plan de contenido', desc: 'Diseñamos los artes y redactamos los textos del mes para tu aprobación.' },
      { step: '03', title: 'Lanzamos las campañas publicitarias', desc: 'Segmentamos tus anuncios para que lleguen a miles de personas interesadas.' },
      { step: '04', title: '¡Recibes prospectos y vendes!', desc: 'Los clientes empiezan a escribir a tu WhatsApp y nosotros optimizamos los anuncios continuamente.' }
    ],

    faq: [
      {
        q: '¿Cuánto debo invertir en publicidad pagada?',
        a: 'Se puede empezar desde presupuestos accesibles diarios y aumentarlo conforme veas los resultados en ventas.'
      },
      {
        q: '¿Yo tengo que aprobar los diseños antes de que se publiquen?',
        a: 'Sí, siempre te enviamos el calendario con todos los diseños y textos para tu visto bueno.'
      }
    ],

    accentColor: '#8B5CF6',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791014696/Publicidad_en_redes_sociales.mp4',
    poster: '/production/publicidad_redes.jpg',
    stat1: { value: '100%', label: 'Clientes reales' },
    stat2: { value: 'ROI', label: 'Enfoque en ventas' },
    tags: ['Meta Ads', 'Diseño de Contenido', 'Tráfico a WhatsApp', 'Reels & Posts'],
    url: '#',
    quoteMsg: 'Hola Luis, quiero cotizar el servicio de Manejo de Redes Sociales y Publicidad.'
  },
  {
    id: 'sistema-citas',
    num: '09',
    category: 'RESERVAS & AGENDAMIENTO',
    filterCategory: 'web',
    title: 'Sistema de Citas y Reservas Online',
    desc: 'Calendario digital interactivo donde tus clientes eligen día, hora y servicio disponible, confirmando su reserva de forma automática las 24 horas.',
    
    whatIs: 'Es una página de reservas moderna y rápida ideal para salones de belleza, spas, canchas de fútbol, estudios de fotografía, consultorías y profesionales. El cliente entra, selecciona el servicio que desea, escoge la hora disponible y la cita queda registrada al instante.',
    
    problemSolved: 'Se acabaron las conversaciones interminables de "¿qué horario tienes libre?", "¿puedes a las 4pm?", "no, mejor a las 5pm". El cliente ve los horarios libres en tiempo real y reserva en 15 segundos.',
    
    benefits: [
      {
        title: 'Ahorro de Horas en Coordinaciones',
        desc: 'El calendario se actualiza solo: cuando alguien reserva una hora, esa franja queda bloqueada automáticamente.'
      },
      {
        title: 'Confirmaciones Automáticas por WhatsApp',
        desc: 'El cliente recibe su comprobante de reserva con fecha, hora y ubicación en su WhatsApp.'
      },
      {
        title: 'Disponibilidad por Empleado o Cancha',
        desc: 'Permite que el cliente elija a su barbero, masajista, profesional o cancha favorita.'
      },
      {
        title: 'Cobro de Adelantos o Señales',
        desc: 'Opción para cobrar un depósito de garantía para asegurar que el cliente asista.'
      }
    ],

    included: [
      'Página de reservas personalizada con tu logo, colores y fotos',
      'Calendario inteligente con bloqueo automático de horarios ocupados',
      'Configuración de servicios con duración, precios y personal asignado',
      'Avisos de confirmación inmediatos por WhatsApp y correo electrónico',
      'Panel de control para ver y modificar la agenda del día',
      'Integración opcional con Google Calendar y pasarelas de pago',
      'Diseño ultrarrápido y adaptado a celulares'
    ],

    process: [
      { step: '01', title: 'Cargamos tus servicios y horarios', desc: 'Configuramos qué servicios ofreces, cuánto duran y tus horas de atención.' },
      { step: '02', title: 'Personalizamos el diseño', desc: 'Dejamos la página con tu imagen de marca, logotipo y fotos de tus trabajos.' },
      { step: '03', title: 'Conectamos WhatsApp y recordatorios', desc: 'Configuramos los mensajes automáticos de confirmación para tus clientes.' },
      { step: '04', title: '¡Pégala en tu biografía!', desc: 'Colocas el enlace en tu Instagram, TikTok y WhatsApp para recibir reservas automáticas.' }
    ],

    faq: [
      {
        q: '¿Qué pasa si tengo que cancelar o mover una cita?',
        a: 'Desde tu panel de administrador puedes reprogramar o cancelar cualquier cita en un solo clic y el cliente será avisado.'
      },
      {
        q: '¿Puedo bloquear días feriados o vacaciones?',
        a: 'Sí, puedes bloquear días completos o franjas horarias cuando no vayas a atender.'
      }
    ],

    accentColor: '#EC4899',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791014719/SISTEMA_DE_CITAS_FULL.mp4',
    poster: '/production/sistema_citas_preview.jpg',
    stat1: { value: '15 seg', label: 'Reserva rápida' },
    stat2: { value: '24/7', label: 'Sin esperas' },
    tags: ['Autoservicio', 'WhatsApp Automático', 'Google Calendar', 'Para Celulares'],
    url: '#',
    quoteMsg: 'Hola Luis, me interesa cotizar el Sistema de Citas y Reservas Online.'
  },
  {
    id: 'sistema-colegios',
    num: '10',
    category: 'EDUCACIÓN & COLEGIOS',
    filterCategory: 'web',
    title: 'Sistema de Gestión para Colegios y Academias',
    desc: 'Plataforma educativa integral para colegios, institutos y academias con control de matrículas, notas, asistencia y comunicación directa con padres de familia.',
    
    whatIs: 'Es un portal web moderno y seguro para directores, profesores, alumnos y padres de familia. Permite registrar asistencias con un clic, publicar calificaciones, enviar circulares oficiales, controlar el pago de pensiones y compartir material de clase.',
    
    problemSolved: 'Elimina las libretas de notas en papel, las listas de asistencia manuales y los reclamos de padres desinformados. Todo el avance académico y administrativo está disponible en internet de forma transparente y ordenada.',
    
    benefits: [
      {
        title: 'Acceso para Padres de Familia',
        desc: 'Los padres consultan desde su celular las notas de sus hijos, tardanzas, faltas y comunicados escolares.'
      },
      {
        title: 'Registro Rápido de Notas y Asistencia',
        desc: 'Los profesores ingresan calificaciones y asistencias en segundos, generando libretas de notas automáticas.'
      },
      {
        title: 'Control de Pensiones y Matrículas',
        desc: 'Reporte claro de qué familias están al día y quiénes tienen pensiones pendientes, evitando fugas de dinero.'
      },
      {
        title: 'Comunicados Oficiales sin Papel',
        desc: 'Envía avisos de reuniones, eventos y circulares directamente a los teléfonos de los padres.'
      }
    ],

    included: [
      'Portal web seguro con perfiles diferenciados: Director, Docente, Alumno y Padre',
      'Módulo de matrículas escolares y asignación de grados/secciones',
      'Registro de calificaciones por periodos (bimestres/trimestres) con libreta en PDF',
      'Control diario de asistencia y tardanzas',
      'Módulo de pensiones con estados de cuenta por alumno',
      'Muro de anuncios escolares y tareas descargables',
      'Capacitación completa para directores y profesores'
    ],

    process: [
      { step: '01', title: 'Reunión de estructura educativa', desc: 'Identificamos los niveles (Inicial, Primaria, Secundaria), grados y secciones de tu institución.' },
      { step: '02', title: 'Configuración de criterios de notas', desc: 'Adaptamos las escalas de calificación (letras o números) y periodos escolares.' },
      { step: '03', title: 'Carga de alumnos y docentes', desc: 'Subimos la nómina escolar y generamos los usuarios y contraseñas de acceso.' },
      { step: '04', title: 'Capacitación y lanzamiento', desc: 'Entrenamos al personal docente y dejamos el colegio operando de forma 100% digital.' }
    ],

    faq: [
      {
        q: '¿Los padres pueden ver las notas de otros alumnos?',
        a: 'No, cada padre ingresa con su propia clave privada y solo puede ver la información de sus propios hijos.'
      },
      {
        q: '¿Se pueden imprimir las libretas de notas oficiales?',
        a: 'Sí, el sistema genera las libretas oficiales con un formato limpio listas para imprimir o enviar por PDF.'
      }
    ],

    accentColor: '#6366F1',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1791015766/colegio.mp4',
    poster: '/production/colegio_preview.jpg',
    stat1: { value: '100%', label: 'Control Escolar' },
    stat2: { value: 'Cero', label: 'Uso de papel' },
    tags: ['Libretas PDF', 'Control Pensiones', 'Portal de Padres', 'Asistencia Diaria'],
    url: '#',
    quoteMsg: 'Hola Luis, quiero cotizar el Sistema de Gestión para Colegios / Academias.'
  }
]

export function getServiceById(id) {
  return SERVICES_DATA.find((s) => s.id === id) || null
}

export function getAllServices() {
  return SERVICES_DATA
}
