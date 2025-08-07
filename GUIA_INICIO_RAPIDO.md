# ⚡ MaderexTK - Guía de Inicio Rápido

## 🚀 **Setup en 5 Minutos**

### **1. Instalación Básica**
```bash
# Clonar y acceder
git clone https://github.com/tu-usuario/redesing-maderex.git
cd redesing-maderex

# Instalar dependencias
npm install
```

### **2. Configurar Variables de Entorno**
```bash
# Crear archivo .env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### **3. Ejecutar Proyecto**
```bash
npm run dev
# Abrir http://localhost:5173
```

## 🎯 **Edición Rápida de Contenido**

### **Cambiar Información Básica**
Editar `src/config/siteConfig.json`:

```json
{
  "siteInfo": {
    "name": "Tu Empresa",
    "description": "Tu descripción",
    "yearsOfExperience": 30
  },
  "contact": {
    "phone": "+506 tu-telefono",
    "whatsapp": "+506 tu-whatsapp",
    "email": "tu-email@empresa.com"
  }
}
```

### **Actualizar Servicios**
```json
{
  "services": [
    {
      "id": "mi-servicio",
      "title": "Mi Servicio",
      "description": "Descripción de mi servicio",
      "icon": "FaTools",
      "route": "#servicios"
    }
  ]
}
```

### **Cambiar Proyectos**
```json
{
  "projects": [
    {
      "name": "Mi Proyecto",
      "description": "Descripción del proyecto",
      "image": "/images/mi-proyecto.jpg"
    }
  ]
}
```

## 🔧 **Personalización Rápida**

### **Cambiar Logo**
```json
{
  "logos": {
    "main": "/images/tu-logo.png",
    "withText": "/images/tu-logo-con-texto.png"
  }
}
```

### **Actualizar Redes Sociales**
```json
{
  "socialMedia": {
    "facebook": "https://facebook.com/tu-empresa",
    "instagram": "https://instagram.com/tu-empresa",
    "tiktok": "https://tiktok.com/@tu-empresa"
  }
}
```

### **Modificar Navegación**
```json
{
  "navigation": {
    "main": [
      {
        "name": "Inicio",
        "path": "#home",
        "type": "scroll"
      },
      {
        "name": "Nosotros",
        "path": "/about",
        "type": "route"
      },
      {
        "name": "Contacto",
        "path": "https://wa.me/50688888888",
        "type": "external"
      }
    ]
  }
}
```

## 📱 **Formulario de Contacto**

### **Personalizar Campos**
```json
{
  "contactForm": {
    "title": "Contáctanos",
    "subtitle": "Envíanos tu mensaje",
    "fields": [
      {
        "name": "name",
        "type": "text",
        "placeholder": "Tu nombre completo",
        "required": true
      },
      {
        "name": "email",
        "type": "email",
        "placeholder": "tu@email.com",
        "required": true
      },
      {
        "name": "message",
        "type": "textarea",
        "placeholder": "Tu mensaje aquí...",
        "required": true
      }
    ],
    "submitButton": "Enviar Mensaje",
    "successMessage": "¡Mensaje enviado correctamente!"
  }
}
```

## 🎨 **Iconos Disponibles**

### **Para Servicios**
```json
{
  "icon": "FaStore",      // Tienda
  "icon": "GiWoodCabin",  // Cabaña de madera
  "icon": "FaTools",      // Herramientas
  "icon": "FaTruck",      // Camión/Transporte
  "icon": "FaLeaf",       // Hoja/Sostenibilidad
  "icon": "FaHome",       // Casa
  "icon": "FaCog",        // Configuración
  "icon": "FaHeart"       // Corazón
}
```

## 🏗️ **Agregar Nueva Página**

### **1. Crear configuración en JSON**
```json
{
  "pages": {
    "mi-nueva-pagina": {
      "hero": {
        "title": "Mi Nueva Página",
        "subtitle": "Subtítulo de la página",
        "description": "Descripción detallada...",
        "backgroundImage": "/images/hero-bg.jpg"
      },
      "sections": [
        {
          "title": "Primera Sección",
          "content": "Contenido de la primera sección...",
          "image": "/images/seccion1.jpg",
          "layout": "text-left"
        }
      ]
    }
  }
}
```

### **2. Crear componente de página**
```jsx
// src/pages/MiNuevaPagina.jsx
import { useSiteConfig } from '../hooks/useSiteConfig';

