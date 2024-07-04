import {useEffect, useState} from "react";

export const useFetch = <T>(getData: () => Promise<T>): T | null => {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
        };

        fetchData();
    }, [getData]);

    return data;
};
