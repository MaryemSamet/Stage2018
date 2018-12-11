import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Avatar, Button, Spin } from "antd";

import reqwest from "reqwest";
import UserNameComponent from "./UserNameComponent"
import axios from "axios"
var dateformat = require('dateformat');
 class LoadMoreList extends React.Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    discussions: [],
    users:[], 
    userID2 :'',
    active: null
  };  


  componentDidMount() {
    axios.get(`http://localhost:51492/api/Discussion/all/${this.props.passedUser.id}`)
      .then(res => {
        const discussions = res.data;
        this.setState({        loading: false,          discussions });
      })

  }

  toggle = (position) => {
    if (this.state.active === position) {
      this.setState({active : null})
    } else {
      this.setState({active : position})
    }
  }

  myColor = (position) => {
    if (this.state.active === position) {
      return "#E6E6E6";
    }
   }


  onLoadMore = () => {
    this.setState({
      loadingMore: true
    });
    this.getData(res => {
      const discussions = this.state.discussions.concat(res.results);
      const users = this.state.users.concat(res.results);

      this.setState(
        {
          discussions,users,
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
    const { loading, loadingMore, showLoadingMore, discussions } = this.state;
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
      
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={discussions}
        renderItem={item => (
         <a href="">
          <List.Item >
            <List.Item.Meta
   style={{background: this.myColor(`${item.id}`)}} onMouseOver={() => {this.toggle(`${item.id}`)}}
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<p><UserNameComponent passedValue={item.userID2}/> <p> Concerne l'annonce N° :{item.annonceID}</p></p>}
              description={<div>  {item.etat}  <p> envoyé le : { dateformat(item.dateDiscussion , "dddd, mmmm dS, yyyy , h:MM:ss TT")  }  </p></div>}           

            />
          </List.Item></a>
        )} 
      />
    );
  }
}

LoadMoreList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(LoadMoreList);
