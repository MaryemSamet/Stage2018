import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Avatar, Button, Spin } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import reqwest from "reqwest";
import ListCard from "./ListCardService";
import axios from "axios"
import {  Col, Row } from "antd";
import CardService from "./cardService"
class LoadMoreList extends React.Component {
  state = {
     services:  []
  };

  componentDidMount() {
    axios.get(`http://localhost:51492/api/AnnonceService `)
      .then(res => {
        const services = res.data;
        this.setState({ services });
      })
  }


 
  render() {
 
    return (
      <div style={{ paddingLeft: "12%" , position:"relative", left : "-55px"}}>
      <Row gutter={16}  >
      { this.state.services.map(element  => <Col span={8} style={{  paddingTop: "4%"}}>  <CardService passedUser={this.props.passedUser}  passedValue ={element}/> </Col>)}
      </Row>
       </div>  
    );
  }
}

LoadMoreList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(LoadMoreList);
