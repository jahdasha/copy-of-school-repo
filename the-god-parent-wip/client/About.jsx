import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class About extends Component {

  render(){

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
                          <ul>
                            <li>Hello Parent, CareTaker, GrandParent, Babysitter, Nurse, Sibling...</li>
                            <li><span className="landingPGSpan">The God Parent</span> app is here to help you...</li>
                            <li>Think of this app as an extension of your brain</li>
                            <li>It's like a virtual God Parent</li>
                            <li>It will remember where you store items so you can focus more being the great parent that you are!</li>
                          </ul>
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
