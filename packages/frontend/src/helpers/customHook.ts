import { useRouter } from 'next/router';

export const useRouterCustomHook = () => {
    const router = useRouter();
    return { ...router };
};
