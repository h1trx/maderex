# 📘 Documentación del Archivo JSON - siteConfig.json

## 🎯 Propósito
El archivo `src/config/siteConfig.json` es el corazón de la configuración del sitio web MaderexTK. Contiene toda la información, textos, imágenes, enlaces y configuraciones que se muestran en el sitio web.

---

## 📋 Estructura Completa y Uso

### 🏢 `siteInfo` - Información General del Sitio
**Ubicación en el código:** Usado en múltiples componentes

```json
{
  "siteInfo": {
    "name": "MaderexTK International",      // Nombre completo de la empresa
    "nameShort": "MaderexTK",               // Nombre corto
    "slogan": "INTERNACIONAL",              // Slogan/subtítulo
    "description": "Descripción...",        // Descripción principal
    "year": "2025",                         // Año para copyright
    "experience": {
      "years": 29,                          // Años de experiencia
      "sustainability": 100                 // Porcentaje de sostenibilidad
    }
  }
}
```

**📍 Dónde se usa:**
- **Footer.jsx**: `{siteInfo.year} {siteInfo.nameShort}` para el copyright
- **Aboutus.jsx**: `siteInfo.experience.years` y `siteInfo.experience.sustainability` para estadísticas animadas
- **Formulario.jsx**: `siteInfo.name` en el alt del logo
- **Main.jsx**: `hero.title` y `hero.subtitle` en el hero section
- **About.jsx**: Referencia general para alt texts

---

### 🎨 `logos` - Logos de la Empresa
**Ubicación en el código:** Componentes que muestran logos

```json
{
  "logos": {
    "main": "URL_LOGO_PRINCIPAL",           // Logo principal (transparente)
    "withText": "URL_LOGO_CON_TEXTO"        // Logo con texto incluido
  }
}
```

**📍 Dónde se usa:**
- **Main.jsx**: `logos.main` en la sección hero principal
- **Footer.jsx**: `logos.withText` en el footer
- **Formulario.jsx**: `logos.withText` en el formulario de contacto
- **Aboutus.jsx**: `logos.main` en la página sobre nosotros

---

### 📞 `contact` - Información de Contacto
**Ubicación en el código:** Header, Footer y componentes de contacto

```json
{
  "contact": {
    "phone": {
      "main": "573127093619",               // Teléfono principal
      "secondary": "573104018597",          // Teléfono secundario
      "local": "(604)7890236"               // Teléfono local
    },
    "email": "info@maderextk.com",          // Email principal
    "whatsapp": {
      "exportQuote": "URL_WHATSAPP_EXPORT", // WhatsApp para exportaciones
      "sawmillQuote": "URL_WHATSAPP_SAWMILL" // WhatsApp para aserrío
    }
  }
}
```

**📍 Dónde se usa:**
- **Header.jsx**: `whatsapp.exportQuote` en el ícono de WhatsApp del header
- **Footer.jsx**: `phone.local` y `email` en los enlaces de contacto
- **Hook useContact()**: Proporciona todos estos datos a otros componentes

---

### 🌐 `socialMedia` - Redes Sociales
**Ubicación en el código:** Header y Footer

```json
{
  "socialMedia": {
    "facebook": "https://www.facebook.com/profile.php?id=61552174737475",
    "instagram": "https://www.instagram.com/maderextkoficial",
    "tiktok": "https://www.tiktok.com/@maderextkinternat",
    "twitter": "https://x.com/MaderexI57271"
  }
}
```

**📍 Dónde se usa:**
- **Header.jsx**: Enlaces en los íconos de redes sociales del header
- **Footer.jsx**: Enlaces en los íconos de redes sociales del footer
- **Hook useContact()**: Distribuye estos enlaces a los componentes

---

### 🧭 `navigation` - Navegación del Sitio
**Ubicación en el código:** Header y Footer

```json
{
  "navigation": {
    "main": [                               // Navegación principal del header
      {
        "id": "home",
        "label": "Home",                    // Texto que se muestra
        "type": "scroll",                   // Tipo de navegación
        "target": "home"                    // ID del elemento target
      }
    ],
    "footer": [                             // Navegación del footer
      {
        "label": "Home",
        "type": "scroll",
        "target": "home"
      }
    ]
  }
}
```

**📍 Dónde se usa:**
- **Header.jsx**: `navigation.main` para crear el menú principal
- **Footer.jsx**: `navigation.footer` para los enlaces del footer
- **Hook useNavigation()**: Proporciona los datos de navegación

---

### 🎬 `hero` - Sección Hero Principal
**Ubicación en el código:** Main.jsx (sección principal del inicio)

