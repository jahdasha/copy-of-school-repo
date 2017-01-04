import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class PetsProfile extends Component {
  addPetProfile(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input

    var textBreed = this.refs.breed.value.trim();
    console.log(textBreed);

    if (textBreed){
      Meteor.call('addPetProfile', textBreed, (error, data)=>{
        console.log(error)
        if (error){
          Bert.alert( 'You must be logged in to add a breed', 'danger', 'fixed-top', 'fa-frown-o' );
        }else {
          this.refs.breed.value = "";
          //clear the input after we submit
          console.log("yay");

        }
      })
    }else{
      Bert.alert( 'You must type some textBreed in to add a breed', 'danger', 'fixed-top', 'fa-frown-o' );
    }

      }

  render(){

    return (
      <div>
      <p>Pet's breed:</p><br/>
      <form className="new-breed" onSubmit={this.addPetProfile.bind(this)}>
      <input type="text" ref="breed" placeholder="Enter your breed name" />
      </form>
      </div>
    )
  }
}
