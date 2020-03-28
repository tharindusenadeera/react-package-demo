import React, { Component, Fragment } from "react";

class ProfileLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

        <div className="container bootstrap snippet main-left">
          <div className="row justify-content-center align-self-center">
            <div className="text-center">
              <h1>User name</h1>
            </div>
          </div>
          <div className="row justify-content-center align-self-center">
            <div className="text-center">
              <img
                src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                className="avatar rounded-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <div className="input-file">
              <input
                type="file"
                className="text-center center-block file-upload"
              />
              </div>
            </div>
          </div>
          <br></br>
          <div className="row justify-content-center">
            <div className="col-8">
              <ul className="list-group">
                <li className="list-group-item">
                  Activity
                </li>
                <li className="list-group-item">
                  <span className="float-left">
                    <strong>Posts</strong>
                  </span>{" "}
                  <span className="float-right">37</span>
                </li>
              </ul>
            </div>
          </div>

          <style jsx>
              {`
              .main-left {
                  margin-top: 30px;
              }

              .input-file {
                margin-top: 30px;
              }
              `}
          </style>
        </div>

    );
  }
}

export default ProfileLeft;
