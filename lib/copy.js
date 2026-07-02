// lib/copy.js
// TODO el texto visible de la landing vive aquí. Cero texto hardcodeado en componentes.
export const copy = {
  hero: {
    banner: "Recetario digital · Inovaris · Entrega inmediata",
    headline: {
      line1: "Comer con diabetes,",
      accent: "sin comer aburrido",
    },
    subheadline:
      "Más de 350 recetas fáciles y económicas, organizadas por comida del día y con información nutricional aproximada. Descárgalas hoy en tu celular y resuelve el menú de toda la semana en minutos.",
    cta: "Quiero mi recetario",
    priceNote: "Pago único de $99 MXN · entrega inmediata por correo",
    socialProof: "+350 recetas · desayunos, comidas, cenas, snacks y postres",
    timerHeading: "El precio de lanzamiento termina en:",
    timerLabels: { days: "días", hours: "horas", minutes: "min", seconds: "seg" },
    imageAlt:
      "Recetario «Recetas que Sí Puedo Comer» mostrado en una tablet y un libro impreso sobre una mesa de cocina con platillos saludables",
  },

  story: {
    eyebrow: "El problema de todos los días",
    headline: "“¿Y hoy qué cocino que sí pueda comer?”",
    paragraphs: [
      "Si vives con diabetes —o cocinas para alguien que la tiene— conoces esa pregunta de memoria. Aparece cada mañana, cada comida, cada cena.",
      "Al final terminas repitiendo los mismos tres platos de siempre… o comiendo algo aburrido y sin sabor solo porque “es lo que se puede”.",
      "No es por falta de ganas. Es por falta de opciones a la mano: recetas pensadas para ti, fáciles de hacer y con ingredientes que de verdad encuentras en el súper.",
    ],
    closingLine: "Eso es exactamente lo que resuelve este recetario.",
  },

  benefits: {
    eyebrow: "Por qué te va a servir",
    headline: "Lo que cambia cuando lo tienes en tu celular",
    items: [
      {
        title: "Resuelve el “¿hoy qué cocino?”",
        text: "Más de 350 recetas listas para toda la semana, organizadas por comida del día. Abres, eliges y cocinas.",
      },
      {
        title: "Date un gusto sin culpa",
        text: "Postres, snacks y antojos pensados para tu alimentación. Comer rico vuelve a ser parte del día.",
      },
      {
        title: "Ingredientes fáciles y económicos",
        text: "Nada raro ni caro: ingredientes comunes que encuentras en cualquier súper, con pasos simples.",
      },
    ],
  },

  features: {
    eyebrow: "Qué incluye",
    headline: "Un recetario completo, no una lista suelta de internet",
    items: [
      "Más de 350 recetas organizadas por comida: desayuno, comida, cena, snacks y postres.",
      "Información nutricional aproximada en cada receta, para que cocines con más claridad.",
      "Ingredientes comunes y económicos, fáciles de conseguir en México.",
      "Formato PDF: lo abres en el celular o la computadora e imprimes lo que quieras.",
      "Entrega inmediata: llega a tu correo y al área de miembros apenas terminas tu compra.",
      "Pensado para personas con diabetes y para quien cocina en casa para ellas.",
    ],
    imageAlt: "Receta de sopa de ejotes con frijol y nopales abierta en el celular, lista para cocinar",
  },

  carouselSection: {
    eyebrow: "Por dentro",
    headline: "Así se ve tu recetario",
    subheadline: "Recetas claras, con foto, ingredientes y pasos simples. Todo en un PDF que llevas a donde vayas.",
    images: ["/carousel/img-1.webp", "/carousel/img-2.webp", "/carousel/img-3.webp"],
    imageAlts: [
      "Cuadrícula de recetas saludables en una tablet, rodeada de ingredientes frescos del súper",
      "Receta abierta en el celular, lista para cocinar en casa",
      "Portada del recetario «Recetas que Sí Puedo Comer»",
    ],
    button: "Quiero mi recetario",
  },

  bonuses: {
    badge: "Incluido gratis hoy",
    headline: "3 bonos de regalo con tu recetario",
    items: [
      {
        title: "Guía de equivalencias e intercambios",
        text: "Cambia un ingrediente por otro sin perder el equilibrio del plato.",
      },
      {
        title: "Lista de súper inteligente",
        text: "Qué llevar para una semana de recetas, sin gastar de más.",
      },
      {
        title: "Mini-recetario de postres sin azúcar añadida",
        text: "Antojos y postres para darte un gusto con tranquilidad.",
      },
    ],
    footnote: "Los 3 bonos se entregan junto con el recetario, sin costo adicional.",
  },

  // Testimonios: NO se inventan. Se completan con reseñas reales tras la validación
  // (ver nota de entrega). Por eso esta sección no se renderiza todavía en page.js.
  testimonials: {
    headline: "Lo que dicen quienes ya cocinan distinto",
    items: [],
    note: "Pendiente: sustituir por testimonios reales de compradores tras la validación.",
  },

  finalCta: {
    headline: "Pruébalo sin riesgo durante 30 días",
    guaranteeText:
      "Tu compra está protegida por una garantía de satisfacción de 30 días. Si el recetario no es para ti, escribes y te devuelven tu dinero. Sin complicaciones.",
    bundleList: [
      "+350 recetas que sí puedes comer",
      "+ 3 bonos de regalo",
      "Entrega inmediata a tu correo",
    ],
    regularPriceLabel: "Precio regular:",
    regularPrice: "$249 MXN",
    offerPrice: "$99 MXN",
    urgencyText: "Precio de lanzamiento · pago único, sin suscripciones",
    usdNote: "≈ $5.65 USD · pago seguro internacional",
    button: "Quiero mi recetario ahora",
    imageAlt: "Recetario «Recetas que Sí Puedo Comer» en tablet y libro impreso",
  },

  faq: {
    headline: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo lo recibo?",
        a: "Al instante: tras tu compra llega a tu correo (y a tu biblioteca de Gumroad), en PDF, para descargar en el celular o la computadora.",
      },
      {
        q: "¿Por qué el cargo aparece en dólares?",
        a: "Nuestra plataforma de pago procesa de forma segura en USD, por eso tu banco podría mostrarlo como compra internacional. El monto es el mismo que ves aquí (~$99 MXN); solo cambia cómo lo registra tu banco.",
      },
      {
        q: "¿Necesito apps especiales?",
        a: "No. Es un PDF; lo abres en cualquier teléfono o computadora e imprimes lo que quieras.",
      },
      {
        q: "¿Las recetas son difíciles o caras?",
        a: "No. Ingredientes comunes y económicos que encuentras en cualquier súper, con pasos simples.",
      },
      {
        q: "¿Trae información nutricional?",
        a: "Sí, cada receta incluye información nutricional aproximada y orientativa.",
      },
      {
        q: "¿Es una dieta médica?",
        a: "No. Es un recetario de cocina; no sustituye la indicación de tu médico o nutriólogo.",
      },
    ],
  },

  closing: {
    eyebrow: "Empieza hoy",
    headline: "Deja de improvisar qué cocinar",
    text: "Más de 350 recetas pensadas para ti, listas para descargar en tu celular en los próximos minutos. Resuelve el menú de toda la semana por $99 MXN.",
    button: "Descargar mi recetario — $99 MXN",
    reassurance: "Entrega inmediata · garantía de 30 días · pago seguro (cobro internacional en USD, equivalente a $99 MXN)",
  },

  footer: {
    brand: "Inovaris",
    tagline: "Recetas que Sí Puedo Comer",
    disclaimer:
      "Este recetario tiene fines informativos y de cocina. No constituye consejo médico ni nutricional profesional, ni sustituye la valoración, diagnóstico o tratamiento de un profesional de la salud. La información nutricional es aproximada. Consulta siempre a tu médico o nutriólogo antes de hacer cambios en tu alimentación.",
    rights: "Todos los derechos reservados.",
  },

  metadata: {
    title: "Recetas que Sí Puedo Comer | +350 recetas para personas con diabetes",
    description:
      "Recetario digital con más de 350 recetas fáciles, económicas y con sabor, organizadas por comida del día. Entrega inmediata en PDF. $99 MXN.",
  },
};
