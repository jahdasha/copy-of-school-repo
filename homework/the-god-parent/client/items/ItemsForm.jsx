import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class ItemsForm extends Component {
  addItem(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input

    var text = this.refs.item.value.trim();
    console.log(text)

    // var storedPlace = this.refs.itemLocation.value.trim();
    // console.log(storedPlace)


    //executing the method in methods.js from server.js
    //()=> let's us use the scope from above the anonymous function inside the anonymous function, so we can access this above the anonymous function

    if (text){
      Meteor.call('addItem', text, (error, data)=>{
        console.log(error)
        if (error){
          Bert.alert( 'You must be logged in to add an item', 'danger', 'fixed-top', 'fa-frown-o' );
        }else {
          this.refs.item.value = ""; //clear the input after we submit
        }
      })
    }else{
      Bert.alert( 'You must type some text in to add an item', 'danger', 'fixed-top', 'fa-frown-o' );
    }

  }

  render(){

    return (
      <form className="new-item" onSubmit={this.addItem.bind(this)}>
        <input type="text" ref="item" placeholder="Enter your new item" />  {/* this is a comment! ref is how we can refer to this input later */}
      </form>
    )
  }
}
