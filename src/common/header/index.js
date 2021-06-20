import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Input, Button } from "@material-ui/core";
import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import "./style.css";
import Modal from "../../common/modal";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { LOGIN_MODAL_TABS } from "../../common/js/constants";

import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import { get, post } from "../js/api";

const TabContainer = function(props) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loginTabValue: 0,
      isLoginModalOpen: false,
      loginFormData: {},
      showAuth: false,
      signupFormData: {},
      showErrors: false
    };
  }

  onAuthFormSubmit = form => {
    const stateField = `${form}FormData`;

    const formFieldsData = this.state[stateField];

    this.setState({
      showErrors: true
    });
    if (form === "login") {
      fetch("http://localhost:8080/api/customer/login", {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            window.btoa(
              formFieldsData.username + ":" + formFieldsData.password
            ),
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        }
      }).then(resp => {
        resp.json().then(x => {
          sessionStorage.setItem("uuid", x.id);
          sessionStorage.setItem(
            "access-token",
            resp.getResponseHeader("access-token")
          );
          sessionStorage.setItem("first-name", x.first_name);
        });
      });
      return;
    }

    post[form](formFieldsData);
  };

  setFieldData = (form, name, value) => {
    this.setState(prevState => {
      const stateField = `${form}FormData`;
      return {
        [stateField]: {
          ...prevState[stateField],
          [`${name}`]: value
        },
        showErrors: false
      };
    });
  };

  field = (form, data) => {
    const { showErrors } = this.state;
    const elements = [];
    const fieldValue = (this.state[`${form}FormData`] || {})[`${data.id}`];
    switch (data.type) {
      case "text":
      case "password":
        elements.push(
          <FormControl key={`${form}-${data.id}`}>
            <InputLabel htmlFor={data.id}>
              {data.label} {data.required && "*"}
            </InputLabel>
            <Input
              onChange={e =>
                this.setFieldData(form, data.id, e.nativeEvent.target.value)
              }
              value={fieldValue}
              id={data.id}
              type={data.type}
            />
            {showErrors && data.required && !fieldValue && (
              <FormHelperText error={true}>required</FormHelperText>
            )}
          </FormControl>
        );
        break;

      default:
        break;
    }
    return elements;
  };

  tabChangeHandler = (event, loginTabValue) => {
    this.setState({ loginTabValue, showErrors: false });
  };

  render() {
    const { middle } = this.props;
    const { loginTabValue, showAuth } = this.state;

    const activeLoginTab = LOGIN_MODAL_TABS[loginTabValue];

    return (
      <header className="header">
        {showAuth && (
          <Modal isOpen className="user-auth-flows">
            <Tabs
              centered
              value={loginTabValue}
              onChange={this.tabChangeHandler}
            >
              {LOGIN_MODAL_TABS.map(tab => (
                <Tab key={tab.name} label={tab.name} />
              ))}
            </Tabs>
            <TabContainer>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  this.onAuthFormSubmit(activeLoginTab.name);
                }}
              >
                {activeLoginTab.fields.map(data =>
                  this.field(activeLoginTab.name, data)
                )}

                <br />
                <br />
                <Button
                  type="submit"
                  className="form-submit-btn"
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </form>
            </TabContainer>
          </Modal>
        )}
        <div>
          <FastfoodIcon />
        </div>
        {middle}
        <Button
          startIcon={<AccountCircleIcon></AccountCircleIcon>}
          className="login-btn"
          variant="contained"
          color="default"
          onClick={() => {
            this.setState({ showAuth: true });
          }}
        >
          Login
        </Button>
      </header>
    );
  }
}

export default Header;
