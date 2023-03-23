import { HTTP_CODE, METHOD } from '@/constants';
import { axiosClient } from '@services/axiosClient';
import ConfigApi from '@config/ConfigApi';

export const productService = {
    hotProducts: async () => {
        const url = `${ConfigApi.productApi}?limit=20`;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
    flashSaleProductAction: async () => {
        const url = `${ConfigApi.productApi}?limit=20`;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
    productList: async () => {
        const url = `${ConfigApi.productApi}?limit=10`;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
    productSearch: async ({ keyword }: any) => {
        const url = `${ConfigApi.productSearch}?q=${keyword}`;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
};
