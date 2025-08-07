import { useState, useEffect } from 'react';
import siteConfig from '../config/siteConfig.json';

/**
 * Hook personalizado para acceder a la configuración del sitio
 * @returns {Object} Objeto con toda la configuración del sitio
 */
export const useSiteConfig = () => {
  const [config, setConfig] = useState(siteConfig);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para recargar la configuración (útil para futuras actualizaciones dinámicas)
  const reloadConfig = async () => {
    setLoading(true);
    try {
      // En el futuro, esto podría cargar desde una API
      setConfig(siteConfig);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    config,
    loading,
    error,
    reloadConfig,
    // Accesos directos para facilitar el uso
    siteInfo: config.siteInfo,
    logos: config.logos,
    contact: config.contact,
    socialMedia: config.socialMedia,
    navigation: config.navigation,
    hero: config.hero,
    services: config.services,
    about: config.about,
    projects: config.projects,
    pages: config.pages,
    contactForm: config.contactForm,
    map: config.map
  };
};

// Hook específico para servicios
export const useServices = () => {
  const { services } = useSiteConfig();
  
  const getServiceById = (id) => {
    return services.find(service => service.id === id);
  };
  
  return {
    services,
    getServiceById
  };
};

// Hook específico para navegación
export const useNavigation = () => {
  const { navigation } = useSiteConfig();
  
  return {
    mainNavigation: navigation.main,
    footerNavigation: navigation.footer
  };
};

// Hook específico para información de contacto
export const useContact = () => {
  const { contact, socialMedia } = useSiteConfig();
  
  return {
    phone: contact.phone,
    email: contact.email,
    whatsapp: contact.whatsapp,
    socialMedia
  };
};

// Hook específico para proyectos
export const useProjects = () => {
  const { projects } = useSiteConfig();
  
  return {
    projects,
    getProjectByName: (name) => projects.find(project => project.name === name)
  };
};
