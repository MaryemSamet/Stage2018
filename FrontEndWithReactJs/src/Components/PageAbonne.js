import React, { Component, Fragment } from "react";
import El6 from "./Profile/Contenu/MenuUser/menu";
import ListAbonne from "./Profile/PageAbonné/listAbonne";
 
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class PageAbonne extends React.Component {
  render() {
    return (<div><El6 /> <ListAbonne passedUser={this.props.passedUser} /></div>);
  }
}
PageAbonne.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageAbonne);
