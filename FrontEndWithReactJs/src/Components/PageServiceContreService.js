import React, { Component, Fragment } from "react";
  import PropService from "./Home/proposition/contreService/propService";
import El6 from "./Profile/Contenu/MenuUser/menu";
  

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class PageAbonnement extends React.Component {
 
  render() {
    return (<div><El6 /> <PropService passedValueAnnonceId={this.props.passedValueAnnonceId} passedUser={this.props.passedUser} passedValueUserId={this.props.passedValueUserId} /></div>);
  }
}
PageAbonnement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageAbonnement);
