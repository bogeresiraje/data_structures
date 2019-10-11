import React from 'react';


const SomethingWrong = () => (
    <div style={ styles.container }  >
        <div style={ styles.title } >Something Went Wrong</div>
        <div style={ styles.dom } >Try Again Later</div>
    </div>
);


const styles = {
    container: {
        marginTop: 55,
        textAlign: 'center',
        justifyContent: 'center',
        height: '100vh',
    } ,
    title: {
        fontWeight: 'bold',
        padding: 50,
        paddingBottom: 20,
    },
    dom: {
        fontSize: '90%',
        color: '#aaaaaa',
    }
}

export default SomethingWrong;
