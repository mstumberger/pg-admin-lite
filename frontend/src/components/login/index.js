/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/10/16.
 */

import React, {Component} from 'react';

// Libraries
import {browserHistory} from 'react-router';

// Utils
import {storage} from '../../utils'

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();

    // Persist data to localStorage 
    storage.set({'db-username': this.refs.username.value});
    storage.set({'db-password': this.refs.password.value});
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="valign-wrapper">
        <div className="container valign">
          <div className="row">
            <div className="col s3">
            </div>
            <div className="col s6 z-depth-4">
              <h4 className="center">pg-admin</h4>
              <form className="col s12" onSubmit={this.onSubmitForm}>
                <div className="row">
                  <div className="col s12">
                    <div className="input-field col s12">
                      <input ref="username" id="username" type="text" className="validate"/>
                      <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field col s12">
                      <input ref="password" id="password" type="password" className="validate"/>
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s12">
                      <button className="btn waves-effect waves-light right app-color" type="submit" name="action">
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;