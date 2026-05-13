# Design Notes

## Referencia Visual

La direccion visual toma como referencia una estetica premium automotriz inspirada en el briefing de `FirstIteration.md.txt` y en la referencia BMW indicada por el usuario. No se copiara marca, logotipo, textos ni identidad de BMW.

## Adaptacion a CarGlow

CarGlow debe transmitir precision, limpieza, brillo, confianza y comodidad a domicilio. El objetivo de conversion principal es reservar por WhatsApp.

## Tokens Iniciales

- Fondo principal: negro premium y neutrales oscuros.
- Texto: blanco y grises claros.
- Acento: azul premium/electrico para CTA.
- Bordes: blanco con baja opacidad.
- Espaciado: generoso, con composiciones limpias.

## Principios UI

- Mobile first.
- CTA visible y repetido sin ser invasivo.
- Imagenes reales cuando existan; placeholders claros mientras no haya fotos.
- Nada de claims no verificables.
- Accesibilidad y contraste por defecto.

## Decisiones Iniciales

- Astro para rendimiento y coste bajo de despliegue estatico.
- Tailwind CSS v4 por velocidad de iteracion visual.
- Sin React hasta que exista una interaccion real que lo justifique.
