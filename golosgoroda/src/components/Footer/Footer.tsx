import './Footer.css';
import React from "react";
import tgImage from '../../assets/tg_icon.png';
import githubImage from '../../assets/github_icon.png';
import parsImage from '../../assets/tr_pars.svg';


const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footerSection">
            <div className="footerWrapper">
                <div className="flexRowFooterGallery">
                    <div className="flexRowFooter">
                        <img
                            className="footerImage"
                            src={parsImage}
                            alt="Logo"
                        />
                        <h3 className="footerSubtitle">Вадим Пичурин {year}</h3>
                    </div>

                    <div className="flexRowFooter">
                        <a href="https://t.me/vadimpich" target="_blank" rel="noopener noreferrer">
                            <img
                                className="footerImage animated"
                                src={tgImage}
                                alt="Telegram"
                            />
                        </a>
                        <a href="https://github.com/Vadimpich" target="_blank" rel="noopener noreferrer">
                            <img
                                className="footerImage animated"
                                src={githubImage}
                                alt="GitHub"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
