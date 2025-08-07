# Configuración Modular - MaderexTK

## Descripción

Este proyecto ahora cuenta con un sistema de configuración modular que permite gestionar todo el contenido, imágenes, textos, y configuraciones desde un archivo JSON centralizado. Esto facilita el mantenimiento, la actualización de contenido y la escalabilidad del proyecto.

## Estructura de Archivos

```
src/
├── config/
│   └── siteConfig.json          # Configuración centralizada
├── hooks/
│   └── useSiteConfig.js         # Hooks para acceder a la configuración
├── components/
│   ├── common/
│   │   └── DynamicIcon.jsx      # Componente para iconos dinámicos
│   ├── HeaderModular.jsx        # Ejemplo de Header modular
│   └── ProjectsModular.jsx      # Ejemplo de Projects modular
```

## Configuración JSON

El archivo `src/config/siteConfig.json` contiene toda la configuración del sitio organizizada en las siguientes secciones:

### Secciones Principales

- **siteInfo**: Información general del sitio (nombre, descripción, años de experiencia, etc.)
- **logos**: URLs de los logos principales
- **contact**: Información de contacto (teléfonos, email, WhatsApp)
- **socialMedia**: Enlaces de redes sociales
- **navigation**: Configuración de menús de navegación
- **hero**: Contenido de la sección hero
- **services**: Configuración de todos los servicios
- **about**: Contenido de la sección "Acerca de"
- **projects**: Lista de proyectos
- **pages**: Configuración específica para cada página (exports, sawmill, buenvivir)
- **contactForm**: Configuración del formulario de contacto
- **map**: Configuración del mapa

## Hooks Disponibles

### `useSiteConfig()`
Hook principal que proporciona acceso a toda la configuración:

```jsx
import { useSiteConfig } from '../hooks/useSiteConfig';

const MyComponent = () => {
  const { siteInfo, logos, contact, services } = useSiteConfig();
  
  return (
    <div>
      <h1>{siteInfo.name}</h1>
      <img src={logos.main} alt="Logo" />
    </div>
  );
};
```

### `useServices()`
Hook específico para servicios:

```jsx
import { useServices } from '../hooks/useSiteConfig';

const ServicesComponent = () => {
  const { services, getServiceById } = useServices();
  const exportService = getServiceById('exports');
  
  return (
    <div>
      {services.map(service => (
        <div key={service.id}>{service.title}</div>
      ))}
    </div>
  );
};
```

### `useNavigation()`
Hook para navegación:

```jsx
import { useNavigation } from '../hooks/useSiteConfig';

const NavComponent = () => {
  const { mainNavigation, footerNavigation } = useNavigation();
  
  return (
    <nav>
      {mainNavigation.map(item => (
        <a key={item.id} onClick={() => scrollTo(item.target)}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};
```

### `useContact()`
Hook para información de contacto:

```jsx
import { useContact } from '../hooks/useSiteConfig';

const ContactComponent = () => {
  const { phone, email, whatsapp, socialMedia } = useContact();
  
  return (
    <div>
      <p>Email: {email}</p>
      <p>Teléfono: {phone.main}</p>
      <a href={whatsapp.exportQuote}>Cotizar WhatsApp</a>
    </div>
  );
};
```

### `useProjects()`
Hook para proyectos:

```jsx
import { useProjects } from '../hooks/useSiteConfig';

const ProjectsComponent = () => {
  const { projects, getProjectByName } = useProjects();
  
  return (
    <div>
      {projects.map(project => (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} />
        </div>
      ))}
    </div>
  );
};
```

## Componente DynamicIcon

Para manejar iconos dinámicamente basado en nombres de string:

```jsx
import DynamicIcon from '../components/common/DynamicIcon';

const ServiceCard = ({ service }) => {
  return (
    <div>
      <DynamicIcon iconName={service.icon} className="service-icon" />
      <h3>{service.title}</h3>
    </div>
  );
};
```

## Migración de Componentes Existentes

### Antes (hardcodeado):
```jsx
export const Header = () => {
  return (
    <nav>
      <ul>
        <li><a onClick={() => scrollToSection("home")}>Home</a></li>
        <li><a onClick={() => scrollToSection("about-section")}>Conocenos</a></li>
        <li><a onClick={() => scrollToSection("projects-section")}>Proyectos</a></li>
        <li><a onClick={() => scrollToSection("contact-section")}>Contactanos</a></li>
      </ul>
      <ul>
        <li><a href="https://www.facebook.com/profile.php?id=61552174737475">Facebook</a></li>
        <li><a href="https://www.instagram.com/maderextkoficial">Instagram</a></li>
      </ul>
    </nav>
  );
};
```

### Después (modular):
```jsx
import { useNavigation, useContact } from '../hooks/useSiteConfig';

export const Header = () => {
  const { mainNavigation } = useNavigation();
  const { socialMedia } = useContact();

  return (
    <nav>
      <ul>
        {mainNavigation.map(item => (
          <li key={item.id}>
            <a onClick={() => scrollToSection(item.target)}>{item.label}</a>
          </li>
        ))}
      </ul>
      <ul>
        <li><a href={socialMedia.facebook}>Facebook</a></li>
        <li><a href={socialMedia.instagram}>Instagram</a></li>
      </ul>
    </nav>
  );
};
```

## Ventajas de esta Aproximación

1. **Mantenimiento Centralizado**: Todo el contenido en un solo archivo JSON
2. **Fácil Actualización**: Cambios de contenido sin tocar código React
3. **Escalabilidad**: Fácil agregar nuevos servicios, proyectos o páginas
4. **Consistencia**: Misma estructura de datos en toda la aplicación
5. **Multiidioma**: Base lista para internacionalización futura
6. **Configuración Externa**: Potencial para cargar configuración desde API

## Próximos Pasos

1. **Migrar componentes existentes** usando los ejemplos como referencia
2. **Implementar sistema de temas** basado en configuración
3. **Agregar validación de schema** para la configuración JSON
4. **Implementar carga desde API** para contenido dinámico
5. **Agregar sistema de multiidioma** expandiendo la configuración

## Ejemplo de Uso Completo

```jsx
import { useSiteConfig } from '../hooks/useSiteConfig';
import DynamicIcon from '../components/common/DynamicIcon';

const HomePage = () => {
  const { hero, services, siteInfo, logos } = useSiteConfig();

  return (
    <div>
      {/* Hero Section */}
      <section>
        <video src={hero.video} autoPlay muted loop />
        <img src={logos.main} alt={`Logo ${siteInfo.name}`} />
        <h1>{hero.title} <span>{hero.subtitle}</span></h1>
        <p>{hero.description}</p>
      </section>

      {/* Services Section */}
      <section>
        {services.map(service => (
          <div key={service.id} style={{backgroundImage: `url(${service.background})`}}>
            <DynamicIcon iconName={service.icon} className="service-icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button>{service.button.text}</button>
          </div>
        ))}
      </section>
    </div>
  );
};
```

Con esta configuración modular, tu proyecto MaderexTK será mucho más fácil de mantener y actualizar. ¡Todo el contenido está centralizado y organizado!
