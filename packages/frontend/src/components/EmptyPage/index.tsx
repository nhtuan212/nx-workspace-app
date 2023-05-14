import React from 'react';
import { emptyPageInterface } from '@/interface';
import { TEXT } from '@/constants';

const EmptyPage = ({ message }: emptyPageInterface) => {
    return (
        <div className="py-4">
            <div className="container">
				<div className="bg-empty rounded-lg p-4">
                    {message || TEXT.EMPTY_PAGE}
                </div>
            </div>
        </div>
    );
};

export default EmptyPage;
