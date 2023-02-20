import React from 'react';

const HomePage = () => {
    return (
        <div className="d-flex align-start lg:align-baseline">
            <p>This is Home Page</p>
            <div className="d-flex">
                <div className="col-6 md:col-6 sm:col-8">Test col</div>
                <div className="col-6 md:col-6 sm:col-8">Test col</div>
                <div className="mx-n0.25 border border-top-0 rounded">Test col</div>
            </div>
        </div>
    );
};

export default HomePage;
