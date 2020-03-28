import React, { Component } from "react";
import { Cookies } from "react-cookie";
import dynamic from 'next/dynamic';
import firebaseConfig from "../libs/db";

const importJodit = () => import('jodit-react');
const JoditEditor = dynamic(importJodit, {
    ssr: false,
});
const config = {
  readonly: false
}
// set up cookies
const cookies = new Cookies();
class AddPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      title: "",
      error: false,
      submitting: false
    };
  }

  handleSubmit = () => {
    const { description, title } = this.state;

    if(!description){
      this.setState({ error: true, submitting: false});
      return false;
    } else if (!title) {
      this.setState({ error: true, submitting: false});
      return false;
    }

    const uid = cookies.get("token");
    const obj = {
      description: description,
      title: title,
      uid: uid
    }

    console.log("object", obj);

    firebaseConfig.database().ref('/posts').push({
      done: false,
      post: obj
    })
    .then(res => {
      console.log("res", res);
      
    })
    
  }

  render() {
    const { description, submitting } = this.state;
    
    return (
      <div className="container">
        <div className="title">
          <h3>Create a new post</h3>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Post Title" onChange={e => this.setState({title: e.target.value})}/>
          </div>
          <div className="editor">
            <JoditEditor
              value={description}
              config={config}
              tabIndex={1} // tabIndex of textarea
              //onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={newContent => this.setState({ description : newContent})}
            />
          </div>
          <div className="submit-button">
          <button type="button" className="btn btn-primary btn-sm float-right" disabled={submitting} onClick={() => this.handleSubmit()}>submit</button>
          </div>

        <style jsx>
          {`
            .constainer {
              display: flex;
            }

            .title {
              text-align: center;
              padding-top: 30px;
              font-weight: 300;
              padding-bottom: 50px;
            }

            .submit-button {
              padding-top: 20px;
            }

          `}
        </style>
      </div>
    );
  }
}

export default AddPosts;
