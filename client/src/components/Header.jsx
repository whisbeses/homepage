import React, { Component } from 'react';
import logo from '../../../logo.png'
// import Navbar from 'react-bootstrap/Navbar';


// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }

//   render() {
//     let icon = (
//       <span class="logo">
//         <a href="/">
//           <img src={logo} height="33" width="120" alt="text here" /></a>
//       </span>
//     );
//     return (
//       <div>
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//           <Navbar.Brand href="#home">Whishbees</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="#post">Post</Nav.Link>
//               <Nav.Link href="#game">Game</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     )
//   }
// }


import {
  Navbar,
  NavbarBrand,
  NavLink} from 'reactstrap';

 class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let icon = (
      <span class="logo">
      <a href="/">
        <img src={logo} width="10" alt="Whishbees" /></a>
      </span>
    );
    return (
      <div className="navBar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{icon}</NavbarBrand>
          <div className="pageOptions">
            <NavLink href="/posts/">Post</NavLink>
            <NavLink href="/game/">Game</NavLink>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;