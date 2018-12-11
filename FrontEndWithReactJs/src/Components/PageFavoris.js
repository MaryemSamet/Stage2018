import React, { Component, Fragment } from "react";
import El1 from "./PageIndex/Header/elementHeader1";
import El6 from "./Profile/Contenu/MenuUser/menu";
import El8 from "./PageIndex/Footer/elementFooter1";
import CopyR from "./PageIndex/Footer/copyright";
import Up from "./Profile/up";
import { Divider } from "antd";
import ListFavoris from "./Profile/MesFavoris/ListFavoris";

 

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class PageFavoris extends React.Component {
  render() {
    return (<div><El6 passedUser={this.props.passedUser} /><ListFavoris  passedUser={this.props.passedUser}/></div>);
  }
}
PageFavoris.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageFavoris);
