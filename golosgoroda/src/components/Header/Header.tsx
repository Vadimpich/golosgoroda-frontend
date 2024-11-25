import './Header.css';
import '../../styles/common.css';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logoSym from '../../assets/logo_sym.png';
import logoText from '../../assets/logo_text.png';
import React from "react";

const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
};

const Header: React.FC = () => {
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
                <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                    <Button as={Link} to={'/objects'} className="headerButton">
                        Объекты
                    </Button>
                </motion.div>
            </div>
        </Navbar>
    );
};

export default Header;
