import React from 'react';
import './BackCall.less';
function BackCall() {
  return (
    <div className="backCall-container">
      <h1 className="backCall-title">We will call you in 24 hours</h1>
      <form className="backCall-form">
        <div className="backCall-inputWrapper">
          <input
            className="backCall-input"
            type="text"
            placeholder="write your name"
          />
          <input
            className="backCall-input"
            type="text"
            placeholder="write your phone number"
          />
        </div>
        <button className="backCall-button" type="submit">
          Order call
        </button>
      </form>
    </div>
  );
}

export default BackCall;
