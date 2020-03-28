import React, { Component, Fragment } from "react";
import firebaseConfig from "../libs/db";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: []
    };
  }

  componentDidMount(){
    firebaseConfig.database().ref('/posts').on('value', snapshot => {
      const items = snapshot.val();
      let newItemList = [];

      for(let item in items){
        newItemList.push({
          id: item,
          uid: items[item].post.uid,
          title: items[item].post.title,
          description: items[item].post.description
        })
      }

      this.setState({
        itemList: newItemList
      })
      
    })
  }

  render() {
    const { itemList } = this.state;
    
    return (
      <div className="container">
        {itemList.map((item, key) => {
          return(
            <a href="/detail">
            <div className="card flex-row">
              <img
                className="react-img"
                src="https://cdn.auth0.com/blog/react-js/react.png"
                alt="react-logo"
                width="100%"
              />
              <div className="content">
                <h2>{item.title}</h2>
                <div
                dangerouslySetInnerHTML={{ __html: item.description}}
                ></div>
              </div>
            </div>
          </a>
          )
        })}
        <style jsx>
          {`
            .container {
              align-item: center;
            }

            .card {
              box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
              transition: 0.3s;
              display: flex;
              padding: 20px;
              margin: 50px;
              color: black;
              text-decorator: none;
            }

            .content {
              margin-left: 20px;
            }
            .react-img {
              width: 100px;
              height: 100px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default ItemList;