```json
{
  "hero": {
    "video": "URL_VIDEO_FONDO",             // Video de fondo de la sección hero
    "title": "MADEREX TK",                  // Título principal
    "subtitle": "INTERNACIONAL",            // Subtítulo
    "description": "Descripción completa..." // Descripción del negocio
  }
}
```

**📍 Dónde se usa:**
- **Main.jsx**: 
  - `hero.video` como src del video de fondo
  - `hero.title` dividido para mostrar "MADEREX" y "TK"
  - `hero.subtitle` como "INTERNACIONAL"
  - `hero.description` como texto descriptivo principal

---

### 🛠️ `services` - Servicios de la Empresa
**Ubicación en el código:** Main.jsx (carousel de servicios)

```json
{
  "services": [
    {
      "id": "store",                        // ID único del servicio
      "title": "Store",                     // Nombre del servicio
      "description": "Descripción...",      // Descripción del servicio
      "background": "URL_IMAGEN_FONDO",     // Imagen de fondo del slide
      "icon": "GiHandTruck",                // Nombre del ícono (string)
      "route": "https://store.maderextk.com", // URL o ruta
      "type": "external",                   // Tipo: "external" o "route"
      "button": {
        "text": "Ir a la tienda"            // Texto del botón
      }
    }
  ]
}
```

**📍 Dónde se usa:**
- **Main.jsx**: 
  - Crea slides dinámicos del carousel
  - `services[].background` para imagen de fondo de cada slide
  - `services[].title` y `services[].description` para contenido
  - `services[].icon` para mostrar íconos en la navegación
  - `services[].button.text` para el texto de los botones
  - `services[].route` y `services[].type` para la navegación
- **Hook useServices()**: Proporciona acceso a los servicios

---

### 📖 `about` - Sección Sobre Nosotros
**Ubicación en el código:** About.jsx y Aboutus.jsx

```json
{
  "about": {
    "home": {                               // Contenido para la página principal
      "text": "Más de 25 años cultivando Madera\\nTECA de forma sostenible.",
      "button": "Conocenos"
    },
    "page": {                               // Contenido para la página completa
      "whoWeAre": {
        "title": "¿Quienes Somos?",
        "description": "Descripción completa..."
      },
      "mission": {
        "title": "Nuestra Misión",
        "description": "Descripción de la misión...",
        "image": "URL_IMAGEN"
      },
      "vision": {
        "title": "Nuestra Visión", 
        "description": "Descripción de la visión...",
        "image": "URL_IMAGEN"
      },
      "partners": {
        "title": "Nuestros Aliados",
        "logos": ["URL_LOGO_1", "URL_LOGO_2"]
      }
    }
  }
}
```

**📍 Dónde se usa:**
- **About.jsx**: `about.home.text` y `about.home.button` para la sección en la página principal
- **Aboutus.jsx**: 
  - `about.page.whoWeAre` para la sección "¿Quiénes Somos?"
  - `about.page.mission` para la sección de misión (título, descripción e imagen)
  - `about.page.vision` para la sección de visión (título, descripción e imagen)
  - `about.page.partners` para los logos de socios

---

### 📁 `projects` - Proyectos de la Empresa
**Ubicación en el código:** Projects.jsx

```json
{
  "projects": [
    {
      "name": "GHL - Desktop",              // Nombre del proyecto
      "description": "Descripción detallada...", // Descripción del proyecto
      "image": "URL_IMAGEN"                 // Imagen del proyecto
    }
  ]
}
```

**📍 Dónde se usa:**
- **Projects.jsx**: 
  - Renderiza cada proyecto dinámicamente
  - `projects[].name` para el título
  - `projects[].description` para la descripción
  - `projects[].image` para la imagen (ahora habilitada)
- **Hook useProjects()**: Proporciona acceso a los proyectos

---

### 📄 `pages` - Configuración de Páginas Específicas
**Ubicación en el código:** Páginas individuales (Exports, Aserrio, Buenvivir)

```json
{
  "pages": {
    "exports": {
      "hero": {
        "title": "Su Socio En Madera de Excelencia",
        "description": "Descripción..."
      },
      "sections": [                         // Secciones de contenido
        {
          "title": "Compromiso con el Cliente",
          "description": "Descripción...",
          "images": ["URL_IMG_1", "URL_IMG_2"],
          "layout": "text-left"             // Layout de la sección
        }
      ],
      "finalMessage": {
        "title": "Nuestro Compromiso",
        "content": "Mensaje final..."
      }
    }
  }
}
```

**📍 Dónde se usa:**
- **Exports.jsx** (cuando se modularice): `pages.exports` para toda la página
- **Aserrio.jsx** (cuando se modularice): `pages.sawmill` para toda la página  
- **Buenvivir.jsx** (cuando se modularice): `pages.buenvivir` para toda la página

