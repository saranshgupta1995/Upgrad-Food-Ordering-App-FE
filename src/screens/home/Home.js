import "./Home.css";
import React from "react";
import Header from "../../common/header";
import SearchIcon from "@material-ui/icons/Search";
import { Input } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <Header
        middle={
          <div className="search-box">
            <Input type="text" placeholder="Search by Restaurant Name" />
            <SearchIcon />
          </div>
        }
        end={<button class="login-btn">Login</button>}
      ></Header>
    );
  }
}

export default Home;
