import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './ObjectCard.css'; // Подключите стили
import plusImage from '../../assets/plus.svg';

interface Object {
    id: number;
    name: string;
    image: string;
}

interface ObjectCardProps {
    object: Object;
}

const ObjectCard: React.FC<ObjectCardProps> = ({ object }) => {
    // Варианты анимации для наведения
    const hoverVariants = {
        hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };

    return (
        <motion.div
            className="votingOptionWrapper animated shadow"
            whileHover="hover"
            whileTap="tap"
            variants={hoverVariants}
        >
            <Link to={`/objects/${object.id}`} className="d-flex">
                <div>
                    <img
                        className="votingOptionImage"
                        src={object.image}
                        alt={`Изображение ${object.name}`}
                    />
                </div>
                <div className="flexColumnVotingOption">
                    <h3 className="votingOptionSubtitle">{object.name}</h3>
                    {/* Кнопка добавления, можно раскомментировать, если нужно */}
                    {/* <button className="voteButton"> */}
                    {/*     <h3 className="voteButtonText">Добавить</h3> */}
                    {/*     <img */}
                    {/*         className="voteButtonIcon" */}
                    {/*         src={plusImage} */}
                    {/*         alt="Добавить" */}
                    {/*     /> */}
                    {/* </button> */}
                </div>
            </Link>
        </motion.div>
    );
};

export default ObjectCard;