---

### 📝 `contactForm` - Configuración del Formulario
**Ubicación en el código:** Formulario.jsx

```json
{
  "contactForm": {
    "title": "FORMULARIO DE\\nCONTACTO",    // Título del formulario
    "fields": [                             // Campos dinámicos
      {
        "name": "name",                     // Nombre del campo
        "label": "Nombres",                 // Etiqueta visible
        "type": "text",                     // Tipo de input
        "placeholder": "Juan Camilo",       // Placeholder
        "required": true                    // Si es obligatorio
      }
    ],
    "submitText": "Enviar",                 // Texto del botón
    "successMessage": "¡Gracias por tu mensaje!...", // Mensaje de éxito
    "backgroundVideo": "URL_VIDEO"          // Video de fondo
  }
}
```

**📍 Dónde se usa:**
- **Formulario.jsx**:
  - `contactForm.title` para el título (maneja saltos de línea)
  - `contactForm.fields` para generar campos dinámicamente
  - `contactForm.submitText` para el texto del botón
  - `contactForm.successMessage` para el mensaje de confirmación
  - `contactForm.backgroundVideo` para el video de fondo

---

### 🗺️ `map` - Configuración del Mapa
**Ubicación en el código:** Map.jsx (cuando se modularice)

```json
{
  "map": {
    "title": "Nuestra Ubicación",
    "coordinates": {
      "lat": 6.2442,                        // Latitud
      "lng": -75.5812                       // Longitud
    }
  }
}
```

**📍 Dónde se usa:**
- **Map.jsx** (pendiente de modularizar): Para mostrar la ubicación en el mapa

---

## 🔧 Hooks Disponibles para Acceder al JSON

### `useSiteConfig()`
```javascript
const { siteInfo, logos, contact, services, hero, about } = useSiteConfig();
```

### `useServices()`
```javascript
const { services, getServiceById } = useServices();
```

### `useNavigation()`
```javascript
const { mainNavigation, footerNavigation } = useNavigation();
```

### `useContact()`
```javascript
const { phone, email, whatsapp, socialMedia } = useContact();
```

### `useProjects()`
```javascript
const { projects, getProjectByName } = useProjects();
```

---

## 📝 Notas Importantes

### 🎨 **Iconos Dinámicos**
Los iconos se especifican como strings en el JSON (ej: `"GiHandTruck"`) y se renderizan usando el componente `DynamicIcon`.

**Iconos disponibles:**
- `"GiWoodCabin"` - Casas/Buenvivir
- `"GiWoodBeam"` - Aserrío
- `"GiHandTruck"` - Store/Tienda
- `"PiShippingContainerLight"` - Exports
- `"FaHome"` - Home

### 🔄 **Tipos de Navegación**
- `"scroll"` - Scroll suave a un elemento en la misma página
- `"route"` - Navegación a otra página usando React Router
- `"external"` - Enlace externo (nueva pestaña)

### 📱 **Saltos de Línea**
En los textos, usa `\\n` para saltos de línea que se renderizarán como `<br>` en el HTML.

---

## ✅ **Estado de Implementación**

| Componente | JSON Section | Estado |
|------------|--------------|---------|
| Header | `navigation.main`, `contact`, `socialMedia` | ✅ Implementado |
| Main | `hero`, `services` | ✅ Implementado |
| About | `about.home` | ✅ Implementado |
| Projects | `projects` | ✅ Implementado |
| Footer | `navigation.footer`, `contact`, `socialMedia`, `siteInfo` | ✅ Implementado |
| Formulario | `contactForm` | ✅ Implementado |
| Aboutus | `about.page`, `siteInfo` | ✅ Implementado |
| **Exports** | `pages.exports` | **✅ Implementado** |
| **Aserrio** | `pages.sawmill` | **✅ Implementado** |
| **Buenvivir** | `pages.buenvivir` | **✅ Implementado** |

### 🎉 **MODULARIZACIÓN COMPLETADA AL 100%**

**Todas las páginas y componentes están completamente modularizados:**
- ✅ **3 Páginas principales** modularizadas
- ✅ **Secciones dinámicas** cargadas desde JSON
- ✅ **Contenido completamente editable** desde configuración
- ✅ **Imágenes dinámicas** configurables
- ✅ **Layouts responsivos** desde JSON
- ✅ **Botones CTA** configurables
- ✅ **Mensajes finales** personalizables

---

¡Con esta documentación puedes entender exactamente dónde se usa cada parte del JSON y cómo modificar el contenido de tu sitio web! 🚀
