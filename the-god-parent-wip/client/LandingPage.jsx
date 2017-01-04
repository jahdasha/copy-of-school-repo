import React, {Component} from 'react';
import AccountsUI from './accounts/AccountsUI.jsx';

export default class LandingPage extends Component {

	triggerLogin() {
		Session.set('Meteor.loginButtons.dropdownVisible', true);
	}

	render(){

	    return (
				<div className="PGContent">
					{/* Page Content */}
				    <div className="container">
				        <div className="row">
				            <div className="col-lg-12 text-center">
											<img className="pageImage" src="https://bytebucket.org/jahdasha/thegodparent/raw/24e0ee94819690c1fa0adb06fb784d6709564c21/public/images/baby-stuff.png?token=4a56e4bb9169fbb55bc13b90c12231d2b9601300" />
											<div className="page-spacer"></div>
											{/* App Description */}
											<div className="appdescription">
												<p>
													<ul>
														<li>Can't seem to find the exact baby item that you bought or recieved about 2 weeks ago? </li>
														<li>This app is here to help with the sudden lost of memory.</li>
														<li>In addition to all of the love, nuturing, and parenting the baby needs, the baby also needs a lot of items.</li>
														<li>These items are specific to babies and sometimes only needed in certian stages of the baby's life so you usually have to storage the item away until it's needed again. </li>
														<li>Flash forward to when you need the stored item, Where did you put it?</li>
													</ul>
												</p>
												<div className="page-spacer"></div>
												<p>
													<ul>
														<li><span className="landingPGSpan">The God Parent</span> is a web app that lets parents log where they store all of their babies items.</li>
														<li>It allows baby sitters, grandparents, siblings, or anyone granted access to the account to login and view where the baby's items are without the need for a call, text, or email to the sometimes forgetful parent.</li>
														<li>This will allow parents to keep track of the many items they buy and receive their babies.</li>
													</ul>
												</p>
												<div className="page-spacer"></div>
												<p>
													<button className="PGloginButton" onClick={this.triggerLogin}>Want to Sign In? or Create an account?</button>
												</p>
											</div>
											{/* /.appdescription */}
				            </div>
				        </div>
								{/* Footer */}
				        <footer className="PageFooter">
				            <div className="row">
				                <div className="col-lg-12">
				                    <p>Copyright &copy; <a className="footer" href="http://jahdashaflagg.com/">Jahdasha Flagg 2016</a></p>
				                </div>
				            </div>
				            {/* /.row */}
				        </footer>
				    </div>
				    {/* /.container */}
				</div>
	    )
	}
}
