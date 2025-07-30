# HolaIA - Landing Page

Landing page moderna para HolaIA, un CRM médico inteligente con agentes de IA especializados en la gestión de citas por WhatsApp.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Responsive**: Optimizada para todos los dispositivos
- **SEO Optimizado**: Metadatos y estructura optimizada para motores de búsqueda
- **Accesibilidad**: Cumple con estándares de accesibilidad web
- **Performance**: Carga rápida y optimizada

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React con App Router
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Framework de CSS utility-first
- **Framer Motion**: Animaciones fluidas y profesionales
- **Lucide React**: Iconografía moderna y consistente

## 📦 Instalación

1. **Clonar el repositorio**:

```bash
git clone <repository-url>
cd landing-page
```

2. **Instalar dependencias**:

```bash
npm install
# o
yarn install
```

3. **Ejecutar en desarrollo**:

```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**:

```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
landing-page/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página principal
│   └── components/
│       ├── Header.tsx           # Navegación principal
│       ├── Hero.tsx             # Sección hero
│       ├── Features.tsx         # Características del producto
│       ├── Agents.tsx           # Agentes de IA
│       ├── Pricing.tsx          # Planes y precios
│       ├── Contact.tsx          # Formulario de contacto
│       └── Footer.tsx           # Pie de página
├── public/                      # Archivos estáticos
├── tailwind.config.ts           # Configuración de Tailwind
└── package.json
```

## 🎨 Componentes Principales

### Header

- Navegación responsive
- Logo y menú hamburguesa para móviles
- Botones de llamada a la acción

### Hero

- Mensaje principal impactante
- Estadísticas clave
- Botones de CTA principales
- Animaciones de entrada

### Features

- Grid de características principales
- Iconos y descripciones
- Sección de beneficios

### Agents

- Presentación de agentes de IA
- Especializaciones y capacidades
- Integración con WhatsApp

### Pricing

- Planes de precios
- Comparación de características
- FAQ integrado

### Contact

- Formulario de contacto
- Información de la empresa
- CTA de WhatsApp

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno si es necesario
3. Desplegar automáticamente

### Otros Proveedores

```bash
# Build para producción
npm run build

# Servir build
npm start
```

## 🎯 Personalización

### Colores

Los colores principales se pueden modificar en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Paleta de azules
  },
  medical: {
    // Colores específicos del sector médico
  }
}
```

### Contenido

- Textos: Modificar directamente en los componentes
- Imágenes: Reemplazar en la carpeta `public/`
- Enlaces: Actualizar en los componentes correspondientes

### Animaciones

Las animaciones se configuran en `tailwind.config.ts` y `globals.css`.

## 📱 Responsive Design

La landing page está optimizada para:

- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servir build de producción
npm run lint         # Linting con ESLint
```

## 📈 SEO y Performance

- **Meta tags** optimizados para redes sociales
- **Open Graph** configurado
- **Structured data** para mejor indexación
- **Lazy loading** de imágenes
- **Optimización de fuentes** con Next.js

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas:

- Email: hola@holaia.com
- WhatsApp: +1 (555) 123-4567

---

Desarrollado con ❤️ para revolucionar la atención médica con IA.
