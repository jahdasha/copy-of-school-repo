import React from 'react';
import AccountsUI from '../accounts/AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="MainPageLayout">
      <div className="navbar-header">
        <nav id="navbar-fixed-top">
          <span id="login"><AccountsUI /></span>
          <div className="navbar-link">
            <a className="navlink" href="/">About</a>
            <a className="navlink" href="/items">Items</a>
          </div>
          <h1 className="PageHeader">The God Parent</h1>
        </nav>
      </div>
      <div className="boby-content">
          {content}
      </div>
      <div className="page-spacer"></div>
      {/* Footer */}
      <footer className="PageFooter">
          <div className="row">
              <div className="col-lg-12">
                  <p>Copyright &copy; <a className="footer" href="http://jahdashaflagg.com/">Jahdasha Flagg 2016</a></p>
              </div>
          </div>
          {/* /.row */}
      </footer>
  </div>
)
