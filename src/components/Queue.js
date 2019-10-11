import React, { Component } from 'react';
import Template from './Template';
import { getApi } from '../data/url';


class Queue extends Component {
    state = {
        elements: [],
        element: '',
        queueSize: '',
        listSize: '',
        isEmpty: '',
        isFull: '',
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

    _queueSize = () => {
        const url = getApi() + '/queue_size';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ queueSize: data.size }))
    };

    _listSize = () => {
        const url = getApi() + '/queue_list_size';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ listSize: data.size }))
    };

    _isEmpty = () => {
        const url = getApi() + '/queue_is_empty';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ isEmpty: data.is_empty }))
    };

    _isFull = () => {
        const url = getApi() + '/queue_is_full';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ isFull: data.is_full }))
    };

    _dequeue = () => {
        const url = getApi() + '/queue_dequeue';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.error) {
                this.setState({ popError: true });
            } else {
                this.setState({ popped: data.element, popError: false })
            }
        })
    };

    _getElements = () => {
        const url = getApi() + '/queue_elements';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ elements: data.elements }))
    };

    _enqueue = e => {
        e.preventDefault();
        const url = getApi() + '/queue_enqueue';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json '},
            body: JSON.stringify({ e: this.state.element }),
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                this.setState({ successfullPush: true, element: '' });
            }
        })
    };

    _closeSuccess = () => {
        this.setState({ successfullPush: false });
    };

    render() {
        const { elements, element, queueSize, listSize, top, popped, successfullPush, popError, topError,
        isEmpty, isFull } = this.state;

        return (
            <Template>
                <div className='container' >
                    { successfullPush && 
                        <div className='top-success' onClick={ () => this._closeSuccess() } >
                        Succeesfully Pushed Element Into The Queue</div>
                    }
                    <div className='center-blue-heading'>QUEUE ADT</div>
                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Current Elements'
                            onClick={ () => this._getElements() }
                        />
                        <List elements={ elements } />
                    </div>

                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Size of Queue'
                            onClick={ () => this._queueSize() }
                        />
                        <div>{ queueSize }</div>
                    </div>

                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Size of List'
                            onClick={ () => this._listSize() }
                        />
                        <div>{ listSize }</div>
                    </div>

                    <div style={ styles.container }>
                        <form onSubmit={ this._enqueue } >
                            <label style={ styles.label }>Enter Element</label>
                            <input required style={ styles.input } value={element } onChange={ this._handleElement } />
                            <input type='submit' className='blue-btn' value='Enqueue' />
                        </form>
                    </div>

                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Dequeue'
                            onClick={ () => this._dequeue() }
                        />
                        {
                            popError ? <div style={ styles.error }>Error: You tried to dequeue from an empty queue</div> :
                            <div>{ popped }</div>
                        }
                    </div>

                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Is Queue Empty'
                            onClick={ () => this._isEmpty() }
                        />
                        <div>
                            {
                                isEmpty === true? 'True' : isEmpty === false? 'False': ''
                            }
                        </div>
                    </div>

                    <div style={ styles.container }>
                        <input type='button' className='blue-btn' value='Is Queue Full'
                            onClick={ () => this._isFull() }
                        />
                        <div>
                            {
                                isFull === true? 'True' : isFull === false? 'False': ''
                            }
                        </div>
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


export default Queue;
