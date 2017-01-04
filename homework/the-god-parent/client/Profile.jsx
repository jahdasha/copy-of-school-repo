import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends Component {
  setVar(){
    Session.set('test2', 'and the second button test!');
  }


  render() {
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
                        <span className="landingPGSpan">The God Parent</span><br />
                          <div className="page-spacer"></div>

                          <div className="page-spacer"></div>
                          <a className="navlink" href="/items">Start Adding Items</a>
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
