import React from 'react';
import AccountsUI from '../accounts/AccountsUI.jsx';

export const HomeLayout = ({content}) => (
  <div id= "homeLayout">
      <div>
        <header id= "header">

          <nav>
            <span id="login"><AccountsUI /></span>
          </nav>
        </header>
      </div>

      <div>
          {content}
      </div>

  </div>
)
