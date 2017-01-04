
import React from 'react';
import {render} from "react-dom";
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import MessagesForm from './MessagesForm'
import MessageSingle from './MessageSingle'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//this won't work here if this file isn't in the root of the application. So we have to put a copy of it in it's own file in the server folder (weird)
Messages = new Mongo.Collection("messages");

//by having default, whatever imports this file, you don't need to use curly brackets when importing it
//we only use TrackerReact when we pull in data
export default class MessagesWrapper extends TrackerReact(React.Component) {
//used to be (before TrackerReact): export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      //without TrackerReact, you can't do the following:
      //if we change what gets published in publish.js then what's available in the front end (see with ctrl + m) is limited to just that.
      subscription: {
        //messages : Meteor.subscribe('allMessages')
        messages : Meteor.subscribe('userMessages'),

      }
    }
  }

  //when this component unmounts, we don't want to subscribe to this data
  componentWillUnmount() {
    this.state.subscription.messages.stop();
  }

 messages() {
    return Messages.find({}, {sort: {createdAt: -1}}).fetch(); //only .find() returns a cursor (meteor), .fetch returns us the object

  }


  render(){
    //console.log(this.message()); //see this in the chrome console.

    let res = this.messages();

    //if we don't have this here then we can't display res on the page due to it not being available right away
    //but after we commented it out, this isn't an issue anymore
    // if (res.length < 1 ){
    //   return (<div>Loading</div>)
    // }

    return (
      <div className="container">
      <div id="messagesContainer">
          <h1>Daily Log</h1>

          <MessagesForm /> {/* we can copy and paste this more times throughout our app and it will work the same :) - that's the power of react components */}

          <ul>
              {this.messages().map( (message) => {
              {/* the key here needs to be there because React demands that everytime you loop and render something like this, it has a unique key for each item */}
                console.log(message)
                return <MessageSingle key={message._id} message={message} />
              })}
              {/*<MessageSingle message={res[0]} />*/}
              {/* comment this out: {res[0].text} */}
          </ul>
      </div>
      </div>
    )
  }
}

// if (Meteor.isClient) {
//   Meteor.startup(function(){
//     render(<App />, document.getElementById("render-target"));
//   });
// }
