import React from 'react';

class Nav extends React.Component {
    render() {
      return (
        <form>
            <label for="message_area">No more than 100 characters</label>
            <br />
            <label type="checkbox"></label>
            <br />
            <textarea id="message_area" placeholder="Enter your SMS message" maxlength="160" rows="6" cols="70"></textarea>
            <br />
            <button>SEND</button>
        </form>
      );
    }
  };


export default Nav