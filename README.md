# 🏢 MaderexTK - Sitio Web Corporativo

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)
[![Modularización](https://img.shields.io/badge/Modularización-100%25-success.svg)]()
[![Estado](https://img.shields.io/badge/Estado-Producción%20Ready-brightgreen.svg)]()

## 🌟 **Descripción**

Sitio web corporativo completamente modularizado para MaderexTK, empresa líder en productos madereros. Implementa una **arquitectura avanzada** donde todo el contenido se gestiona desde un archivo JSON centralizado, permitiendo actualizaciones sin modificar código.

## ✨ **Características Principales**

- 🎯 **Contenido 100% dinámico** desde configuración JSON
- 🧩 **Arquitectura modular** con componentes reutilizables  
- 🎣 **5 hooks personalizados** para lógica específica
- 📱 **Responsive design** optimizado
- ⚡ **Performance optimizada** con lazy loading
- 📝 **Formulario dinámico** con validación
- 💬 **Integración WhatsApp** para comunicación directa
- 🔍 **SEO optimizado** con meta tags dinámicos

## 🛠️ **Tecnologías**

- **React 18** + **Vite** - Frontend moderno
- **React Router DOM** - Navegación SPA
- **React Icons** - Iconografía dinámica  
- **EmailJS** - Formularios sin backend
- **CSS3** - Estilos y animaciones

## 🚀 **Inicio Rápido**

### **Prerequisitos**
- Node.js 16+
- npm o yarn

### **Instalación**

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/redesing-maderex.git
cd redesing-maderex

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# Ejecutar en desarrollo
npm run dev
```

### **Scripts Disponibles**

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Linting del código
```

## 📁 **Estructura del Proyecto**

```
src/
├── components/           # Componentes React
│   ├── common/
│   │   └── DynamicIcon.jsx    # Iconos dinámicos
│   ├── Header.jsx            # Navegación principal
│   ├── Main.jsx              # Hero + servicios
│   ├── About.jsx             # Sección "Acerca de"
│   ├── Projects.jsx          # Showcase proyectos
│   ├── Footer.jsx            # Pie de página
│   └── Formulario.jsx        # Formulario contacto
├── pages/               # Páginas del sitio
│   ├── Aboutus.jsx          # Página "Nosotros"
│   ├── Exports.jsx          # Servicios exportación
│   ├── Aserrio.jsx          # Servicios aserrío
│   └── Buenvivir.jsx        # Productos construcción
├── hooks/               # Hooks personalizados
│   └── useSiteConfig.js     # Hook principal + 4 más
├── config/              # Configuración
│   └── siteConfig.json      # ⭐ CONFIGURACIÓN PRINCIPAL
└── styles/              # Estilos CSS
```

## ⚙️ **Configuración JSON**

El corazón del sistema es `src/config/siteConfig.json`, que contiene **toda** la configuración del sitio:

```json
{
  "siteInfo": {
    "name": "Maderex TK",
    "description": "Empresa líder en productos madereros",
    "yearsOfExperience": 25
  },
  "contact": {
    "phone": "+506 2222 2222",
    "whatsapp": "+506 8888 8888",
    "email": "info@maderextk.com"
  },
  "services": [
    {
      "id": "store",
      "title": "Store",
      "description": "Venta de productos madereros",
      "icon": "FaStore",
      "route": "#services"
    }
  ],
  "pages": {
    "exports": { /* configuración página */ },
    "sawmill": { /* configuración página */ },
    "buenvivir": { /* configuración página */ }
  }
}
```

## 🎯 **Funcionalidades**

### **🔧 Componentes Principales**
- ✅ **Header** - Navegación + contacto
- ✅ **Main** - Hero + carousel servicios  
- ✅ **About** - Información empresa
- ✅ **Projects** - Proyectos destacados
- ✅ **Footer** - Links + redes sociales
- ✅ **Formulario** - Contacto con validación

### **📄 Páginas Completas**
- ✅ **Aboutus** - Historia y misión
- ✅ **Exports** - Servicios exportación
- ✅ **Aserrio** - Procesamiento madera
- ✅ **Buenvivir** - Productos construcción

### **🎣 Hooks Personalizados**
- ✅ **useSiteConfig()** - Configuración general
- ✅ **useServices()** - Manejo servicios
- ✅ **useNavigation()** - Control navegación
- ✅ **useContact()** - Información contacto
- ✅ **useProjects()** - Administración proyectos

## 📝 **Guía de Uso**

### **Para Editores de Contenido**

#### Cambiar textos generales:
```json
{
  "siteInfo": {
    "name": "Nuevo nombre",
    "description": "Nueva descripción"
  }
}
```

#### Agregar nuevo servicio:
```json
{
  "services": [
    {
      "id": "nuevo-servicio",
      "title": "Título Servicio",
      "description": "Descripción detallada",
      "icon": "IconName",
      "route": "/ruta"
    }
  ]
}
```

#### Actualizar contacto:
```json
{
  "contact": {
    "phone": "+506 nuevo-numero",
    "email": "nuevo@email.com"
  }
}
```

### **Para Desarrolladores**

#### Usar configuración en componente:
```jsx
import { useSiteConfig } from '../hooks/useSiteConfig';

function MiComponente() {
  const config = useSiteConfig();
  const { siteInfo, services } = config;
  
  return (
    <div>
      <h1>{siteInfo.name}</h1>
      {/* Renderizar servicios dinámicamente */}
    </div>
  );
}
```

## 🚀 **Deployment**

### **Build para Producción**
```bash
npm run build
```

### **Variables de Entorno Requeridas**
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### **Deployment en Netlify/Vercel**
1. Conectar repositorio GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Configurar variables de entorno

## 📊 **Estado del Proyecto**

### **✅ Completado (100%)**
- [x] Modularización completa de componentes
- [x] Todas las páginas dinámicas desde JSON
- [x] 5 hooks personalizados funcionando
- [x] Formulario con validación y EmailJS
- [x] Navegación inteligente (scroll/route/external)
- [x] Iconos dinámicos desde strings
- [x] Responsive design optimizado
- [x] Documentación completa

### **🔮 Futuras Mejoras**
- [ ] Sistema multiidioma (i18n)
- [ ] Integración con CMS
- [ ] PWA capabilities
- [ ] Sistema de blog
- [ ] Analytics avanzado

## 📚 **Documentación**

- 📖 **[Documentación Completa](DOCUMENTACION_COMPLETA.md)** - Guía detallada
- 📋 **[Documentación JSON](DOCUMENTACION_JSON.md)** - Estructura del JSON
- 🎉 **[Estado Modularización](MODULARIZACION_COMPLETA_100.md)** - Progreso 100%

## 🔧 **Arquitectura**

### **Principios Implementados**
1. **Single Source of Truth** - Todo el contenido en JSON
2. **Separación de Responsabilidades** - Contenido/Lógica/Presentación
3. **Componentes Reutilizables** - DRY principle
4. **Hooks Personalizados** - Lógica compartida
5. **Tipado Dinámico** - Navegación inteligente

### **Flujo de Datos**
```
siteConfig.json → useSiteConfig() → Componentes → UI
```

### **Ventajas de la Arquitectura**
- ✅ **Actualizaciones sin código** - Solo editar JSON
- ✅ **Mantenimiento fácil** - Un punto de verdad
- ✅ **Escalabilidad** - Agregar contenido fácilmente  
- ✅ **Consistencia** - Misma estructura en todo el sitio
- ✅ **Preparado para APIs** - Fácil migración

## 🐛 **Solución de Problemas**

### **Iconos no aparecen**
```javascript
// Verificar nombre exacto en DynamicIcon.jsx
"icon": "FaStore" // ✅ Correcto
"icon": "fa-store" // ❌ Incorrecto
```

### **Navegación no funciona**
```json
// Verificar tipo correcto
{
  "type": "scroll",    // Para elementos en la misma página
  "type": "route",     // Para rutas React Router
  "type": "external"   // Para enlaces externos
}
```

### **Formulario no envía**
```bash
# Verificar variables de entorno
echo $VITE_EMAILJS_SERVICE_ID
echo $VITE_EMAILJS_TEMPLATE_ID
echo $VITE_EMAILJS_PUBLIC_KEY
```

## 📈 **Performance**

- ⚡ **Lighthouse Score**: 90+ en todas las métricas
- 🔄 **Lazy Loading**: Componentes e imágenes
- 📦 **Bundle Size**: Optimizado con Vite
- 🎯 **Core Web Vitals**: Cumple estándares

## 🤝 **Contribuir**

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 **Licencia**

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 🙋‍♂️ **Soporte**

- 📧 **Email**: desarrollo@maderextk.com
- 📱 **WhatsApp**: +506 8888 8888
- 🐛 **Issues**: [GitHub Issues](https://github.com/tu-usuario/redesing-maderex/issues)
- 📚 **Docs**: Ver documentación completa

---

## 🏆 **Logros del Proyecto**

### **🎯 Arquitectura de Clase Mundial**
- **100% Modularización** completada
- **Separación perfecta** contenido/código
- **5 hooks personalizados** especializados
- **Componentes reutilizables** en toda la app

### **🚀 Preparado para el Futuro**
- **API-ready** para migración a CMS
- **Multiidioma-ready** con estructura preparada
- **PWA-ready** para conversión a app
- **SEO-optimized** para posicionamiento

### **💼 Valor Empresarial**
- **Actualizaciones instantáneas** sin programador
- **Costos de mantenimiento** mínimos  
- **Escalabilidad** garantizada
- **Base sólida** para crecimiento

---

**⭐ Si te gusta el proyecto, dale una estrella en GitHub!**

**📅 Actualizado:** Enero 2025 | **🔢 Versión:** 1.0.0 | **✅ Estado:** Producción Ready
