import React, { Component } from 'react';
import Template from './Template';
import { getApi } from '../data/url';


class Finobacci extends Component {
    state = {
        elements: [],
        element: '',
        size: '',
        top: '',
        popped: '',
        successfullPush: false,
        popError: false,
        topError: false,
    }

    componentDidMount() {
        this._getElements();
    }

    _handleElement = e => {
        this.setState({ element: e.target.value });
    };

    _size = () => {
        const url = getApi() + '/stack_length';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ size: data.length }))
    };

    _top = () => {
        const url = getApi() + '/stack_top';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.error) {
                this.setState({ topError: true });
            } else {
                this.setState({ top: data.top, topError: false });
            }
        })
    };

    _pop = () => {
        const url = getApi() + '/stack_pop';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.error) {
                this.setState({ popError: true });
            } else {
                this.setState({ popped: data.popped, popError: false })
            }
        })
    };

    _getElements = () => {
        const url = getApi() + '/stack_elements';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ elements: data.elements }))
    };

    _finobacci = e => {
        e.preventDefault();
        const url = getApi() + '/finobacci';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json '},
            body: JSON.stringify({ e: this.state.element }),
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                this.setState({ successfullPush: true, elements: data.elements });
            }
        })
    };

    _closeSuccess = () => {
        this.setState({ successfullPush: false });
    };

    render() {
        const { elements, element, size, top, popped, successfullPush, popError, topError } = this.state;

        return (
            <Template>
                <div className='container' >
                    <div className='center-blue-heading'>FINOBACCI SERIES</div>
                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Finobacci Series'
                            onClick={ () => this._getElements() }
                        />
                        <List elements={ elements } />
                    </div>

                    <div style={ styles.container }>
                        <form onSubmit={ this._finobacci } >
                            <label style={ styles.label }>Enter Number of Terms</label>
                            <input required style={ styles.input } value={element } onChange={ this._handleElement } />
                            <input type='submit' className='blue-btn' value='Submit' />
                        </form>
                    </div>
                </div>
                <div style={{ height: 60 }}></div>
            </Template>
        );
    }
}


const List = ({ elements }) => {
    if(elements.length) {
        return (
            <ol>
            {
                elements.map((e, i) => (
                    <li key={ i } style={ styles.elements }>{ e }</li>
                ))
            }
            </ol>
        )
    } else {
        return (
            <div style={ styles.elements } >No Elements</div>
        )
    }
};


const styles = {
    container: {
        padding: 80,
        paddingTop: 20,
        paddingBottom: 10,
    },
    label: {
        marginRight: 5,
    },
    input: {
        height: 30,
        marginRight: 5,
    },
    elements: {
        display: 'inline-block',
        padding: 5,
        borderWidth: 5,
        borderColor: '#555',
    },
    error: {
        color: 'maroon'
    }
}


export default Finobacci;
