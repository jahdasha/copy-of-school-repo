// import {Meteor} from "meteor/meteor"
//
// Meteor.startup(() =>{
//   // AWS image Upload Directory
//   Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
//
//   Bucket:	"tgp-item-pictures",
//   Region:	"US Standard".
//   AWSAccessKeyID: "AKIAJLAMDUBDGGV3EOMQ",
//   AWSSecretAccessKey: "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",
//
//   acl: "public-read",
//
//   authorize: function () {
//     //Deny uploads if user is not logged in.
//     if (!this.userId) {
//       var message = "Please login before posting files";
//       throw new Meteor.Error("Login Required", message);
//     }
//
//     return true;
//   },
//
//   key: function (file) {
//     //Store file into a directory by the user's username.
//     var user = Meteor.users.findOne(this.userId);
//     return user.username + "/" + file.name;
//   }
// });
// });
