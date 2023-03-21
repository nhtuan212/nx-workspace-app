import axios from 'axios';
import { METHOD } from '@/constants';

export const axiosClient = {
    executed: async ({ url, method }: any) => {
        switch (method) {
            case METHOD.GET:
                return axios.get(url || {}).then(response => {
                    return response;
                });
            case METHOD.POST:
                console.log('handle post');
        }
    },
};
