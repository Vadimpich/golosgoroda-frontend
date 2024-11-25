import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {motion} from 'framer-motion';
import ObjectCard from '../../components/ObjectCard/ObjectCard.tsx';
import './ObjectsPage.css';
import Breadcrumbs from "../../components/BreadCrumbs/BreadCrumbs.tsx";

interface Object {
    id: number;
    name: string;
    image: string;
}

const ObjectsPage: React.FC = () => {
    const [objects, setObjects] = useState<Object[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const fetchObjects = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/objects/'); // Замените на ваш API endpoint
            const data = await response.json();
            console.log(data);
            setObjects(data.data);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    };

    useEffect(() => {
        fetchObjects();
    }, []);

    // Обработка изменения в поле поиска
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Фильтрация объектов по названию
    const filteredObjects = objects.filter((object) =>
        object.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const breadcrumbPaths = [
        {label: "Главная", path: "/"},
        {label: "Объекты", path: "/objects"},
    ]

    return (
        <>

            <Container className="flexColumnVotingList">
                <Breadcrumbs paths={breadcrumbPaths}/>
                <h1 className="heroTitleAvailableVoting">Объекты для голосования</h1>
                <div className="flexRowVotingControls">
                    <form className="flexRow" method="GET" action="">
                        <input
                            type="text"
                            name="object_name"
                            placeholder="Поиск..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </form>
                </div>

                <div className="flexRowVotingOptions">
                    {filteredObjects.length === 0 ? (
                        <p>Ничего не найдено</p>
                    ) : (
                        filteredObjects.map((object) => (
                            <motion.div
                                key={object.id}
                                className="d-flex"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.3}}
                            >
                                <ObjectCard object={object}/>
                            </motion.div>
                        ))
                    )}
                </div>
            </Container>
        </>
    );
};

export default ObjectsPage;
