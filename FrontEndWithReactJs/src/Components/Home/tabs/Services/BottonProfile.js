import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
 import NavigationIcon from "@material-ui/icons/Navigation";
import {  Button } from 'antd';
import { Link } from "react-router-dom";

import "antd/dist/antd.css";

class FloatingActionButtons extends React.Component {
render(){
   return (
    <Link to="/otheruser" style={{width:'50%' }}>
    <Button type="secondary"   style={{width:'100%' }}  >        <NavigationIcon/>
visiter</Button>
    </Link>

  )
}}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(FloatingActionButtons);


/*      <Button
      style={{width:'50%', backgroundColor:'red' }}
        color="secondary"
        aria-label="Delete"
       >
        <NavigationIcon/>
        Visiter profile
      </Button>
    
*/