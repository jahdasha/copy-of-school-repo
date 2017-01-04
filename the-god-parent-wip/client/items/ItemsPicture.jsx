
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class ItemsPicture extends Component {
  addItemPicture(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input

    document.getElementById("itemPicture").style.display = 'none';


    var text = this.refs.itemPicture.value.trim();
    console.log(text);
    var itemId = this.props.itemID

    if (text){
      Meteor.call('addItemPicture', text, itemID, (error, data)=>{
        console.log(error)
        if (error){
          Bert.alert( 'You must be logged in to add a itemPicture', 'danger', 'fixed-top', 'fa-frown-o' );
        }else {
          this.refs.itemPicture.value = "";
          //clear the input after we submit
          console.log("yay");



        }
      })
    }else{
      Bert.alert( 'You must type some text in to add a itemPicture', 'danger', 'fixed-top', 'fa-frown-o' );
    }

  }

  render(){

    return (
      <div id= "itemPicture">
          <form className="new-itemPicture" onSubmit={this.addItemPicture.bind(this)}>
            <ul>
              <li><input type="file" name="photo"/></li>
            </ul>
          </form>
      </div>
    )
  }
}
