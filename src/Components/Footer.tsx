import { Link } from "react-router-dom"
import Logo from "../assets/images/i-removebg-preview.png"
import telegram from "../assets/images/telegram.svg"
import instagram from "../assets/images/instagram.svg"
import facebook from "../assets/images/facebook.svg"
import youtube from "../assets/images/youtube.svg"
import phone from "../assets/images/phone.svg"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer_box">
                <div className="footer_box_left">
                    <p className="footer_box_left_text">The online shop for PROWEB education</p>
                <h3 className="footer_box_left_contact">PROWEB contacts:</h3>
                <div className="footer_box_left_contacts">
                    <Link target="_blank" to="https://t.me/proweb" className="contacts_img"><img src={telegram} alt="" /></Link>
                    <Link target="_blank" to="https://www.instagram.com/proweb.uz?igsh=bTgxdzNmajF0MGp0" className="contacts_img"><img src={instagram} alt="" /></Link>
                    <Link target="_blank" to="https://www.facebook.com/proweb.uz" className="contacts_img"><img src={facebook} alt="" /></Link>
                    <Link target="_blank" to="https://www.youtube.com/c/PROWEBuz" className="contacts_img"><img src={youtube} alt="" /></Link>
                </div>
                </div>
                <Link to="/" className="footer_box_left_logo"><img src={Logo} alt="" /></Link>
                <div className="footer_box_right">
                    <h2 className="footer_box_right_title">The Creator of the site:</h2>
                    <h1 className="footer_box_right_name">Vefa</h1>
                    <div className="footer_box_right_mini">
                        <div className="footer_box_right_mini_left">
                    <Link to="tel:+998774000230" className="footer_box_right_contact"><img src={phone} alt="" /></Link>
                    <Link to="https://t.me/General4757" className="footer_box_right_contact"><img src={telegram} alt="" /></Link>
                        </div>
                        <div className="footer_box_right_mini_right">
                        <Link to="tel:+998774000230" className="footer_box_right_contact">+998 77 400 02 30</Link>
                    <Link to="https://t.me/djumadurdiyevv" className="footer_box_right_contact">@djumadurdiyevv</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer