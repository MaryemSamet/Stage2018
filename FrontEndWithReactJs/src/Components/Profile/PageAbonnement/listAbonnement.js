import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Avatar, Button, Spin } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Popconfirm from "./popconfirm";
import reqwest from "reqwest";
import axios from 'axios';
import BottonFollow from "./BottonFollow";
 
export default class LoadMoreList extends React.Component {
  state = {
   loading: true,
   loadingMore: false,
   showLoadingMore: true,
   persons: []
 };
 componentDidMount() {
   axios.get(`http://localhost:51492/api/following/allName/${this.props.passedUser.id}`)
     .then(res => {
       const persons = res.data;
       this.setState({loading: false, persons });
      })
 }

 onLoadMore = () => {
  this.setState({
    loadingMore: true
  });
  this.getData(res => {
    const persons = this.state.persons.concat(res.results);
    this.setState(
      {
        persons,
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
    const { loading, loadingMore, showLoadingMore, persons } = this.state;
    const loadMore = showLoadingMore ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }}
      >
        {loadingMore && <Spin />}
        {!loadingMore && (
          <Button onClick={this.onLoadMore}>loading more</Button>
        )}
      </div>
    ) : null;
    return (
      <div style={{marginTop:'80px',position:'relative'}} ><p align='center' style={{ fontFamily:"Georgia", fontSize:"35px"}}>  <i> All followings</i> </p>

      <List
        style={{
          width: "50%",
          left: "25%",marginTop:'80px',position:'relative'
        }}
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={persons}
        renderItem={item => (
          <List.Item actions={[<BottonFollow  passedUser={this.props.passedUser} passedValue={item} />, <a>Message</a>]}>
            <List.Item.Meta
              avatar={
                <a>
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{" "}
                </a>
              }
              title={<a href="https://ant.design">{item.firstName+" "+ item.lastName}</a>}
              description={item.bio}
            />
           </List.Item>
        )}
      />
      </div>
    );
  }
}

 