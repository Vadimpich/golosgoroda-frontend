import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ObjectDetailPage.css';
import Breadcrumbs from "../../components/BreadCrumbs/BreadCrumbs.tsx";
import {api} from "../../modules/ObjectsAPI.tsx";

interface ObjectDetail {
    name: string;
    image: string;
    description: string;
}

const ObjectDetailPage: React.FC = () => {
    const [object, setObject] = useState<ObjectDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { id } = useParams<{ id: string }>();

    const fetchObjectDetail = async () => {
        try {
            setLoading(true);
            if (!id) {
                throw new Error('ID is undefined');
            }
            const data = await api.getObject(id);
            setObject(data);
        } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    console.error('Неизвестная ошибка:', error);
                }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchObjectDetail();
    }, [id]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    if (!object) {
        return <div>Объект не найден</div>;
    }

    const breadcrumbPaths = [
        { label: "Главная", path: "/" },
        { label: "Объекты", path: "/objects" },
        { label: object.name, path: `/objects/${id}` }
    ];

    return (
        <div className="flexColContainer">
            <Breadcrumbs paths={breadcrumbPaths} />
            <div className="contentBoxContainer">
                <div className="flexRowContentContainer">
                    <div className="flexColumnTitleContainer">
                        <h1 className="heroTitle">{object.name}</h1>
                    </div>
                    <img className="objectImage" src={object.image} alt={`Изображение для ${object.name}`} />
                </div>
            </div>

            <div className="flexColDetailContainer">
                <h1 className="detailInfoHeroTitle">Подробная информация</h1>
                <h3 className="detailInfoSubtitle">
                    {object.description.split("\n").map((line, index) => (
                        <span key={index}>{line}<br /></span>
                    ))}
                </h3>
            </div>
        </div>
    );
};

export default ObjectDetailPage;
