import React, { Component, Fragment } from "react";
import El4 from "./PageIndex/CarouselHeader/elementCarousel";
import GroupImage from "./PageIndex/Body/BodyElement3";
import PicComplex from "./PageIndex/Body/elementBody2";
import GroupImage2 from "./PageIndex/Body/BodyElement4";
import Paper from "./PageIndex/Body/paper";
import Topo from "./PageIndex/Body/topography";
 
 

 import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class PageHome extends React.Component {
  render() {
    return (<div><El4  passedUser={this.props.passedUser}/>
      <Topo />
      <PicComplex />
      <GroupImage />
      <GroupImage2/>
      <Paper /></div>);
  }
}
PageHome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageHome);

