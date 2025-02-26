import React from 'react';

const Trippy: React.FC = (): React.ReactNode => {
    return (
        <div id="trippy-bkg">
            <div className="box yellow"></div>
            <div className="box turquoise"></div>
            <div className="box black"></div>
            <div className="box pink"></div>
        </div>
    );
};

export default Trippy;