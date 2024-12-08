import './Header.css';
import '../../styles/common.css';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logoSym from '../../assets/logo_sym.png';
import logoText from '../../assets/logo_text.png';
import React, { useState } from 'react';

const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <Navbar className="d-flex sticky-top page-header headerNav">
            <div className="navContainer">
                <Navbar.Brand as={Link} to={"/"} className="logoContainer">
                    <motion.img
                        src={logoSym}
                        alt="Logo Sym"
                        className="logoSym"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <motion.img
                        src={logoText}
                        alt="Logo Text"
                        className="logoText"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    />
                </Navbar.Brand>

                {/* Бургер-меню для мобильных устройств */}
                <div className="burgerMenu" onClick={toggleMenu}>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                </div>

                {/* Навигация */}
                <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    className={`navLinks ${isMenuOpen ? "open" : ""}`}
                >
                    <Link to="/objects">
                        <Button className="headerButton">Объекты</Button>
                    </Link>
                </motion.div>
            </div>
        </Navbar>
    );
};

export default Header;
