import * as React from 'react';
import './PromoPage.css';
import '../../styles/common.css';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import metroImage from '../../assets/metro.jpg';
import moscowImage from '../../assets/moscow.jpg';


const PromoPage: React.FC = () => {
    // Варианты анимации для карточек
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3, // Задержка между появлением карточек
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <>
            <Container fluid className="d-flex flex-column align-items-center justify-content-center mb-5">
                <motion.div
                    className="d-flex w-100 promoImage"
                    variants={cardVariants}
                    custom={0}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="d-flex flex-column promoWrapper">
                        <motion.h1
                            className="promoText"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Ваш голос — имя для города
                        </motion.h1>
                    </div>
                </motion.div>

                <Container>
                    <motion.div
                        className="d-flex promoCard"
                        variants={cardVariants}
                        custom={1} // Индекс для последовательной анимации
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="cardText">
                                Голосуйте за названия улиц, парков, станций метро и других объектов!
                            </h2>
                        </div>
                        <img
                            className="promoCardImage"
                            src={metroImage}
                            alt="City planning"
                        />
                    </motion.div>
                </Container>

                <Container>
                    <motion.div
                        className="d-flex promoCard"
                        variants={cardVariants}
                        custom={2} // Индекс для последовательной анимации
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="cardText">
                                Каждое решение приближает нас к лучшему городу!
                            </h2>
                        </div>
                        <img
                            className="promoCardImage"
                            src={moscowImage}
                            alt="City planning"
                        />
                    </motion.div>
                </Container>
            </Container>
        </>
    );
};

export default PromoPage;
