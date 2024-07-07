import { useEffect, useState } from 'react';

export interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export const useFetch = <T>(getData: () => Promise<T>): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await getData();
                setData(result);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [getData]);

    return { data, loading, error };
};