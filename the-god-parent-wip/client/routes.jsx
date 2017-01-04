import React from 'react';
import {mount} from 'react-mounter'

import {MainLayout} from './layouts/MainLayout.jsx';
import {LandingPageLayout} from './layouts/LandingPageLayout.jsx';

import ItemsWrapper from './items/ItemsWrapper.jsx';
import About from './About.jsx';
import ItemDetail from './items/ItemDetail.jsx';
import LandingPage from './LandingPage.jsx';
import Profile from './Profile.jsx';


FlowRouter.route('/', {
    action: function(params) {
        Tracker.autorun(function() {
            if (!Meteor.userId()) {
              mount(LandingPageLayout, {
                content: (<LandingPage />)
              });
            } else {
              mount(MainLayout, {
                content:  (<About />)
              });
            }
        });
      }
});

FlowRouter.route('/items', {
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            mount(LandingPageLayout, {
              content: (<LandingPage />)
            });
          } else {
            mount(MainLayout, {
              content:  (<ItemsWrapper />)
            });
          }
      });
    }
});


FlowRouter.route('/items/:id', {
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            mount(LandingPageLayout, {
              content: (<LandingPage />)
            });
          } else {
            mount(MainLayout, {
              content : (<ItemDetail id={params.id} />)
            });
          }
      });
    }
});

FlowRouter.route('/account', {
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            mount(LandingPageLayout, {
              content: (<LandingPage />)
            });
          } else {
            mount(MainLayout, {
              content:  (<Profile />)
            });
          }
      });
    }
});
