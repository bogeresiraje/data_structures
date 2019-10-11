import React from 'react';


const PhotoFlip = ({ preview }) => {
    if(preview) {
        // Show image to user
        return (
            <div className='photo-box'>
                <img src={ preview } alt='' width='100' height='100' />
            </div>
        );

    } else {
        // You wait
        return (
            <NoPhoto />
        );
    }
};


const NoPhoto = ({ title='No Photo Chosen' }) => (
    <div style={ styles.container }>
        <div style={ styles.title } >{ title }</div>
    </div>
);


const styles = {
    container: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        width: 100,
        height: 100,
        marginTop: 7,
        textAlign: 'center',
        color: '#888888',
    },
    title: {
        marginTop: 40,
    }
}


export default PhotoFlip;
