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

import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const TabContainer = function(props) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loginTabValue: 0,
      isLoginModalOpen: true,
      loginFormData: {},
      signupFormData: {}
    };
  }

  setFieldData = (form, name, value) => {
    this.setState(prevState => {
      const stateField = `${form}FormData`;
      return {
        [stateField]: {
          ...prevState[stateField],
          [name]: value
        }
      };
    });
  };
  
  tabChangeHandler = (event, loginTabValue) => {
    this.setState({ loginTabValue });
  };

  render() {
    const { loginTabValue, isLoginModalOpen } = this.state;

    const activeLoginTab = LOGIN_MODAL_TABS[loginTabValue];

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
        <Modal isOpen={isLoginModalOpen} className="user-auth-flows">
          <Tabs value={loginTabValue} onChange={this.tabChangeHandler}>
            {LOGIN_MODAL_TABS.map(tab => (
              <Tab key={tab.name} label={tab.name} />
            ))}
          </Tabs>
          <TabContainer>
            <FormControl required>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" type="text" />
            </FormControl>

            <FormControl required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" />
            </FormControl>
          </TabContainer>
        </Modal>
      </>
    );
  }
}
export default Home;
