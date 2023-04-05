import DetailPage from '@/components/PageComponent/DetailPage';
import ConfigApi from '@/config/ConfigApi';
import { axiosClient } from '@/services/axiosClient';
import { HTTP_CODE, METHOD } from '@/constants';
export default DetailPage;

export const getServerSideProps = async ({ query }: any) => {
    // Seo data Fetching
    const seoData = await axiosClient
        .executed({
            url: `${ConfigApi.seo.seoApi}?slug=${query?.slug}`,
            method: METHOD.GET,
        })
        .then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.data[0] || [];
            }
        });

    return {
        props: { seoData },
    };
};
