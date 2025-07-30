# Guía de Integración de Imagen - Doctora con Niño

## Descripción de la Imagen

La imagen muestra a una doctora sonriente examinando el brazo de un niño pequeño en una consulta médica. La escena transmite confianza, cuidado y profesionalismo médico.

## Opciones de Integración

### Opción 1: Usar la Imagen Real (Recomendado)

1. **La imagen real** ya está en el directorio `public/` con el nombre `medica_nene.jpeg`
2. **El componente Hero ya está configurado** para usar esta imagen
3. **La imagen se muestra automáticamente** en la sección hero de la landing page

### Opción 2: Usar el Componente Placeholder

Si no tienes la imagen real disponible, puedes usar el componente placeholder:

1. **Importa el componente alternativo** en tu página principal:

   ```tsx
   import HeroWithPlaceholder from "./components/HeroWithPlaceholder";
   ```

2. **Reemplaza el Hero original** con el placeholder:
   ```tsx
   <HeroWithPlaceholder />
   ```

## Características de la Integración

### ✅ Características Implementadas

- **Layout responsivo**: La imagen se adapta a diferentes tamaños de pantalla
- **Animaciones suaves**: La imagen aparece con una animación elegante
- **Tarjeta flotante**: Muestra estadísticas de pacientes atendidos
- **Gradiente overlay**: Mejora la legibilidad del texto sobre la imagen
- **Optimización SEO**: Alt text descriptivo para accesibilidad

### 🎨 Elementos Visuales

- **Imagen principal**: Doctora examinando al niño
- **Tarjeta de estadísticas**: "10,000+ Pacientes atendidos"
- **Badge de confianza**: "100% Confiable" (en versión placeholder)
- **Sombras y efectos**: Profundidad visual con shadow-2xl

## Especificaciones Técnicas

### Tamaño de Imagen Recomendado

- **Ancho**: 800px - 1200px
- **Alto**: 600px - 800px
- **Formato**: JPG o WebP
- **Peso**: Máximo 500KB para optimización

### Estilos CSS Aplicados

```css
.hero-image {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  min-height: 500px;
  object-fit: cover;
}
```

## Ubicación de Archivos

```
landing-page/
├── public/
│   ├── medica_nene.jpeg            # Imagen de doctora con niño (ya integrada)
│   └── doctora_mobile.jpeg         # Interfaz de chat móvil (ya integrada)
├── src/
│   └── components/
│       ├── Hero.tsx                # Componente principal con ambas imágenes
│       ├── Agents.tsx              # Sección de agentes con chat preview
│       ├── Features.tsx            # Sección de características con imagen médica
│       ├── HeroWithPlaceholder.tsx # Versión alternativa con placeholder
│       ├── HeroImage.tsx           # Componente de imagen placeholder
│       └── ChatPreview.tsx         # Componente de vista previa de chat
```

## Personalización

### Cambiar la Imagen

Para usar una imagen diferente:

1. Reemplaza `doctor-patient.jpg` en el directorio `public/`
2. O modifica la ruta en `Hero.tsx` línea 118:
   ```tsx
   src = "/tu-nueva-imagen.jpg";
   ```

### Modificar el Alt Text

Cambia el texto alternativo en `Hero.tsx` línea 119:

```tsx
alt = "Tu descripción personalizada de la imagen";
```

### Ajustar el Tamaño

Modifica el `minHeight` en `Hero.tsx` línea 121:

```tsx
style={{ minHeight: "600px" }}  // Cambia el valor según necesites
```

## Beneficios de la Integración

1. **Confianza visual**: La imagen transmite profesionalismo médico
2. **Conexión emocional**: Muestra el lado humano de la atención médica
3. **Mejora la conversión**: Las imágenes relevantes aumentan el engagement
4. **SEO mejorado**: Alt text descriptivo ayuda con el posicionamiento
5. **Accesibilidad**: Descripción clara para lectores de pantalla

## Notas Importantes

- **Derechos de autor**: Asegúrate de tener los derechos para usar la imagen
- **Optimización**: Comprime la imagen para mejorar los tiempos de carga
- **Backup**: Mantén una copia de la imagen original
- **Testing**: Prueba la imagen en diferentes dispositivos y navegadores

## Soporte

Si necesitas ayuda con la integración o personalización, consulta:

- La documentación de Next.js para optimización de imágenes
- Los estilos CSS en `globals.css` para personalización adicional
- El componente `HeroImage.tsx` para entender la estructura del placeholder
