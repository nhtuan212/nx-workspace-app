import React from 'react';
import { emptyPageInterface } from '@/interface';
import { TEXT } from '@/constants';

const EmptyPage = ({ message }: emptyPageInterface) => {
    return (
        <div className="py-1">
            <div className="container">
                <div className="bg-gray238 rounded-lg p-1">
                    {message || TEXT.EMPTY_PAGE}
                </div>
            </div>
        </div>
    );
};

export default EmptyPage;
