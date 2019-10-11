import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ title='Songs' }) => (
    <div style={ styles.header }>
        <div style={ styles.partition } ></div>
        <div style={ styles.partition } ><h1>{ title }</h1></div>
        <div style={ styles.partition } >
            <Link to='/songs/add_song' style={ styles.button } >Add New Song</Link>
        </div>
    </div>
);


export const PlainHeader = ({ title='Songs' }) => (
    <div style={ styles.header }>
        <div style={ styles.partition } ></div>
        <div style={ styles.partition } ><h1>{ title }</h1></div>
        <div style={ styles.partition } >
        </div>
    </div>
);


const styles = {
    header: {
        height: 45,
        width: '100%',
        padding: 15,
    },
    partition: {
        display: 'inline-block',
        textAlign: 'center',
        width: '33%',
    },
    button: {
        textDecoration: 'none',
        backgroundColor: 'rgb(75, 86, 233)',
        color: '#eeeeee',
        padding: 5,
        fontSize: '90%',
    }
}


export default Header;
