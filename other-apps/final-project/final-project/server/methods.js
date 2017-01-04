//allows us to call methods on the server from the client
Meteor.methods({
  addMessage(message){

    check(message, String)

    //don't let someone not loggedin insert a message
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

    Messages.insert({
      text: message,
      complete: false,
      createdAt: new Date(),
      username: Meteor.user().username,
      user: Meteor.userId(),
      pet: Meteor.user().pet,
    })
  },

  deleteMessage(message){

    check(message, Object)

    //must be owner of messages to delete them
    if (Meteor.userId() !== message.user){
      throw new Meteor.Error('not-authorized')
    }
    Messages.remove(message._id)
  },

addPet(pet){

  check(pet, String)


//inserts a new pet
  Pets.insert({
    text:pet,
    createdAt: new Date(),
    username: Meteor.user().username,
    user: Meteor.userId(),
  })


//inserts pet into users collection
  Meteor.users.update(
    {_id: Meteor.userId()},
      {$set :
        {
          "pet": pet,
          "count": 1,
        }
      }
  )
},

  addPetProfile(breed){

    Pets.update(
      {user: Meteor.userId()},
        {$set :
          {
            "breed": breed
          }
        }
    )
},

addFriend(friend) {

    check(friend, String)

    Meteor.users.update(
      {_id: Meteor.userId()},
        {$set :
          {
            "friend": friend
          }
        }
    )
},

});
