import React, { Component, Fragment } from "react";
import El1 from "./PageIndex/Header/elementHeader1";
import El6 from "./Profile/Contenu/MenuUser/menu";
import El8 from "./PageIndex/Footer/elementFooter1";
import CopyR from "./PageIndex/Footer/copyright";
import Up from "./Profile/up";
import { Divider } from "antd";
import ListAbonnement from "./Profile/PageAbonnement/listAbonnement";
 

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class PageAbonnement extends React.Component {
  render() {
    return (<div><El6  /> <ListAbonnement passedUser={this.props.passedUser}/></div>);
  }
}
PageAbonnement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageAbonnement);
