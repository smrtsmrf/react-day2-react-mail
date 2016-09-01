import React from 'react';
import Contact from "./Contact";
import {getContacts} from "../services/contactsService";

export default class ContactWrapper extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				contact: {}
			}
		}

		componentWillMount() {
			this.getContact.call(this,this.props.params.contactId);
		}

		componentWillReceiveProps(nextProps) {
			if (nextProps.params.contactId !== this.props.params.contactId) {
				this.getContact.call(this, nextProps.params.contactId);
				return true
			} else {
				return false
			}
		}

		getContact(contactId) {
			const contactInfo = getContacts().filter(contact =>{return contactId == contact._id})[0];
			this.setState({
				contact: contactInfo
			})
		}

		render() {
			var contact = this.state.contact;
			return(
			       <Contact
			     		company={contact.company}
			     		email={contact.email}
			     		key={contact._id}
			     		name={contact.name}
			     		phone={contact.phone}
			     	/>
			 )
		}
	}