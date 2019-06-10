import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      posts: []
    }
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    axios.get('/api/posts')
      .then((response) => {
        console.log('Get request send to the server', response.data);
        this.setState({
          posts: response.data,
        })
      })
      .catch((error) => {
        console.log('Oops! something went wrong', error)
      })
  }

  render() {
    const { posts } = this.state;
    if (posts !== []) {
      console.log('posts: ', posts);
      return (
        <div className="home-container">
          <Header />
          {/* <Feed posts = {posts} /> */}
          {/* <Header />
          <Content />
          <Footer nameForClass={"home-footer"}/> */}
        </div>
      )
    }
  }
}

export default Home;