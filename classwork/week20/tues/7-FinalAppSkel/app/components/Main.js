var React 		= require('react');
var SearchGithub = require('./SearchGithub');


// This creates a React Component for us.
// It takes in a few properties that we can pass in...
// One of which is render. Render specifies what the UI looks like for this component
var Main = React.createClass({
	render: function(){

		// Return and parenthesis needs to be on same line.
		/*this.props.children will get replaced by the active component which will be our home component*/
		/*This is because the "home.js" file is inside of the main component*/
		return (
			<div className="main-container">
				<nav className="navbar navbar-default" role="navigation">

			    <div className="col-sm-7 col-sm-offset-2" style="margin-top: 15px">
					<div className="col-sm-12">
						<form>
							<div className="form-group col-sm-7">
								<input type="text" className="form-control" id="" placeholder="">
							</div>

							<div className="form-group col-sm-5">
								<button type="submit" className="btn btn-block btn-primary" >Search Github</button>
							</div>
						</form>
					</div>
			    </div>
			  </nav>
			</div>
			    <p>{this.props.children}</p>

		)
	}
});

// Tell it which component to render and where we will render it to.
// Then we run webpack -w
// We dont want Main being the central render
// Whenever we require Main we'll get this component
module.exports = Main;
