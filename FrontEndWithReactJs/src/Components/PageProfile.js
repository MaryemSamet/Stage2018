import React, { Component, Fragment } from "react";
import El6 from "./Profile/Contenu/MenuUser/menu";
import RightPart  from './Profile/RightPart';
import { Divider } from "antd";
  
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class PageProfile extends React.Component {
  
  render() {
    return (<div><El6 passedUser={this.props.passedUser} /><RightPart passedUser={this.props.passedUser} />  <Divider dashed="true" /></div>);
  }
}
PageProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageProfile);
