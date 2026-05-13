# Deploy

## Opcion Recomendada: Cloudflare Pages

1. Subir el repositorio a GitHub.
2. Entrar en Cloudflare Pages.
3. Crear proyecto y conectar el repositorio.
4. Seleccionar framework preset: Astro.
5. Configurar build command: `npm run build`.
6. Configurar output directory: `dist`.
7. Desplegar.
8. Anadir dominio cuando exista.
9. Verificar la URL de produccion.

## Alternativa: Netlify

- Build command: `npm run build`.
- Publish directory: `dist`.
- Conectar repositorio desde GitHub.

## Alternativa Condicionada: Vercel

Vercel solo se usara si se confirma que el plan encaja con uso comercial o se acepta pasar a plan de pago si fuese necesario.

## Variables

Actualmente no hay variables obligatorias. El numero de WhatsApp esta centralizado en `src/data/site.ts` como placeholder.

## Validacion Previa

Antes de desplegar:

```bash
npm run build
```
