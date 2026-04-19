import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/images/i-removebg-preview.png"


const links = [
  { url: '/', name: "Home" },
  { url: '/', name: "Category" },
  { url: '/', name: "Contact" },
]

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav_box">
          <Link to="/" className="nav_box_logo"><img src={Logo} alt="" /></Link>
          <ul className="nav_box_list">
            {
              links.map((link, i) => (
                <li key={i}>
                  <NavLink to={link.url} className="nav_box_list_link">{link.name}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav