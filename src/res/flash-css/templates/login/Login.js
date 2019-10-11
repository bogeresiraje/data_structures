import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { NetworkError } from '../NetworkError';
import { getApi } from '../../../../data/url';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loadingBarProgress: 0,
            username: '',
            password: '',
        };
    }

    _submit = e => {
        e.preventDefault();
        this.setState({ loadingBarProgress: 25 });
        const { username, password } = this.state;
        const url = getApi() + '/login_admin';
        fetch(url, { method: 'POST', body: JSON.stringify({ username: username, password: password }),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
        .then(response => {
            this.setState({ loadingBarProgress: 90 });
            return response.json()
        })
        .then(data => {
            if(data.success) {
                this.props.history.push('/home');
            } else if(data.wrong_credentials) {
                this.setState({ wrongCredentials: true, loadingBarProgress: 100 });
            } else {
                this.setState({ error: true, loadingBarProgress: 100 });
            }
        })
        .catch(() => this.setState({ error: true, loadingBarProgress: 100 }) )
    };

    _onLoaderFinished = () => { this.setState({ loadingBarProgress: 0 }) };

    render() {
        const { error, loadingBarProgress } = this.state;

        if(error) {
            return <NetworkError />;

        } else {
            return (
                <div>
                    <LoadingBar
                        progress={ loadingBarProgress }
                        height={ 2 }
                        color='red'
                        onLoaderFinished={ () => this._onLoaderFinished() }
                    />

                    <div className='login-wrap'>
                    <div className='login-html'>
                        <form className='login-form' onSubmit={ this._submit } >
                            <div className='group' >
                                <label htmlFor='username' className='label' >Username</label>
                                <input type='text' id='username' className='input' required />
                            </div>

                            <div className='group' >
                                <label htmlFor='password' className='label' >Password</label>
                                <input type='password' id='password' className='input' required />
                            </div>

                            <div className='group' >
                                <input type='submit' className='button' value='LOG IN' />
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            );
        }
    }
}
