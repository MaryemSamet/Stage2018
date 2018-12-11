import React, { Component, Fragment } from "react";
import El6 from "./Profile/Contenu/MenuUser/menu";
import GrandTab from "./Home/tabs/GrandTab";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class PageHome extends React.Component {
  render() {
    return (<div><El6 passedUser={this.props.passedUser} /> <GrandTab passedUser={this.props.passedUser}/></div>);
  }
}
PageHome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageHome);
