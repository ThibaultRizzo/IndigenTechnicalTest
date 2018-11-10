import React, { Component } from 'react';
import { emitNotification, disconnect } from '../socketApi';
import ReceiverComponent from './ReceiverComponent';

export default class EmitterForm extends Component {
  state = {
    notification: ''
  };
  constructor(props) {
    super(props);

    // Methods bindings
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    emitNotification(this.state.notification);
    this.setState({
      notification: ''
    });
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({
      notification: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.notification}
          />
          <button type="submit">Send Notification</button>
        </form>
        <ReceiverComponent />
      </div>
    );
  }
}
