import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Avatar, Button, Spin } from "antd";

import reqwest from "reqwest";
import axios from "axios"
 
class LoadMoreList extends React.Component {
  state = {
     user :''
  };

 
  componentDidMount() {
    axios.get(`http://localhost:51492/api/user/${this.props.passedValue}`)
      .then(res => {
        const user = res.data;
        this.setState({               user });
      })
  }


 
 
  render() {
     
    return (
       <a href=""> {this.state.user.firstName} {this.state.user.lastName}</a>
    );
  }
}

LoadMoreList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(LoadMoreList);
