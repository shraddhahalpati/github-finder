import React, { Fragment } from 'react';

export const About = () => {
    return (
        <Fragment>
            <div className="notFound text-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100%',height: '85vh' }}>
                <h1>About This App</h1>
                <p>App to search Github Users</p>
                <p>Version: 1.0.0</p>
            </div>
        </Fragment>
    )
}

export default About
