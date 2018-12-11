import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Avatar, Button, Spin } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import reqwest from "reqwest";
import ListCard from "./ListCardServices";
import { Card, Col, Row } from "antd";
import axios from "axios"
import CardService from "./cardService";

class LoadMoreList extends React.Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    services: []
  };
  componentDidMount() {
    axios.get(`http://localhost:51492/api/AnnonceService/all/${this.props.passedUser.id} `)
      .then(res => {
        const services = res.data;
        this.setState({ services });
      })
  }


 
  onLoadMore = () => {
    this.setState({
      loadingMore: true
    });
    this.getData(res => {
      const services = this.state.services.concat(res.results);
      this.setState(
        {
          services,
          loadingMore: false
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };

  render() {
    const { loading, loadingMore, showLoadingMore, services } = this.state;
    const loadMore = showLoadingMore ? (
      <div
        style={{
          textAlign: "center",
         }}
      >
        {loadingMore && <Spin />}
        {!loadingMore && (
          <Button onClick={this.onLoadMore}>loading more</Button>
        )}
      </div>
    ) : null;
    return (
      <div> <p align='center' style={{fontFamily:"Georgia",marginTop:'80px',position:'relative', fontSize:"35px"}}>  <i>Liste des services</i> </p><div style={{ paddingLeft: "10%" , position:"relative", left : "-55px"}}>
      <Row gutter={16}  >
      { this.state.services.map(element  => <Col span={8} style={{  paddingTop: "4%"}}>  <CardService   passedValue ={element}/> </Col>)}
  
       </Row>
       </div></div>
  
    );
  }
}

LoadMoreList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(LoadMoreList);
