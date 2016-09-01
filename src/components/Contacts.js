import React from "react";
import {getContacts} from "../services/contactsService";
import Contact from "./Contact";
import {Link} from 'react-router';

export default class Contacts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			contacts: []
		}
	}

	componentWillMount() {
		this.setState({
			contacts: getContacts()
		})
	}

	render() {
		const styles = this.getStyles();

		const contacts = this.state.contacts.map((contact, idx) => (
		     <Link to={`/contacts/${contact._id}`} key={idx}>
		     		<h5>{contact.name}</h5>
			</Link>
		))
		
		return (
			<div>
				<h1>Contacts</h1>
				<div style={ styles.contactsWrapper }>
					{contacts}
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}

	getStyles() {
		return {
			contactsWrapper: {
				display: "flex"
				, flexWrap: "wrap"
				, flexDirection: "column"
				, justifyContent: "space-around"
			}
		}
	}
}
