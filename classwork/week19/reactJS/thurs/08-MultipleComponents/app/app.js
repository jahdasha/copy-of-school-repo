// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// We need to include all of the components we're utilizing
// Include the Header Component
var Header = require('./Components/header.js')
var Results = require('./Components/results.js')
var Search = require('./Components/search.js')


ReactDOM.render(

	/*Here we dump all of the components into a single main-container*/
	/*Again, treat them like they are any other HTML elements.*/

	<div className='main-container'>

	<Results />
	<Search />
		<Header />

	</div>,
	document.getElementById('app')
)
