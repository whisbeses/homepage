import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render() {
    return (
      <div className="home-container">
        <Header />
        {/* <Header />
        <Content />
        <Footer nameForClass={"home-footer"}/> */}
      </div>
    )
  }
}

export default Home;