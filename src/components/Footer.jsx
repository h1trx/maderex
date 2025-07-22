import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { navig } from "../utils/navig";

import "../styles/footer.css"

export const Footer = () => {
    return (
        <footer>
            <img loading="lazy" className="img-footer" src="https://res.cloudinary.com/dxr7cjjpa/image/upload/v1751398299/maderexwithfont_csh0um.png" alt="Logo de Maderex con el texto 'Maderex'" />
            <nav>
                <ul className="list-link-footer">
                    <li className="item-list-footer"><a>Home</a></li>
                    <li className="item-list-footer"><a>About</a></li>
                    <li className="item-list-footer"><a>Resources</a></li>
                    <li className="item-list-footer"><a>Help</a></li>
                </ul>
            </nav>
            <ul className="social-links social-links-footer ">
                <li><a href="https://www.facebook.com/profile.php?id=61552174737475" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="icon social-icon item-list-footer" /></a></li>
                <li><a href="https://www.instagram.com/maderextkoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="icon social-icon item-list-footer" /></a></li>
                <li><a href="https://www.tiktok.com/@maderextkinternat" target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><FaTiktok className="icon social-icon item-list-footer" /></a></li>
                <li><a href="https://x.com/MaderexI57271" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><BsTwitterX className="icon social-icon item-list-footer" /></a></li>
                <li><a href="tel:(604)7890236" aria-label="Llamar a Maderex"><FaPhoneAlt className="icon social-icon item-list-footer" /></a></li>
                <li><a href="mailto:info@maderextk.com" aria-label="Enviar correo a Maderex"><IoMdMail className="icon social-icon item-list-footer" /></a></li>
            </ul>
            <p className="item-list-footer">2025 Maderex TK. All Rights reserved.</p>
        </footer>
    )
}
