import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class TopBar extends Component {
    render() {
        const isActive = path => {
            return window.location.pathname === path;
        }

        return (
            <div className='top-bar' >
                <div className='title' >
                    <Link to='/' >
                        <img className='round-image-x' src='favicon.ico' alt='logo' />
                    </Link>
                </div>
                <div className='menu'>
                    <div className='nav-link' >
                        <Link style={ isActive('/')? styles.activeLink: styles.link } to='/' >
                            Finobacci
                        </Link>
                        <Link style={ isActive('/factorial')? styles.activeLink: styles.link } to='/factorial' >
                            Factorial
                        </Link>
                        <Link style={ isActive('/hanoi')? styles.activeLink: styles.link } to='/hanoi' >
                            Hanoi
                        </Link>
                        <Link style={ isActive('/stack')? styles.activeLink: styles.link } to='/stack' >
                            Stack
                        </Link>
                        <Link style={ isActive('/queue')? styles.activeLink: styles.link } to='/queue' >
                            Queue
                        </Link>
                        <Link style={ isActive('/list')? styles.activeLink: styles.link } to='/list' >
                            List
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}


const styles = {
    link: {
        display: 'inlineBlock',
        padding: 5,
        margin: 5,
        color: '#eeeeee',
        textDecoration: 'none',
    },
    activeLink: {
        display: 'inlineBlock',
        padding: 5,
        margin: 5,
        textDecoration: 'none',
        color: '#ccd828'
    }
}
