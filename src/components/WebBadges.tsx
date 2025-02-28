import React from 'react';

const Trippy: React.FC = (): React.ReactNode => {
    return (
        <div id="web-badges">
            <img src='/community.gif' alt='Web Community Developement Award' />
            <img src='/wabwalk.gif' alt='WebWalkers What-a-Site Award' />
            <img src='/webtrips.gif' alt='WebTrips Rockin’ site of the week' />
            <img src='/yahooweek.gif' alt='Yahoo! pick of the week' />
        </div>
    );
};

export default Trippy;