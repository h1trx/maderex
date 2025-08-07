import { 
  GiWoodCabin, 
  GiWoodBeam, 
  GiHandTruck 
} from "react-icons/gi";
import { PiShippingContainerLight } from "react-icons/pi";
import { FaHome } from "react-icons/fa";

// Mapeo de nombres de iconos a componentes
const iconMap = {
  'GiWoodCabin': GiWoodCabin,
  'GiWoodBeam': GiWoodBeam,
  'GiHandTruck': GiHandTruck,
  'PiShippingContainerLight': PiShippingContainerLight,
  'FaHome': FaHome
};

/**
 * Componente que renderiza iconos dinámicamente basado en el nombre
 * @param {Object} props - Props del componente
 * @param {string} props.iconName - Nombre del icono a renderizar
 * @param {string} props.className - Clases CSS adicionales
 * @param {Object} props.style - Estilos inline
 * @param {*} props.children - Contenido hijo (fallback si no se encuentra el icono)
 * @returns {JSX.Element} Componente de icono
 */
export const DynamicIcon = ({ 
  iconName, 
  className = '', 
  style = {}, 
  children = null,
  ...restProps 
}) => {
  const IconComponent = iconMap[iconName];
  
  if (!IconComponent) {
    // Si el icono no existe, mostrar children o null
    if (children) {
      return <span className={className} style={style} {...restProps}>{children}</span>;
    }
    console.warn(`Icon "${iconName}" not found in iconMap`);
    return null;
  }
  
  return <IconComponent className={className} style={style} {...restProps} />;
};

export default DynamicIcon;