function MiNuevaPagina() {
  const config = useSiteConfig();
  const pageData = config.pages?.['mi-nueva-pagina'];

  return (
    <div>
      <section className="hero">
        <h1>{pageData.hero.title}</h1>
        <h2>{pageData.hero.subtitle}</h2>
        <p>{pageData.hero.description}</p>
      </section>
      
      {pageData.sections.map((section, index) => (
        <section key={index} className={`section ${section.layout}`}>
          <div className="text-content">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
          <img src={section.image} alt={section.title} />
        </section>
      ))}
    </div>
  );
}

export default MiNuevaPagina;
```

### **3. Agregar ruta en App.jsx**
```jsx
import MiNuevaPagina from './pages/MiNuevaPagina';

// En las rutas
<Route path="/mi-nueva-pagina" element={<MiNuevaPagina />} />
```

## 📦 **Build y Deployment**

### **Build Local**
```bash
npm run build
npm run preview  # Ver resultado
```

### **Deploy en Netlify**
1. Push a GitHub
2. Conectar repo en Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Configurar variables de entorno

### **Deploy en Vercel**
1. Push a GitHub
2. Importar proyecto en Vercel
3. Configurar variables de entorno
4. Deploy automático

## ⚡ **Tips de Performance**

### **Optimizar Imágenes**
```bash
# Usar formatos WebP
# Comprimir antes de subir
# Tamaños recomendados:
# - Hero: 1920x1080
# - Servicios: 800x600
# - Proyectos: 600x400
# - Logos: 200x200
```

### **Variables de Entorno EmailJS**
```bash
# Obtener en https://emailjs.com
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## 🐛 **Solución Rápida de Errores**

### **Error: Cannot read properties of undefined**
```javascript
// Verificar que siteConfig.json existe y es válido
// Verificar importación correcta del hook
import { useSiteConfig } from '../hooks/useSiteConfig';
```

### **Iconos no aparecen**
```javascript
// Verificar nombre exacto (case-sensitive)
"icon": "FaStore"  // ✅ Correcto
"icon": "fastore"  // ❌ Incorrecto
```

### **Formulario no funciona**
```bash
# Verificar variables de entorno
echo $VITE_EMAILJS_SERVICE_ID
echo $VITE_EMAILJS_TEMPLATE_ID
echo $VITE_EMAILJS_PUBLIC_KEY
```

### **Build falla**
```bash
# Limpiar y reinstalar
rm -rf node_modules
npm install
npm run build
```

## 📚 **Recursos Útiles**

- 🎨 **[React Icons](https://react-icons.github.io/)** - Buscar iconos
- 📧 **[EmailJS](https://emailjs.com/)** - Configurar formularios
- 🎯 **[JSON Validator](https://jsonlint.com/)** - Validar JSON
- 🖼️ **[TinyPNG](https://tinypng.com/)** - Comprimir imágenes

## 🆘 **Obtener Ayuda**

1. **Revisar documentación**: `DOCUMENTACION_COMPLETA.md`
2. **Verificar JSON**: Usar validador online
3. **Comprobar consola**: F12 → Console en navegador
4. **GitHub Issues**: Para reportar problemas

---

## 🎉 **¡Listo para Empezar!**

Con esta guía tienes todo lo necesario para personalizar tu sitio MaderexTK en minutos. El sistema de configuración JSON te permite hacer cambios rápidos sin tocar código.

**¡Ahora solo edita el JSON y ve los cambios al instante!** 🚀
