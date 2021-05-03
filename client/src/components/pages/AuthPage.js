import React, { useState } from "react";
import NavBar from "../NavBar";
import "./AuthPage.css";
import { GoogleLogin } from "react-google-login";
import { Button, Paper, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import * as API from "../api/index";
import dotenv from "dotenv";

const formReset = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
};

function AuthPage() {
  dotenv.config();
  const history = useHistory();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formData, setFormData] = useState(formReset);

  const ResponseSuccessGoogle = async (response) => {
    const result = response.profileObj;
    const token = response.tokenId;
    console.log("result", result);
    try {
      localStorage.setItem("userInfo", JSON.stringify({ result, token }));
      history.push("/Feed");
    } catch (error) {
      console.log(error);
    }
  };

  const ResponseFailedGoogle = (response) => {
    console.log(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignInForm) {
      try {
        // verify user
        const { data } = await API.signIn(formData);
        localStorage.setItem("userInfo", JSON.stringify({ data }));
        console.log({ data });
        history.push("/Feed");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // sign user up
        const { data } = await API.signUp(formData);
        console.log({ data });
        localStorage.setItem("userInfo", JSON.stringify({ data }));

        // go back to login
        setIsSignInForm(!isSignInForm);
      } catch (error) {
        console.log(error);
      }
    }
    // reset form after submitting
    e.target.reset();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <NavBar />

      <Paper elevation={10} className="auth-form-container">
        <i className="fas fa-lock"></i>

        <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <TextField
            id="auth-email"
            name="email"
            fullWidth
            label="Email Address"
            variant="outlined"
            required
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            fullWidth
            id="auth-password"
            name="password"
            type="password"
            label="Password"
            required
            onChange={handleChange}
          />

          {!isSignInForm && (
            <div className="auth-name-container">
              <TextField
                id="auth-first-name"
                name="firstName"
                label="First Name"
                variant="outlined"
                required
                onChange={handleChange}
              />

              <TextField
                id="auth-last-name"
                name="lastName"
                label="Last Name"
                variant="outlined"
                required
                onChange={handleChange}
              />
            </div>
          )}

          {!isSignInForm && (
            <TextField
              id="auth-phone"
              name="phone"
              fullWidth
              label="Phone Number"
              variant="outlined"
              onChange={handleChange}
            />
          )}

          <div className="sign-button-container">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              {isSignInForm ? "Sign In" : "Sign Up"} With Email
            </Button>
          </div>

          <div className="google-button-container">
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth
                  startIcon={<i className="fab fa-google"></i>}
                >
                  SIGN IN WITH GOOGLE
                </Button>
              )}
              buttonText="Login"
              onSuccess={ResponseSuccessGoogle}
              onFailure={ResponseFailedGoogle}
              cookiePolicy={"single_host_origin"}
              className="google-login-container"
            />
          </div>

          <div className="auth-sign-switch-container">
            <Button size="small" onClick={() => setIsSignInForm(!isSignInForm)}>
              {isSignInForm
                ? "Dont have an account? Sign Up"
                : "Have an account? Sign In"}
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default AuthPage;
