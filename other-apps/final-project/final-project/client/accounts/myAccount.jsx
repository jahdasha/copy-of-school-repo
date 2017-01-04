import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AccountsForm from './AccountsForm';
import {render} from "react-dom";
import PetsForm from './PetsForm';
import PetsProfile from './PetsProfile';


export default class Account extends Component{

	render(){

			return(
						<div className="container">
			        <h1>My Account</h1>

							<PetsForm />
							 {/*<h3>Warning: You can only view one pet's log at a time. If you would like to switch which pet's log you are viewing, please refresh the page, otherwise please continue to the <a href="/log">log page</a>.</h3>

							<PetsProfile />*/}
		      	</div>
	    	)
  	}
}
