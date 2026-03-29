import React from 'react';

function DisplayStatus({ type, message }) {
    const style = {
        color: type === 'success' ? 'green' : 'red',
        marginTop: '10px',
        fontWeight: 'bold'
    };

    return (
        <div style={style}>
            {message}
        </div>
    );
}

export default DisplayStatus;
