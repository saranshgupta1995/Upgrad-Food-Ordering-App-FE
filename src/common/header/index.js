import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import "./style.css";

class Header extends React.Component {
  render() {
    const { middle, end } = this.props;
    return (
      <header className="header">
        <div>
          <FastfoodIcon />
        </div>
        {middle && <div></div>}
        {end && <div></div>}
      </header>
    );
  }
}

export default Header;
