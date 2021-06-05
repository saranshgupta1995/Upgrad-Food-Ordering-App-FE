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
import FormHelperText from "@material-ui/core/FormHelperText";
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

    console.log(formFieldsData);
  };

  setFieldData = (form, name, value) => {
    this.setState(prevState => {
      const stateField = `${form}FormData`;
      return {
        [stateField]: {
          ...prevState[stateField],
          [`${form}-${name}`]: value
        },
        showErrors: false
      };
    });
  };

  field = (form, data) => {
    const { showErrors } = this.state;
    const elements = [];
    const fieldValue = (this.state[`${form}FormData`] || {})[
      `${form}-${data.id}`
    ];
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
              <FormHelperText error={true}>
                required
              </FormHelperText>
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
          <Tabs centered value={loginTabValue} onChange={this.tabChangeHandler}>
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
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </form>
          </TabContainer>
        </Modal>
      </>
    );
  }
}
export default Home;
