import "./Home.css";
import React from "react";
import Header from "../../common/header";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Input, Button } from "@material-ui/core";
import Modal from "../../common/modal";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { LOGIN_MODAL_TABS } from "../../common/js/constants";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loginTabValue: 0,
      isLoginModalOpen: true
    };
  }
  tabChangeHandler = (event, loginTabValue) => {
    this.setState({ loginTabValue });
  };

  render() {
    const { loginTabValue, isLoginModalOpen } = this.state;
    return (
      <>
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
        <Modal isOpen={isLoginModalOpen}>
          <Tabs value={loginTabValue} onChange={this.tabChangeHandler}>
            {LOGIN_MODAL_TABS.map(tab => (
              <Tab key={tab.name} label={tab.name} />
            ))}
          </Tabs>
        </Modal>
      </>
    );
  }
}
export default Home;
