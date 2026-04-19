import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";

const NavMobile = () => {
  const links = [
    { url: "/", name: "Home", icon: <MdHome /> },
    { url: "/", name: "Category", icon: <BiCategory /> },
    { url: "/", name:"Contact", icon: <IoIosContact /> },
  ];

  return (
    <nav className="nav_mobile">
      <div className="container">
        <div className="nav_mobile_box">
          <ul className="nav_mobile_box_list">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink to={link.url} className="nav_box_list_link">
                  <span className="nav_icon">{link.icon}</span>
                  <span className="nav_text">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;