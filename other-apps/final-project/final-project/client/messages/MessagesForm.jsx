import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class MessagesForm extends Component {
  addMessage(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input

    var text = this.refs.message.value.trim();
    console.log(text);

    //by taking out insecure, you can't do this anymore
    // Messages.insert({
    //   text: text,
    //   complete: false,
    //   createdAt: new Date()
    // })

    //executing the method in methods.js from server.js
    //()=> let's us use the scope from above the anonymous function inside the anonymous function, so we can access this above the anonymous function

    if (text){
      Meteor.call('addMessage', text, (error, data)=>{
        console.log(error)
        if (error){
          Bert.alert( 'You must be logged in to add a message', 'danger', 'fixed-top', 'fa-frown-o' );
        }else {
          this.refs.message.value = ""; //clear the input after we submit
        }
      })
    }else{
      Bert.alert( 'You must type some text in to add a message', 'danger', 'fixed-top', 'fa-frown-o' );
    }

  }

  render(){

    return (
      <form className="new-message" onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref="message" placeholder="Enter your message" />  {/* this is a comment! ref is how we can refer to this input later */}
      </form>
    )
  }
}
