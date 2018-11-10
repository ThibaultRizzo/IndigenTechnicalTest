import React, { Component } from 'react';
import { emitNotification } from '../socketApi';
import './EmitterComponent.scss';

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
      <form className="input-section" onSubmit={this.onSubmit}>
        <label htmlFor="notification">Notify All Connected Users:</label>
        <input
          id="notification"
          type="text"
          className="notification-input"
          onChange={this.onInputChange}
          value={this.state.notification}
        />
        <button type="submit" className="notification-button">
          Send
        </button>
      </form>
    );
  }
}
