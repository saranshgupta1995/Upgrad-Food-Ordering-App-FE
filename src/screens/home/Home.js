import "./Home.css";
import React from "react";
import Header from "../../common/header";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Input, Button } from "@material-ui/core";

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
        end={
          <Button
            startIcon={<AccountCircleIcon></AccountCircleIcon>}
            className="login-btn"
            variant="contained"
            color="default"
          >
            Login
          </Button>
        }
      ></Header>
    );
  }
}

export default Home;
