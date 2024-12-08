import {mockObjects} from '../mocks/mockData.tsx';

const API_PREFIX = '/api/';

interface objectParams {
    object_name?: string;
}

export const api = {
    async getObjects(searchQuery: string = "") {
        const params: objectParams = {};

        if (searchQuery) {
            params.object_name = searchQuery;
        }

        const queryString = new URLSearchParams(
            Object.entries(params).map(([key, value]) => [key, value ?? ""])
        ).toString();
        const url = `${API_PREFIX}objects/?${queryString}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.data;
        } catch (error) {
            if (error instanceof Error) {
                console.error("Ошибка получения данных с сервера:", error.message);
            } else {
                console.error("Неизвестная ошибка:", error);
            }
            console.warn("Возвращаем данные из mock-объектов");

            const filteredMocks = searchQuery
                ? mockObjects.filter((item) =>
                    item.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
                : mockObjects;

            // Если ошибка при запросе, возвращаем отфильтрованные мок-данные
            return filteredMocks;
        }
    },

    async getObject(id: string) {
        const url = `${API_PREFIX}objects/${id}/`; // Используем относительный путь

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                console.error("Ошибка получения данных с сервера:", error.message);
            } else {
                console.error("Неизвестная ошибка:", error);
            }
            console.warn("Возвращаем данные из mock-объектов.");

            // Если ошибка при запросе, ищем в mock-данных по id
            const Object = mockObjects.find((item) => item.id === parseInt(id));
            console.log(Object)
            return Object || null; // Если не нашли, возвращаем null
        }
    },
};