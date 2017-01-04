import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class PetsForm extends Component {
  addPet(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input
    // document.getElementById("petName").style.display = 'none';

    var text = this.refs.pet.value.trim();
    console.log(text);


    if (text){
      Meteor.call('addPet', text, (error, data)=>{
        console.log(error)
        if (error){
          Bert.alert( 'You must be logged in to add a pet', 'danger', 'fixed-top', 'fa-frown-o' );
        }else {
          this.refs.pet.value = "";
          //clear the input after we submit
          console.log("yay");
        }
      })
    }else{
      Bert.alert( 'You must type some text in to add a pet', 'danger', 'fixed-top', 'fa-frown-o' );
    }

  }

  render(){

    return (
      <div id= "petName">
          <h3> Add My Pet </h3>
          <p>Enter the name of your pet below!</p><br/>
          <form className="new-pet" onSubmit={this.addPet.bind(this)}>
              <input type="text" ref="pet" placeholder="Enter your pet name" />
          </form>
      </div>
    )
  }
}
