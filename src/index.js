import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/App";
import Inbox from "./components/Inbox";
import Message from "./components/Message";
import Draft from "./components/Draft";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

import {getContacts} from "./services/contactsService";

document.addEventListener("DOMContentLoaded", () => {
	const reactNode = document.getElementById("react-node");

	class ContactWrapper extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				contact:{}
			}
		}

		componentWillMount() {
			console.log('will mount')
			this.getContact.call(this,this.props.params.contactId);
		}

		componentWillUpdate(nextProps) {
			console.log('nextprops', nextProps.params)
			console.log('thisprops', this.props.params)
			if (nextProps.params.contactId !== this.props.params.contactId) {
				console.log('will render')
				this.getContact.call(this,this.props.params.contactId);
			} 
		}

		getContact(contactId) {
			const contactInfo = getContacts().filter(contact =>{return contactId == contact._id})[0];
			this.setState({
				contact: contactInfo
			})
			console.log('set state', this.state? this.state.contact.name : null)
		}

		render() {
			console.log('render. contact', this.state.contact)
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

	if (reactNode) {
		ReactDOM.render(
		     <Router history={browserHistory}>
				<Route path="/" component={App}>
					<Route path="draft" component={Draft}/>
					<Route path="contacts" component={Contacts}>
						<Route path="/contacts/:contactId" component={ContactWrapper}/>
					</Route>
					<Route path="inbox" component={Inbox}>
						<Route path="/inbox/:messageId" component={Message}/>
					</Route>
				</Route>
			</Router>
		, reactNode)
	};
});