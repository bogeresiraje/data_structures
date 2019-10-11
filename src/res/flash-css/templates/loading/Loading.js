import React from 'react';


export const Loading = () => (
    <div className='container' >
        <div style={ styles.loading }>loading.....</div>
    </div>
);


const styles = {
    loading: {
        textAlign: 'center',
        paddingTop: 20,
    }
}
