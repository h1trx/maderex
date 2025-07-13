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
            <img loading="lazy" className="img-footer" src="https://res.cloudinary.com/dxr7cjjpa/image/upload/v1751398299/maderexwithfont_csh0um.png" alt="Logo Maderex TK" />
            <ul className="list-link-footer">
                <li className="item-list-footer">Home</li>
                <li className="item-list-footer">About</li>
                <li className="item-list-footer">Resources</li>
                <li className="item-list-footer">Help</li>
            </ul>
            <ul className="social-links social-links-footer ">
                <li onClick={() => navig()}><FaFacebook className="icon social-icon item-list-footer" /></li>
                <li><FaInstagram className="icon social-icon item-list-footer" /></li>
                <li><FaTiktok className="icon social-icon item-list-footer" /></li>
                <li><BsTwitterX className="icon social-icon item-list-footer" /></li>
                <li onClick={() => navig("tel:(604)7890236")}><FaPhoneAlt className="icon social-icon item-list-footer" /></li>
                <li onClick={() => navig("mailto:info@maderextk.com")}><IoMdMail className="icon social-icon item-list-footer" /></li>
            </ul>
            <p className="item-list-footer">2025 Maderex TK. All Rights reserved.</p>
        </footer>
    )
}
