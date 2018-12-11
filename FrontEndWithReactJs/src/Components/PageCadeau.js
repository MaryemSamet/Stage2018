   import PropCadeau from "./Home/proposition/contreBesoin/propCadeau";
 


import React, { Component, Fragment } from "react";
import El6 from "./Profile/Contenu/MenuUser/menu";
  
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class PageAbonne extends React.Component {
 
  render() {
    return (<div><El6 passedUser={this.props.passedUser}/><PropCadeau passedValueAnnonceId={this.props.passedValueAnnonceId} passedUser={this.props.passedUser} passedValueUserId={this.props.passedValueUserId} /></div>);
  }
}
PageAbonne.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageAbonne);
