import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
            <Route exact to="/" component={HomePage}/>
          </Switch>
      </Fragment>
    )
  }
}
