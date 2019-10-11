import React, { Component } from 'react';
import Template from './Template';
import { getApi } from '../data/url';


class LinkedList extends Component {
    state = {
        elements: [],
        element: '',
        last_element: '',
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

    _handleLastElement = e => {
        this.setState({ last_element: e.target.value });
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
        const url = getApi() + '/list_elements';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ elements: data.elements }))
    };

    _addFirst = e => {
        e.preventDefault();
        const url = getApi() + '/add_first';
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

    _deleteFirst = () => {
        const url = getApi() + '/delete_first';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json '},
            body: JSON.stringify({ e: this.state.element }),
        })
        .then(response => response.json())
        .then(data => {
                this.setState({elements: data.elements });
        })
    };

    _deleteLast = () => {
        const url = getApi() + '/delete_last';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json '},
            body: JSON.stringify({ e: this.state.element }),
        })
        .then(response => response.json())
        .then(data => {
                this.setState({elements: data.elements });
        })
    };

    _addLast = e => {
        e.preventDefault();
        const url = getApi() + '/add_last';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json '},
            body: JSON.stringify({ e: this.state.last_element }),
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
        const { elements, element, size, last_element, top, popped, successfullPush, popError, topError } = this.state;

        return (
            <Template>
                <div className='container' >
                    { successfullPush && 
                        <div className='top-success' onClick={ () => this._closeSuccess() } >
                        Succeesfully added to the list</div>
                    }
                    <div className='center-blue-heading'>LIST ADT</div>
                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Current Elements'
                            onClick={ () => this._getElements() }
                        />
                        <List elements={ elements } />
                    </div>

                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Delete First'
                            onClick={ () => this._deleteFirst() }
                        />
                        <div>{ size }</div>
                    </div>

                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Delete Last'
                            onClick={ () => this._deleteLast() }
                        />
                        <div>{ size }</div>
                    </div>

                    <div style={ styles.container }>
                        <form onSubmit={ this._addFirst } >
                            <label style={ styles.label }>Enter Element</label>
                            <input required style={ styles.input } value={element } onChange={ this._handleElement } />
                            <input type='submit' className='blue-btn' value='Add First' />
                        </form>
                    </div>

                    <div style={ styles.container }>
                        <form onSubmit={ this._addLast } >
                            <label style={ styles.label }>Enter Element</label>
                            <input required style={ styles.input } value={last_element} onChange={ this._handleLastElement } />
                            <input type='submit' className='blue-btn' value='Add Last' />
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


export default LinkedList;
