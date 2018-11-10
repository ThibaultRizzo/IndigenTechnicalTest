import React from 'react';

function MessageList({ messages = [] }) {
  const messageElements = messages.map((msg, index) => (
    <li key={'message-' + index}>{msg}</li>
  ));
  return <ul>{messageElements}</ul>;
}

export { MessageList };
