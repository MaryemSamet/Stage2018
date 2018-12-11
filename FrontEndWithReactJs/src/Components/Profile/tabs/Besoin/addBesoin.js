import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import React from "react";
import "antd/dist/antd.css";
 import Stepper from "./stepper";
import stepper from "./stepper";

class MenuAppBar extends React.Component {
  state = { visible: false };

 

  onClose = () => {
    this.setState({
      visible: false
    });
  };

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
