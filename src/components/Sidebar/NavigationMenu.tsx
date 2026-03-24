import { Link, useLocation } from "react-router-dom";
import clases from "./sidebar.module.css";
import userImg from "../../assets/images/user.jpg";
import { Settings } from "lucide-react";
import { SidebarLink, User } from "../../types/all";




export default function Sidebar() {
  
  const sidebarLinks:SidebarLink[] = [
    { id: 1, title: "Приход", path: "/" },
    { id: 2, title: "Группы", path: "/groups" },
    { id: 3, title: "Продукты", path: "/products" },
    { id: 4, title: "Пользователи", path: "/users" },
    { id: 5, title: "Настройки", path: "/settings" },
  ]; 
  const user:User = { id: 1, image: userImg };
  const location = useLocation();

  return (
    <div className={clases.sidebar}>
      <div className={clases.userImg}>
        <img src={user.image} alt="user Photo" />
        <span className={clases.userSettings}>
          <Settings color="#546E7A" />
        </span>
      </div>
      <ul className={clases.linksContainer}>
        {sidebarLinks.map((link) => (
          <li
            key={link.id}
            className={location.pathname === link.path ? clases.activeLink : ""}
          >
            <Link to={link.path}>
              {link.title.charAt(0).toUpperCase() + link.title.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
