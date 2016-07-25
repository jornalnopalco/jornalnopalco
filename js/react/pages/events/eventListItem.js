import Moment from 'moment'
import React from 'react';
import { Link } from 'react-router';


export default class Event extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		let img;
		if (this.props.img) {
			img = (
				<div className="image pull-left">
					<Link to={this.props.link}>
						<img className="img-responsive" src={this.props.img} />
					</Link>
				</div>);
		}
		let date = Moment(this.props.date).format("DD/MM/YYYY");
		return (
			<li>
				<div className="animated fadeInUp">
					{img}

					<time dateTime={this.props.date}>
						<Link to={this.props.link}>{date}</Link>
					</time>
					<h1><Link to={this.props.link}>{this.props.title} </Link></h1>

					<h2><Link to={this.props.link}>{this.props.place} </Link></h2>

				</div>
			</li>
		);
	}

}
