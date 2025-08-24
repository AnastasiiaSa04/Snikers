import { NavLink } from "react-router-dom"
import styles from "./styles.module.css"


const menuList = [
  { title: "Main", path: "/" },
  { title: "Cart", path: "/cart" },
  { title: "Contacts", path: "/contacts" }
]

function Header() {
  return (
    <header className={styles.header}>
      <h1>Сникер - магазин</h1>
      <nav>
        {menuList.map((menuItem) => (
          <NavLink
            key={menuItem.title}
            to={menuItem.path}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            {menuItem.title}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header