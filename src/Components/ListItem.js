import React, { Component } from 'react'
import Item from './Item';
import { Container, Row, Input } from 'reactstrap';
import data from '../assets/db2.json';

export default class ListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: null,
			value: ''
		};
	}


	componentDidMount = () => {
		this.setState({items: data});
		document.title = 'La Cagnotte';
	}

	handleChange = e => {
		this.setState({
			value: e.target.value
		});
	}

	render() {
		return (
			<div>
				<Container>
					<Input style={{marginTop: '15px', fontSize: '20px'}} value={this.state.value} placeholder="Chercher un prix" onChange={this.handleChange} />
					<Row>
						{
							this.state.items && this.state.items
								.filter((item) => this.state.value === '' || item.title.toLowerCase().includes(this.state.value.toLowerCase().trim()))
								.map((item, index) => <Item key={index} item={item} index={index}/>)
						}
					</Row>
				</Container>
			</div>
		);
	}
}
