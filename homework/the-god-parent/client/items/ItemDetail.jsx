import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ItemsLocationForm from './ItemsLocationForm'
import ItemsPicture from './ItemsPicture'


export default class ItemDetail extends TrackerReact(Component) {
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

  item() {
    console.log(this.props.id)
    return Items.findOne(this.props.id); //findOne doesn't return cursor - it returns an object
    //alternative:
    //return Items.find({_id : this.props.id}).fetch(); //only .find() returns a cursor (meteor), .fetch returns us the object
  }

  render(){
    let items = this.item();

    {/* we need to wait for it to load first before showing it */}
    if (!items){
      return (<div>Loading details on selected item...</div>)
    }


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
                        <span className="landingPGSpan">The {items.text}</span><br />
                          <div className="page-spacer"></div>
                          <p className="single-item">This item is in {items.itemLocation}</p>
                          <div className="page-spacer"></div>
                      </p>
                      <ItemsLocationForm itemID={this.props.id} />
                      <br />
                      <div className="page-spacer"></div>
                      <div className="page-spacer"></div>
                      <a className="navlink" href="/items">Back to list of items</a>
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
