import React, { useState } from 'react';
import styles from './navbar.module.css'; // Importing the CSS Module
import logo from './img2.png'; // Replace with the path to your logo file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger Icon for mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
