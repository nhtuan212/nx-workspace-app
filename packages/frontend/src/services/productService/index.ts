import { HTTP_CODE, METHOD } from '@/constants';
import { axiosClient } from '@services/axiosClient';
import ConfigApi from '@config/ConfigApi';

export const productService = {
    hotProducts: async () => {
        const url = `${ConfigApi.product.productApi}?limit=20`;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
    flashSaleProductAction: async () => {
        const url = `${ConfigApi.product.productApi}?limit=20`;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
    productByCategory: async ({ slug }: any) => {
        const url = `${ConfigApi.category.getProductCategory + slug}`;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.data;
            }
        });
    },
    productAction: async ({ slug }: any) => {
        const url = `${ConfigApi.product.getProduct + slug}`;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.data;
            }
        });
    },
    productSearch: async ({ keyword }: any) => {
        const url = `${ConfigApi.product.productSearch}?q=${keyword}`;
        const method = METHOD.GET;
        return axiosClient.executed({ url, method }).then(response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response?.data?.products;
            }
        });
    },
};
