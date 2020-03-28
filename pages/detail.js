import React, { Component } from 'react';
import Layout from '../components/Layout';
import PostDetail from '../components/PostDetail';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Layout>
                <PostDetail />
            </Layout>
         );
    }
}
 
export default Detail;