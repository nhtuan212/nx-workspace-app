import React, { useState } from 'react';
import { ICON_KEY } from '@/constants';
import Button from '../Button';
import Input from '../Input';

const index = () => {
    const handleOnClick = () => {
        console.log('onclick');
    };
    return (
        <div className="search pointer">
            <Button svgIconKind={ICON_KEY.SEARCH} onClick={handleOnClick} />
            <Input className="absolute" text="input nè" />
        </div>
    );
};

export default index;
