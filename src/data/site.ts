const WHATSAPP_NUMBER = '34XXXXXXXXX';
const WHATSAPP_MESSAGE = 'Hola, quiero reservar una limpieza para mi coche con CarGlow.';

export const site = {
  name: 'CarGlow',
  tagline: 'Detailing y limpieza premium de coches a domicilio en Madrid',
  location: 'Madrid',
  email: 'contacto@limpiamostucoche.com',
  whatsapp: {
    number: WHATSAPP_NUMBER,
    message: WHATSAPP_MESSAGE,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  },
  seo: {
    title: 'CarGlow | Limpieza de coches a domicilio en Madrid',
    description:
      'Servicio premium de limpieza y detailing de coches a domicilio en Madrid desde 40 euros. Reserva por WhatsApp.',
  },
} as const;
