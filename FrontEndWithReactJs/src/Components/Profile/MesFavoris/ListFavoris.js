import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Avatar, Button, Spin } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import reqwest from "reqwest";
import ListCard from "./ListCardFavoris";
 import { Card, Col, Row } from "antd";
import CardFavoris from "./cardFavoris"
import axios from "axios"
  class LoadMoreList extends React.Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    favoris: []
  };
  componentDidMount() {
    axios.get(`http://localhost:51492/api/favoris/allName/${this.props.passedUser.id}`)
      .then(res => {
        const favoris = res.data;
        this.setState({ favoris });
      })
  }


 
  onLoadMore = () => {
    this.setState({
      loadingMore: true
    });
    this.getData(res => {
      const favoris = this.state.favoris.concat(res.results);
      this.setState(
        {
          favoris,
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
    const { loading, loadingMore, showLoadingMore, favoris } = this.state;
    const loadMore = showLoadingMore ? (
      <div
        style={{
          textAlign: "center"
        }}
      >
        {loadingMore && <Spin />}
        {!loadingMore && (
          <Button onClick={this.onLoadMore}>loading more</Button>
        )}
      </div>
    ) : null;
    return (
    <div style={{marginTop:'80px',position:'relative'}} ><p align='center' style={{ fontFamily:"Georgia", fontSize:"35px"}}>  <i>All Favorites</i> </p>
    <div style={{ paddingLeft: "10%" , position:"relative", left : "-55px"}}>
    <Row gutter={16}  >
    { this.state.favoris.map(element  => <Col span={8} style={{  paddingTop: "4%"}}>  <CardFavoris  passedUser={this.props.passedUser} passedValue ={element}/> </Col>)}

     </Row>
     </div></div>
    );
  }
}

LoadMoreList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(LoadMoreList);
