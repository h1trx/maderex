import { useState } from "react";

import { IoMenu } from "react-icons/io5";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { navig } from "../utils/navig";

import "../styles/header.css"

import { Asidemovil } from "./Asidemovil";

export const Header = () => {
  const [aside, setAside] = useState(false)
  return (
    <header className="header-nav">
        <IoMenu className="icon menu-icon" onClick={() => {setAside(!aside)}} />
        <ul className="social-links">
            <li onClick={() => navig("https://www.facebook.com/profile.php?id=61552174737475")}><FaFacebook className="icon social-icon" /></li>
            <li onClick={() => navig("https://www.instagram.com/maderextkoficial")}><FaInstagram className="icon social-icon" /></li>
            <li onClick={() => navig("https://www.tiktok.com/@maderextkinternat")}><FaTiktok className="icon social-icon" /></li>
            <li onClick={() => navig("https://x.com/MaderexI57271")}><BsTwitterX className="icon social-icon" /></li>
        </ul>
        <Asidemovil isVisible={aside} setIsVisible={setAside} />
    </ header>
  )
}
