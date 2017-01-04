var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
  mixins: [Router.History],
  getRef: function(ref){
    this.usernameRef = ref;
  },
  handleSubmit: function(){



  },
  render: function(){
    return (
      <div>
      </div>

    )
  }
});

module.exports = SearchGithub;
