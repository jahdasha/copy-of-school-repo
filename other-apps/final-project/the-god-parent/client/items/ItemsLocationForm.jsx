
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class ItemsLocationFrom extends Component {
  addItemLocation(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input

    document.getElementById("itemLocation").style.display = 'none';


    var text = this.refs.itemLocation.value.trim();
    console.log(text);


    if (text){
      Meteor.call('addItemLocation', text, (error, data)=>{
        console.log(error)
        if (error){
          Bert.alert( 'You must be logged in to add a itemLocation', 'danger', 'fixed-top', 'fa-frown-o' );
        }else {
          this.refs.itemLocation.value = "";
          //clear the input after we submit
          console.log("yay");



        }
      })
    }else{
      Bert.alert( 'You must type some text in to add a itemLocation', 'danger', 'fixed-top', 'fa-frown-o' );
    }

  }

  render(){

    return (
      <div id= "itemLocation">
          <form className="new-itemLocation" onSubmit={this.addItemLocation.bind(this)}>
              <input type="text" ref="itemLocation" placeholder="Enter the location of where the item is being stored" />
          </form>
      </div>
    )
  }
}
