import React from 'react';
import ReactDOM from 'react-dom';
//importing history
import history from '../history';

const Modal = () => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standart modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div className="actions">
          <button className="ui negative button">
            Delete
          </button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;