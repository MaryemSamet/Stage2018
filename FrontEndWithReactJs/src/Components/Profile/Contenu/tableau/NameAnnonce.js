import React from "react";
import "antd/dist/antd.css";
 import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
  
 import axios from 'axios'

class NomPrenom extends React.Component {
     
         state={annonce:''}

 

componentDidMount() {
       axios.get(`http://localhost:51492/api/Annonce/${this.props.passedValue}`)
      .then(res => {
        const annonce = res.data;
        this.setState({  annonce });
      })

  }
  render() {
    return (
      <b >
       <i>{this.state.annonce.titre}        </i>

      </b>
    );
  }
}

NomPrenom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(NomPrenom);
