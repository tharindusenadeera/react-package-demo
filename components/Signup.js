import React, { Component, Fragment } from "react";
import { Cookies } from "react-cookie";
import Router from "next/router";
import firebaseConfig from "../libs/db";
import { async } from "rxjs/internal/scheduler/async";

// set up cookies
const cookies = new Cookies();
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: cookies.get("token") || null,
      errorMessage: ""
    };
  }

  handleRegister = () => {
    const { email, password } = this.state;
    firebaseConfig
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        res => {
          const token = res && res.user.uid;
          cookies.set("token", token);
          this.setState(
            {
              token: token
            },
            () => {
              Router.push("/");
            }
          );
        },
        error => {
          this.setState({ errorMessage: error.message }, () => {
            setTimeout(() => {
              this.setState({ errorMessage: "" });
            }, 3000);
          });
        }
      );
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <main className="login-form">
        <div className="cotainer">
          <div className="row justify-content-center">
            <div className="col-md-8 align-self-center">
              <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                  <div className="form-group row">
                    <label
                      htmlFor="email_address"
                      className="col-md-4 col-form-label text-md-right">
                      E-Mail Address
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        id="email_address"
                        className="form-control"
                        name="email-address"
                        required
                        autoFocus
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      htmlFor="password"
                      className="col-md-4 col-form-label text-md-right">
                      Password
                    </label>
                    <div className="col-md-6">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        required
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6 offset-md-4">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="remember" /> Remember Me
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 offset-md-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => this.handleRegister()}>
                      Register
                    </button>
                    <a href="#" className="btn btn-link">
                      Forgot Your Password?
                    </a>
                  </div>
                  {/* Error Alert */}
                  {errorMessage ? (
                    <div className="error-message">
                      <div className="alert alert-danger alert-dismissible fade show">
                        <strong>Error!</strong> {errorMessage}
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert">
                          &times;
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Fragment />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>

        <style jsx>
          {`
            .login-form {
              font-family: Raleway, sans-serif;
            }

            .my-form {
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;
            }

            .my-form .row {
              margin-left: 0;
              margin-right: 0;
            }

            .login-form {
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;
            }

            .login-form .row {
              margin-left: 0;
              margin-right: 0;
            }
          `}
        </style>
      </main>
    );
  }
}

export default Signup;
