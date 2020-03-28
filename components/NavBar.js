import React, { Component, Fragment } from "react";
import { Cookies } from "react-cookie";
import Router from "next/router";

const cookies = new Cookies();
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: cookies.get("token")
    };
  }

  render() {
    const { token } = this.state;
console.log("always", cookies.get("token"));

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          React Package Demo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav form-inline ml-auto">
            {!token ? (
              <Fragment>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Signup
                  </a>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/posts">
                    Posts
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link logouts"
                    onClick={() =>
                      this.setState({ token: null }, () => {
                        cookies.remove("token");
                        Router.push("/");
                      }
                      )
                    }>
                    Logout
                  </button>
                </li>
              </Fragment>
            )}
          </ul>
        </div>

        <style jsx>
          {`
            .logouts {
              background-color: unset;
              border: unset;
            }
          `}
        </style>
      </nav>
    );
  }
}

export default NavBar;
