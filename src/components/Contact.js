import React from "react";
import {Link} from 'react-router';

export default class Contact extends React.Component {
	render() {
		const styles = this.getStyles();

		return (
		        <div>
		        <Link to="/contacts">Back</Link>
				<ul style={ styles.contactWrapper }>
					<li style={ styles.name }>{ this.props.name}</li>
					<li>Company: { this.props.company }</li>
					<li>Email: { this.props.email }</li>
					<li>: Phone #: { this.props.phone }</li>
				</ul>
			</div>
		);
	}

	getStyles() {
		return {
			contactWrapper: {
				margin: 10
			}
			, name: {
				fontWeight: "bold"
			}
		}
	}
}
