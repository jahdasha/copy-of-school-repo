import React, {Component} from 'react';
import AccountsUI from './accounts/AccountsUI.jsx';

export default class Home extends Component {

	triggerLogin() {
	    Session.set('Meteor.loginButtons.dropdownVisible', true);
	  }

	render(){

	    return (

					<div id="homepage">
					<img className= "homeImage" src="https://bytebucket.org/briannehostutler/final-project/raw/9a0b8f17cd6e303d98a9240a7159b227a4263987/public/images/dogimage.png?token=4e00fa655cbe65db46e98d3842017a0a01e77c11" />

							<div id="homepageText">
							<p>Dog Log helps to keep track of anything related to your beloved animal. From appointments, to medication, to feeding schedule,
							Dog Log can help to make sure your furry friend is well taken care of.
							<br /><br />
							Already a member? New to Dog Log? Whichever you are, click the button below!
							</p>
							<br />
							<button id= "homeLogin" name= "header" onClick={this.triggerLogin}><a href="#header">Login/Create Account</a></button>

							</div>

						</div>
	    )
	}
}
