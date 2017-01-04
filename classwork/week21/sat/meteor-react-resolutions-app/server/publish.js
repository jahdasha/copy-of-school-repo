//import { Mongo } from 'meteor/mongo';

//export const

Resolutions = new Mongo.Collection("resolutions"); // creates new collection in Mongo using Meteor

//giving all the resolutions
Meteor.publish("allResolutions", function(){
  return Resolutions.find();
});

//everywhere but inside a publish function we can use Meteor.userId(), that's why we're doing this.userId
//returns resolutions only for the current loggedin user
Meteor.publish("userResolutions", function(){
  return Resolutions.find({user: this.userId});
});
