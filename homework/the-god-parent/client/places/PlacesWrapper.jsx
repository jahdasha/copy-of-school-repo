import React from 'react';
import {render} from "react-dom";
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ItemsForm from './ItemsForm'
import ItemSingle from './ItemSingle'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//this won't work here if this file isn't in the root of the application. So we have to put a copy of it in it's own file in the server folder (weird)
// Items = new Mongo.Collection("items");

//by having default, whatever imports this file, you don't need to use curly brackets when importing it
//we only use TrackerReact when we pull in data
export default class ItemsWrapper extends TrackerReact(React.Component) {
//used to be (before TrackerReact): export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      //without TrackerReact, you can't do the following:
      //if we change what gets published in publish.js then what's available in the front end (see with ctrl + m) is limited to just that.
      subscription: {
        //items : Meteor.subscribe('allItems')
        items : Meteor.subscribe('userItems')
      }
    }
  }

  //when this component unmounts, we don't want to subscribe to this data
  componentWillUnmount() {
    this.state.subscription.items.stop();
  }

  items() {
    return Items.find().fetch(); //only .find() returns a cursor (meteor), .fetch returns us the object
  }

  render(){
    //console.log(this.items()); //see this in the chrome console.

    let item = this.items();

    //if we don't have this here then we can't display item on the page due to it not being available right away
    //but after we commented it out, this isn't an issue anymore
    // if (item.length < 1 ){
    //   return (<div>Loading</div>)
    // }

    return (
      <div className="mainPGContent">
        {/* Page Content */}
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="page-spacer"></div>
                    {/* About*/}
                    <div className="aboutContent">
                      <p>
                        <span className="landingPGSpan">My Baby's Items</span><br />
                          <div className="page-spacer"></div>
                            <ItemsForm /> {/* we can copy and paste this more times throughout our app and it will work the same :) - that's the power of react components */}

                            <p className="paragraph">
                              Click on edit to add the location of the item.
                            </p>

                            <ol className="itemLists">
                                {this.items().map( (item) => {
                                {/* the key here needs to be there because React demands that everytime you loop and render something like this, it has a unique key for each item */}
                                  console.log(item)
                                  return <ItemSingle key={item._id} item={item} />
                                })}
                            </ol>
                      </p>
                    </div>
                    {/* /.aboutContent */}
                  </div>
              </div>
              {/* /.row */}
          </div>
          {/* /.container */}
      </div>
    )
  }
}

// if (Meteor.isClient) {
//   Meteor.startup(function(){
//     render(<App />, document.getElementById("render-target"));
//   });
// }
