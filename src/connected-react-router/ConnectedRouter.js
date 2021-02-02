/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: power_840
 * @Date: 2021-02-02 19:05:07
 *
 * @LastEditors: power_840
 * @LastEditTime: 2021-02-02 20:18:11
 */
import { LOCATION_CHANGE } from "./constants";
import React, { Component } from "react";
import { Router } from "react-router";
import { ReactReduxContext } from "react-redux";

export default class ConnectedRouter extends Component {
  static contextType = ReactReduxContext;
  componentDidMount() {
    this.unlistener = this.props.history.listen((location, action) => {
      this.context.store.dispatch({
        type: LOCATION_CHANGE,
        payload: {
          location,
          action,
        },
      });
    });
  }
  componentWillUnmount() {
    this.unlistener();
  }
  render() {
    return <Router history={this.props.history}>{this.props.children}</Router>;
  }
}
