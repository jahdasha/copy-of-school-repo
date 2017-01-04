import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class ItemSingle extends Component {
  deleteItem(){
    Meteor.call('deleteItem', this.props.item);
  }

  cloneItem(){
    Meteor.call('cloneItem', this.props.item)
  }

  render(){

    return (
      <li id={this.props.item._id}>
        <a className="babyItem" href={`/items/${this.props.item._id}`}>{this.props.item.text}</a>
        <button className="btn-success" onClick={this.cloneItem.bind(this)}>
        duplicate this item
        </button>
        <button className="btn-cancel" onClick={this.deleteItem.bind(this)}>
        delete -- x
        </button>

      </li>
    )
  }
}
