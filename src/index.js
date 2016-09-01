import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/App";
import Inbox from "./components/Inbox";
import Message from "./components/Message";
import Draft from "./components/Draft";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";
import ContactWrapper from "./components/ContactWrapper";

document.addEventListener("DOMContentLoaded", () => {
	const reactNode = document.getElementById("react-node");

	if (reactNode) {
		ReactDOM.render(
		     <Router history={browserHistory}>
				<Route path="/" component={App}>
					<Route path="draft" component={Draft}/>
					<Route path="contacts" component={Contacts}></Route>
					<Route path="/contacts/:contactId" component={ContactWrapper}/>
					<Route path="inbox" component={Inbox}>
						<Route path="/inbox/:messageId" component={Message}/>
					</Route>
				</Route>
			</Router>
		, reactNode)
	};
});