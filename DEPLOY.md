# Deploy

## Opcion Recomendada: Cloudflare Pages

Cloudflare Pages es la opcion recomendada para coste inicial 0 y despliegue estatico automatico.

### Requisitos Previos

- Cuenta de GitHub con el repositorio `CarGlow`.
- Cuenta de Cloudflare.
- Rama `bootstrap` protegida o usada como rama de produccion.
- PRs mergeadas a `bootstrap` desde GitHub.

### Configuracion Inicial En Cloudflare

1. Entra en `https://dash.cloudflare.com/`.
2. Crea cuenta o inicia sesion.
3. En el menu lateral, entra en `Workers & Pages`.
4. Pulsa `Create application`.
5. Selecciona `Pages`.
6. Pulsa `Connect to Git`.
7. Autoriza Cloudflare Pages para acceder a GitHub.
8. Selecciona el repositorio `Alejandrocabe2002/CarGlow`.
9. Elige la rama de produccion: `bootstrap`.
10. Configura el proyecto:
    - Project name: `carglow` o `carglow-frontend`.
    - Framework preset: `Astro`.
    - Build command: `npm run build`.
    - Build output directory: `dist`.
    - Root directory: dejar vacio o `/`.
11. Variables de entorno: no hay variables obligatorias por ahora.
12. Pulsa `Save and Deploy`.

### CI/CD Automatico

Una vez conectado el repositorio con Cloudflare Pages:

- Cada merge a `bootstrap` dispara un nuevo despliegue de produccion.
- Cada PR puede generar preview deployments si Cloudflare lo mantiene activado.
- GitHub Actions ejecuta `npm ci` y `npm run build` en PRs hacia `bootstrap` y pushes a `bootstrap`.

El pipeline actual esta en `.github/workflows/ci.yml`.

### Flujo Recomendado

1. Crear rama de feature.
2. Hacer commit y push de la rama.
3. Abrir PR manual en GitHub.
4. Esperar a que pase `CI / Build Astro site`.
5. Revisar visualmente el preview de Cloudflare Pages si esta disponible.
6. Mergear PR a `bootstrap`.
7. Cloudflare Pages redespliega produccion automaticamente.
8. Verificar la URL publica.

### Dominio Propio

Cuando exista dominio:

1. Entrar en el proyecto de Cloudflare Pages.
2. Ir a `Custom domains`.
3. Pulsar `Set up a custom domain`.
4. Introducir el dominio o subdominio.
5. Seguir las instrucciones DNS de Cloudflare.
6. Esperar la emision automatica del certificado SSL.
7. Verificar HTTPS en produccion.

## Alternativa: Netlify

- Build command: `npm run build`.
- Publish directory: `dist`.
- Conectar repositorio desde GitHub.

## Alternativa Condicionada: Vercel

Vercel solo se usara si se confirma que el plan encaja con uso comercial o se acepta pasar a plan de pago si fuese necesario.

## Variables 

Actualmente no hay variables obligatorias. El numero de WhatsApp esta centralizado en `src/data/site.ts`.

## Validacion Previa

Antes de desplegar:

```bash
npm run build
```
