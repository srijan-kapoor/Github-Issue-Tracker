import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="primary-header">
        <div onClick={this.props.click} className="logo">
          <h1>github issue tracker</h1>
        </div>
        <div className="input-box">
          <input
            className="input-text"
            type="text"
            value={this.props.inputValue}
            onKeyPress={this.props.enter}
            onChange={this.props.cb}
            placeholder="username/repo"
          />
          <button onClick={this.props.click}>search</button>
        </div>
      </header>
    );
  }
}

export default Header;
