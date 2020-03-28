import React, { Component, Fragment } from "react";

class ProfileRight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container bootstrap snippet main-right">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#posts"
              role="tab"
              aria-controls="profile"
              aria-selected="false">
              Posts
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false">
              Contact
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane active" id="home">
            <hr></hr>
            <form
              className="form"
              action="##"
              method="post"
              id="registrationForm">
              <div className="form-group">
                <div className="row">
                  <div className="col-lg-6">
                    <label for="first_name">
                      <h4>First name</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      id="first_name"
                      placeholder="first name"
                      title="enter your first name if any."
                    />
                  </div>
                  <div className="col-lg-6">
                    <label for="last_name">
                      <h4>Last name</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      id="last_name"
                      placeholder="last name"
                      title="enter your last name if any."
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-lg-6">
                    <label for="phone">
                      <h4>Phone</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="enter phone"
                      title="enter your phone number if any."
                    />
                  </div>
                  <div className="col-lg-6">
                    <label for="mobile">
                      <h4>Mobile</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobile"
                      id="mobile"
                      placeholder="enter mobile number"
                      title="enter your mobile number if any."
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label for="email">
                      <h4>Email</h4>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="you@email.com"
                      title="enter your email."
                    />
                  </div>
                  <div className="col-lg-6">
                    <label for="email">
                      <h4>Location</h4>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="location"
                      placeholder="somewhere"
                      title="enter a location"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-lg-6">
                    <label for="password">
                      <h4>Password</h4>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="password"
                      title="enter your password."
                    />
                  </div>
                  <div className="col-lg-6">
                    <label for="password2">
                      <h4>Verify</h4>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password2"
                      id="password2"
                      placeholder="password2"
                      title="enter your password2."
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <br></br>
                  <button className="btn btn-lg btn-success" type="submit">
                    <i className="glyphicon glyphicon-ok-sign"></i> Save
                  </button>
                  <button className="btn btn-lg" type="reset">
                    <i className="glyphicon glyphicon-repeat"></i> Reset
                  </button>
                </div>
              </div>
            </form>
            <hr></hr>
          </div>
        </div>

        <style jsx>
          {`
            .main-right {
              margin-top: 30px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default ProfileRight;
