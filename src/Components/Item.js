import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg,  CardBody,
		CardTitle, Col, Progress } from 'reactstrap';


export default class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tooltipOpen: false
		};
	}

	toggle = () => {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen,
			hover: false
		});
	}

	toggleHover = () => {
		this.setState({
			hover: !this.state.hover
		});
	}

	render() {
		const item = this.props.item;
		const uid = `progress-${this.props.index}`;
		const colStyle = {
			marginTop: '20px',
			marginBottom: '20px',
		};
		const cardStyle = {
			position: 'relative',
			top: this.state.hover ? '-10px' : '0',
			transition: '0.2s ease',
			boxShadow: this.state.hover ? '-1px 9px 40px -12px black' : 'unset',
			height: '100%'
		}

		return (
			<Col xs='12' md='4' style={colStyle}>
				<Link to={`/item/${item.title}`}>
				<Card style={cardStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
					<CardImg top width='100%' src={item.img} alt='Ah!' />
					<CardBody>
						<CardTitle>
							{item.title}
						</CardTitle>
						<Progress style={{height: '1.75em', fontSize: '15px'}} id={uid} value={item.progress}>
							<b>{item.progress}%</b>
						</Progress>
					</CardBody>
				</Card>
				</Link>
			</Col>
		);
	}
}
