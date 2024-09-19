import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav id='#' className={styles.navbar}>
            <a className={styles.title} href="#">Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuButton}
                     src={menuOpen
                         ? "menu/close.svg"
                         : "menu/menu.svg"}
                     alt='menu-button'
                     onClick={() => {setMenuOpen(!menuOpen)}}
                />
                {/* Apply string interpolation */}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => {setMenuOpen(false)}}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;