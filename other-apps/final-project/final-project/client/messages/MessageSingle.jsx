
import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class MessageSingle extends Component {


  deleteMessage(){
    Meteor.call('deleteMessage', this.props.message);
    console.log(this.props.message);
  }

  render(){

    var time = this.props.message.createdAt.toString().substring(15, 21);

    return (
      <div id= "eachmessage">
      <li  id={this.props.message._id}>

        <span id="date">{this.props.message.createdAt.toString().substring(4, 10)}- </span>
        <span className="username">{this.props.message.username}:</span>
        <span id="message">{this.props.message.text}</span>

        <button className="btn-cancel" onClick={this.deleteMessage.bind(this)}>
        x
        </button>

        <div id="time">{this.props.message.createdAt.toString().substring(15, 21)} </div>

        <br />


      </li>
  </div>
    )
  }
}
