import React from 'react';

const NotFound = () => {
    return (
        <div className="notFound text-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100%',height: '85vh' }}>
            <h1>Not Foud</h1>
            <p className="lead">The page you are looking for does not exist...</p>
        </div>
    )
}

export default NotFound
