import React from "react";
import "./style.css";

class Header extends React.Component {
  render() {
    const { middle, end } = this.props;
    return (
      <header className="header">
        <div></div>
        {middle && <div></div>}
        {end && <div></div>}
      </header>
    );
  }
}

export default Header;
