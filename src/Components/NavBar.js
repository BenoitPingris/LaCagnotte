import React from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		isOpen: false
	  };
	}

	toggle = () => {
	  this.setState({
		isOpen: !this.state.isOpen
	  });
	}

	render() {
		const titleStyle = {
			fontSize: '25px',
			textDecoration: 'none',
			textTransform: 'none'
		}
	  return (
		<div>
		  <Navbar color="light" light  expand="md">
		  	<Link to='/' style={{textDecoration: 'none'}}>
				<div style={titleStyle}>La Cagnotte</div>
			</Link>
			<NavbarToggler onClick={this.toggle} />
			<Collapse isOpen={this.state.isOpen} navbar>
			  <Nav className="ml-auto" navbar>
			  	<NavItem>
					  Ah !
				</NavItem>
				<NavItem>
					  Bh !
				</NavItem>
			  </Nav>
			</Collapse>
		  </Navbar>
		</div>
	  );
	}
  }
