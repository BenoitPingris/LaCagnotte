import React, { Component } from 'react'
import Error from './Error';
import data from '../assets/db2.json';
import { Container, Card, CardImg, CardTitle, CardBody, Progress, Row, Col } from 'reactstrap';

export default class ItemVue extends Component {
	componentDidMount = () => {
	  document.title = `${this.props.match.params.name}`;
	}

	getItemFromName = (name) => {
		for (const el of data) {
			if (el.title.toLowerCase() === name.toLowerCase())
				return el;
		}
		return null;
	}

	render() {
		const productName = this.props.match.params.name;
		const product = this.getItemFromName(productName);

		return (
			<div style={{marginTop: '25px'}}>
				<Container>
					{!product && <Error />}
					{product &&
					<Row>
						<Col md={{size: '8', offset:'2'}} xs='12'>
							<Card>
								<CardImg src={product.img}/>
								<CardTitle style={{textAlign: 'center'}}>{product.title}</CardTitle>
								<Progress style={{height: "2em", fontSize: "17px"}}value={product.progress}><b>{product.progress}%</b></Progress>
								<CardBody>{product.desc}</CardBody>
							</Card>
						</Col>
					</Row>}
				</Container>
			</div>
		);
	}
}
