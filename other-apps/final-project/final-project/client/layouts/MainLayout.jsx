import React from 'react';
import AccountsUI from '../accounts/AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
    <img src="https://bytebucket.org/briannehostutler/final-project/raw/629b83ace76553b19070fbb130e20a035f1e28a2/public/images/bone.png?token=6fae244eabb58809aaf4f8a4e51b2900bc351f41" width="250" height="100"/>

      <nav>
        <AccountsUI />
        <a href="/">Home</a>
        <a href="/log">Log</a>

      </nav>

    </header>
      <div className= "container">
    {content}
      </div>
  </div>
)
