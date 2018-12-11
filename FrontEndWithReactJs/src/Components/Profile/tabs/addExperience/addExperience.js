import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import Stepper from "./stepper";
import Add from "./add"
class MenuAppBar extends React.Component {
 

  render() {
    return (
     
         
     <Stepper passedUser={this.props.passedUser}/>
      

    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(MenuAppBar);
