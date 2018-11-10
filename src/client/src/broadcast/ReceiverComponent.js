import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { subscribeToMessages, disconnect } from '../socketApi';
import './ReceiverComponent.scss';

function MessageList({ messages = [] }) {
  const messageElements =
    messages.length > 0 ? (
      messages.map((msg, index) => (
        <ReactCSSTransitionGroup
          transitionName="message"
          transitionAppear={true}
          transitionAppearTimeout={100}
          transitionEnter={false}
          transitionLeave={false}
        >
          <li key={'message-' + index} className="message-line">
            {'>  ' + msg}
          </li>
        </ReactCSSTransitionGroup>
      ))
    ) : (
      <div className="pending-message">
        Pending for Messages
        <span className="animated-dot-1">.</span>
        <span className="animated-dot-2">.</span>
        <span className="animated-dot-3">.</span>
      </div>
    );
  return <ul className="messages-container">{messageElements}</ul>;
}

export default class ReceiverComponent extends Component {
  state = {
    messages: []
  };

  componentWillUnmount() {
    console.log('Logged out !');
    disconnect();
  }

  constructor(props) {
    super(props);
    subscribeToMessages((err, msg) => {
      this.setState(prevState => {
        prevState.messages.push(msg);
      });
      this.setState({ e: 'e' });
    });
  }

  render() {
    const { messages } = this.state;
    return <MessageList messages={messages} />;
  }
}
