import React from 'react';
import ErrorPage from '@components/PageComponent/ErrorPage';
import { HTTP_CODE } from '@/constants/';

const _error = () => {
    return <ErrorPage statusCode={HTTP_CODE?.NOT_FOUND} />;
};

export default _error;
