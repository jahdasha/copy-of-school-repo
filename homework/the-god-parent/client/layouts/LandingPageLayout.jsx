import React from 'react';
import AccountsUI from '../accounts/AccountsUI.jsx';

export const LandingPageLayout = ({content}) => (
  <div className="LandingPageLayout">
      <div className="navbar-header">
        <nav id="navbar-fixed-top">
          <span id="login"><AccountsUI /></span>
          <h1 className="PageHeader">The God Parent</h1>
        </nav>
      </div>
      <div className="boby-content">
          {content}
      </div>
  </div>
)
