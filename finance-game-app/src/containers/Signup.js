import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel, 
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Signup.css";
import {
  AuthenticationDetails,
  CognitoUserPool
} from "amazon-cognito-identity-js";
import config from "../config";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null, 
      touched: {
        email: false, 
        password: false,
        confirmPassword: false,
      },
    };
  }

  validateForm() {
    var emailPattern = /[a-zA-Z0-9]+@mail.umw.edu/; 
    var passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return (
      this.state.email.length > 0 &&
      emailPattern.test(this.state.email) &&
      this.state.password.length > 7 &&
      passwordPattern.test(this.state.password) &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateEmail(){
    var emailPattern = /[a-zA-Z0-9]+@mail.umw.edu/; 
    return (
      this.state.email.length > 0 &&
      emailPattern.test(this.state.email) 
    );
  }

  validatePassword(){
    var passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return (
      this.state.password.length > 7 &&
      passwordPattern.test(this.state.password)
    );
  }

  validateConfirm(){
    return(
        this.state.password === this.state.confirmPassword && 
        this.validatePassword());
  }

  getEmailValidationState(){
    var value = this.validateEmail();  
    if(value === true){
      return "success"; 
    } else if (value === false && this.state.touched["email"] && this.state.email.length > 0){
      return "error"; 
    }  else {
      return null;
    }
  }

  getPassValidationState(){
    var value = this.validatePassword();  
    if(value === true){
      return "success"; 
    } else if (value === false && this.state.touched["password"] && this.state.password.length > 0){
      return "error"; 
    } else {
      return null;
    }
  }

  getConfValidationState(){
    var value = this.validateConfirm();  
    if(value === true){
      return "success"; 
    } else if (value === false && this.state.touched["confirmPassword"] && this.state.confirmPassword.length > 0){
      return "error"; 
    } else {
      return null; 
    }
  }  

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true},
    });
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

handleSubmit = async event => {
  event.preventDefault();

  this.setState({ isLoading: true });

  try {
    const newUser = await this.signup(this.state.email, this.state.password);
    this.setState({
      newUser: newUser
    });
  } catch (e) {
    alert("Error in handleSubmit");
  }

  this.setState({ isLoading: false });
}

handleConfirmationSubmit = async event => {
  event.preventDefault();

  this.setState({ isLoading: true });

  try {
    await this.confirm(this.state.newUser, this.state.confirmationCode);
    await this.authenticate(
      this.state.newUser,
      this.state.email,
      this.state.password
    );

    this.props.userHasAuthenticated(true, this.state.email);
    localStorage.setItem('currentUserEmail', this.state.email); 
    this.props.history.push("/dashboard");
  } catch (e) {
    alert("Error in handleConfirmationSubmit");
    this.setState({ isLoading: false });
  }
}

signup(email, password) {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });

  return new Promise((resolve, reject) =>
    userPool.signUp(email, password, [], null, (err, result) => {
      if (err) {
        reject(err);
        alert("Error in Signup Promise"); 
        return;
      }
      resolve(result.user);
    })
  );
}

confirm(user, confirmationCode) {
  return new Promise((resolve, reject) =>
    user.confirmRegistration(confirmationCode, true, function(err, result) {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    })
  );
}

authenticate(user, email, password) {
  const authenticationData = {
    Username: email,
    Password: password
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  return new Promise((resolve, reject) =>
    user.authenticateUser(authenticationDetails, {
      onSuccess: result => resolve(),
      onFailure: err => reject(err)
    })
  );
}

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Verify"
          loadingText="Verifying…"
        />
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large" validationState={this.getEmailValidationState()}>
          <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.handleBlur('email')}
            />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large" validationState ={this.getPassValidationState()}>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            onBlur={this.handleBlur('password')}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large" validationState ={this.getConfValidationState()}>
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            onBlur={this.handleBlur('confirmPassword')}
          />
          <FormControl.Feedback />
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        />
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}