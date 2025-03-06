import React from 'react';

const Vortex: React.FC = (): React.ReactNode => {
    const rings = []
    const ringLimit = 20
    for (let i = 0; i < ringLimit; i++) {
        rings.push(<div key={Math.floor(Date.now() + i)} className={`ring el-${i}`}></div>);
    }

    return (
        <div id='vortex'>
            {rings}
        </div>
    )
};

export default Vortex;