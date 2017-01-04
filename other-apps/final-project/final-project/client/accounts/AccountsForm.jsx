import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class AccountsForm extends Component {
  addFriend(event){
		event.preventDefault();
		//console.log(this); //this would console.log the entire component, you can see value which would be the value of the input

		var friend = this.refs.friend.value.trim();
		console.log(friend);

    //by taking out insecure, you can't do this anymore
    // Messages.insert({
    //   text: text,
    //   complete: false,
    //   createdAt: new Date()
    // })

    //executing the method in methods.js from server.js
    //()=> let's us use the scope from above the anonymous function inside the anonymous function, so we can access this above the anonymous function


		if (friend){
			Meteor.call('addFriend', friend, (error, data)=>{
				console.log(error)
				if (error){
					Bert.alert( 'You must be logged in to add a friend', 'danger', 'fixed-top', 'fa-frown-o' );
				}else {
					this.refs.friend.value = ""; //clear the input after we submit
				}
			})
		}else{
			Bert.alert( 'You must type some text in to add a friend', 'danger', 'fixed-top', 'fa-frown-o' );
		}
	}

  render(){

    return (
      <div>
            <h3> Add a Friend </h3>
            <p> If you would like to add someone who helps take care of your pet
            please enter their username below</p>
            <form className="new-friend" onSubmit={this.addFriend.bind(this)}>
            <input type="text" ref="friend" placeholder="Enter their username" />
            </form>
      </div>
    )
  }
}
