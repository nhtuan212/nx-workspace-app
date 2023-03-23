import React from 'react';
import Error from 'next/error';
import { ErrorInterface } from '@/interface';

const ErrorPage = ({ statusCode }: ErrorInterface) => {
    return <Error statusCode={statusCode} />;
};

export default ErrorPage;
