//import { Mongo } from 'meteor/mongo';

//export const

// Items = new Mongo.Collection("items");

//giving all the items
Meteor.publish("allItems", function(){
  return Items.find();
});

//everywhere but inside a publish function we can use Meteor.userId(), that's why we're doing this.userId
//returns items only for the current loggedin user
Meteor.publish("userItems", function(){
  return Items.find({user: this.userId});
});
