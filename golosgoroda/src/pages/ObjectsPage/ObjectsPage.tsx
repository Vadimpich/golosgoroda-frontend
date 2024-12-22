import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {motion} from 'framer-motion';
import ObjectCard from '../../components/ObjectCard/ObjectCard.tsx';
import './ObjectsPage.css';
import Breadcrumbs from "../../components/BreadCrumbs/BreadCrumbs.tsx";
import {api} from "../../modules/ObjectsAPI.tsx";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { setObjectName } from '../../objectNameSlice.ts';

interface Object {
    id: number;
    name: string;
    image: string;
}

const ObjectsPage: React.FC = () => {
    const [objects, setObjects] = useState<Object[]>([]);
    const objectName = useSelector((state: RootState) => state.object_name.objectName);
    const dispatch: AppDispatch = useDispatch();

    const fetchObjects = async () => {
        try {
            const data = await api.getObjects(objectName)
            console.log(data);
            setObjects(data || []);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    };

    useEffect(() => {
        fetchObjects();
    }, [objectName]);

    // Обработка изменения в поле поиска
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setObjectName(e.target.value));
    };

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
                            value={objectName}
                            onChange={handleSearchChange}
                        />
                    </form>
                </div>

                <div className="flexRowVotingOptions">
                    {objects.length === 0 ? (
                        <p>Ничего не найдено</p>
                    ) : (
                        objects.map((object) => (
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
