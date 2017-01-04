// component/Profile/ProfileEdit.jsx

/** Things you'll need before continuing:
*
* npm install react-mixin --save (because I'm using Meteor 1.3)
* meteor add react-meteor-data (if using meteor 1.3, do not: meteor add react!)
*
*/

import React from 'react';
import reactMixin from 'react-mixin';

export default class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.user.profile.avatar // this is passed from the router. Well add this later
      // if the user has no profile picture, then show the default:
      // avatar: this.props.user.profile.avatar ? this.props.user.profile.avatar : 'your palceholder image url'
    }
  getMeteorData(){
    return{
      user: Meteor.user()
    }
  }

  componentWillMount(){
    // we create this rule both on client and server
    Slingshot.fileRestrictions("avatar", {
      allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
      maxSize: 2 * 500 * 500
    });
  }

  upload(){
    var userId = Meteor.user()._id;
    var metaContext = {avatarId: userId};
    var uploader = new Slingshot.Upload("UsersAvatar", metaContext);
    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) { // you can use refs if you like
      if (error) {
        // Log service detailed response
        console.error('Error uploading', uploader.xhr.response);
        alert (error); // you may want to fancy this up when you're ready instead of a popup.
      }
      else {
        // we use $set because the user can change their avatar so it overwrites the url :)
        Meteor.users.update(Meteor.userId(), {$set: {"profile.avatar": downloadUrl}});
      }
      // you will need this in the event the user hit the update button because it will remove the avatar url
      this.setState({avatar: downloadUrl});
    }.bind(this));
  }

  layoutRender(){
    return(
      <form>
        <div className="row well">
         <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputFile">File input</label>
              <input type="file" id="input" onChange={this.upload.bind(this)} />
              <p className="help-block">Image max restriction: 2MB, 500x500. Cropped: 200x200</p>
            </div>
          </div>
          <div className="col-md-6 utar-r"> // .utar-r img is set to float: right
            <img src={this.state.avatar} height="200" width="200" alt="..." className="img-rounded" />
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.formSubmit.bind(this)}>Update Profile</button>
          </div>
        </div>
      </form>
    )
  }

  formSubmit(){
    // Ofcourse you'll have other fields...
    let avatarUrl = this.state.avatar;
    Meteor.users.update( { _id: Meteor.userId() }, {
      $set: {profile: avatarUrl}
    });
  }

  render(){
    return(
      <div>{ this.props.user ? this.layoutRender() : <p>Loading...</p> }</div>
    )
  }

}
reactMixin(ProfileEdit.prototype, ReactMeteorData);
