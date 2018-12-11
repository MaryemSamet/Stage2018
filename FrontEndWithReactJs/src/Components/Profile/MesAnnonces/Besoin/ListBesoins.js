import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Avatar, Button, Spin } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import reqwest from "reqwest";
import ListCard from "./ListCardBesoin";
import CardBesoins from "./cardBesoin"
import {  Col, Row } from "antd";
import axios from "axios"
class LoadMoreList extends React.Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    besoins: []
  };

  componentDidMount() {
    axios.get(`http://localhost:51492/api/AnnonceBesoin/all/${this.props.passedUser.id} `)
      .then(res => {
        const besoins = res.data;
        this.setState({ besoins });
      })
  }


 
  onLoadMore = () => {
    this.setState({
      loadingMore: true
    });
    this.getData(res => {
      const besoins = this.state.besoins.concat(res.results);
      this.setState(
        {
          besoins,
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
    const { loading, loadingMore, showLoadingMore, besoins } = this.state;
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

    <div><p align='center' style={{fontFamily:"Georgia",marginTop:'80px',position:'relative', fontSize:"35px"}}>  <i>All your needs</i> </p>  <div style={{ paddingLeft: "10%" , position:"relative", left : "-55px"}}>
    <Row gutter={16}  >
    { this.state.besoins.map(element  => <Col span={8} style={{  paddingTop: "4%"}}>  <CardBesoins   passedValue ={element}/> </Col>)}

     </Row>
     </div></div>
    );
  }
}

LoadMoreList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(LoadMoreList);
