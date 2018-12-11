import React from "react";
import "antd/dist/antd.css";
 import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
  
 import axios from 'axios'

class NomPrenom extends React.Component {
     
         state={user:''}

 

componentDidMount() {
       axios.get(`http://localhost:51492/api/User/${this.props.passedValue}`)
      .then(res => {
        const user = res.data;
        this.setState({  user });
      })

  }
  render() {
    return (
      <b >
       <i>{this.state.user.firstName}        {this.state.user.lastName} </i>

      </b>
    );
  }
}

NomPrenom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(NomPrenom);
