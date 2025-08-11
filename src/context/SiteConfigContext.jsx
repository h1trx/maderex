import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const SiteConfigContext = createContext();

// Provider del contexto
export const SiteConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para cargar la configuración desde la API
  const loadConfig = async () => {
    console.log('🚀 [CONTEXT] Iniciando carga de configuración desde la API...');
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/6894ff0ef7e7a370d1f6a27d', {
        method: 'GET',
        headers: {
          'X-Master-Key': '$2a$10$buYoAl7NMNAT.rFAYr98peXTp2amBzKl4965jjBEufBQ.SIOOQssC',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Error al cargar la configuración: ${response.status}`);
      }

      const data = await response.json();
      
      // La API de jsonbin.io devuelve los datos en la propiedad 'record'
      const configData = data.record || data;
      
      if (!configData || Object.keys(configData).length === 0) {
        throw new Error('La configuración recibida está vacía');
      }
      
      console.log('✅ [CONTEXT] Configuración cargada exitosamente:', configData);
      setConfig(configData);
    } catch (err) {
      console.error('❌ [CONTEXT] Error cargando configuración:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Cargar configuración al montar el provider
  useEffect(() => {
    loadConfig();
  }, []);

  // Función para recargar la configuración
  const reloadConfig = () => {
    return loadConfig();
  };

  const value = {
    config,
    loading,
    error,
    reloadConfig,
    // Accesos directos para facilitar el uso
    siteInfo: config?.siteInfo,
    logos: config?.logos,
    contact: config?.contact,
    socialMedia: config?.socialMedia,
    navigation: config?.navigation,
    hero: config?.hero,
    services: config?.services,
    about: config?.about,
    projects: config?.projects,
    pages: config?.pages,
    contactForm: config?.contactForm,
    map: config?.map
  };

  return (
    <SiteConfigContext.Provider value={value}>
      {children}
    </SiteConfigContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useSiteConfig = () => {
  const context = useContext(SiteConfigContext);
  if (context === undefined) {
    throw new Error('useSiteConfig debe usarse dentro de un SiteConfigProvider');
  }
  return context;
};

// Hooks específicos
export const useServices = () => {
  const { services } = useSiteConfig();
  
  const getServiceById = (id) => {
    return services?.find(service => service.id === id);
  };
  
  return {
    services: services || [],
    getServiceById
  };
};

export const useNavigation = () => {
  const { navigation } = useSiteConfig();
  
  return {
    mainNavigation: navigation?.main || [],
    footerNavigation: navigation?.footer || []
  };
};

export const useContact = () => {
  const { contact, socialMedia } = useSiteConfig();
  
  return {
    phone: contact?.phone,
    email: contact?.email,
    whatsapp: contact?.whatsapp,
    socialMedia: socialMedia || []
  };
};

export const useProjects = () => {
  const { projects } = useSiteConfig();
  
  return {
    projects: projects || [],
    getProjectByName: (name) => projects?.find(project => project.name === name)
  };
};
