import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useRouterCustomHook = () => {
    const router = useRouter();
    return { ...router };
};

export const useViewport = () => {
    const [width, setWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 1920
    );

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return {
        width,
    };
};
