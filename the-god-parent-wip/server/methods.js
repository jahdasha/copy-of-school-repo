//allows us to call methods on the server from the client
Meteor.methods({
  addItem(item){

    check(item, String)

    //don't let someone not loggedin insert a item
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

    Items.insert({
      text: item,
      createdAt: new Date(),
      username: Meteor.user().username,
      user: Meteor.userId(),
      itemLocation: Meteor.user().itemLocation,
    })
  },
  cloneItem(item){

    check(item, Object)

    //don't let someone not loggedin insert a item
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

    Items.insert({
      text: item.text,
      createdAt: new Date(),
      user: item.user
    })
  },
  addItemLocation(itemLocation, itemId){

    check(itemLocation, String)


    Items.update({_id: itemId}, {
      $set: { "itemLocation": itemLocation}
    })
   },
  addItemPictureUrl(pictureURL, itemId){

     check(pictureURL, String)


     Items.update({_id: itemId}, {
       $set: { "pictureURL": pictureURL}
     })
  },
  deleteItem(item){

    check(item, Object)

    //must be owner of items to delete them
    if (Meteor.userId() !== item.user){
      throw new Meteor.Error('not-authorized')
    }
    Items.remove(item._id)
  },
  addShallowField(shallowField, value){
    Meteor.users.update({_id: Meteor.userId()},{$set:{shallowField:value}})

  }
})


// toggleItem(item){
//
//   check(item, Object)
//
//   //must be owner of items to toggle them
//   if (Meteor.userId() !== item.user){
//     throw new Meteor.Error('not-authorized')
//   }
//   Items.update(item._id, {
//     $set: {complete: !item.complete}
//   })
// },
