import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { navig } from "../utils/navig";
import { useSiteConfig, useNavigation, useContact } from "../hooks/useSiteConfig";

import "../styles/footer.css"

export const Footer = () => {
    const { footerNavigation } = useNavigation();
    const { socialMedia, phone, email } = useContact();
    const { logos, siteInfo } = useSiteConfig();
    
    return (
        <footer>
            <img loading="lazy" className="img-footer" src={logos.withText} alt={`Logo de ${siteInfo.name}`} />
            <nav>
                <ul className="list-link-footer">
                    {footerNavigation.map((item, index) => (
                        <li key={index} className="item-list-footer">
                            <a href={item.target === "#" ? "#" : item.target}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <ul className="social-links social-links-footer">
                <li><a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="icon social-icon item-list-footer" /></a></li>
                <li><a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="icon social-icon item-list-footer" /></a></li>
                <li><a href={socialMedia.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><FaTiktok className="icon social-icon item-list-footer" /></a></li>
                <li><a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><BsTwitterX className="icon social-icon item-list-footer" /></a></li>
                <li><a href={`tel:${phone.local}`} aria-label="Llamar a Maderex"><FaPhoneAlt className="icon social-icon item-list-footer" /></a></li>
                <li><a href={`mailto:${email}`} aria-label="Enviar correo a Maderex"><IoMdMail className="icon social-icon item-list-footer" /></a></li>
            </ul>
            <p className="item-list-footer">{siteInfo.year} {siteInfo.nameShort}. All Rights reserved.</p>
        </footer>
    )
}
