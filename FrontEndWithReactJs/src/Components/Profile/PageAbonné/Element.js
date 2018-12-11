

import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Avatar, Button, Spin } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import reqwest from "reqwest";
import axios from 'axios';

const URL = `http://localhost:51492/api/follower`;

export default class LoadMoreList extends React.Component {
   state = {
    
    persons: [] , 
    followed : '',
    long:'0'
  };
  componentDidMount() {
    axios.get(`http://localhost:51492/api/follower/allName/${this.props.passedUser.id}`)
      .then(res => {
        const persons = res.data;
        this.setState({loading: false, persons });
      })

      axios.get(`http://localhost:51492/api/Follower/MeFollowSomone/${this.props.passedUser.id}/${this.props.passedValue.id}`)
      .then(res => {
        const long = res.data.length;
 
         this.setState({ long });
        if (`${long}` == 1)
         {this.setState({followed:"unfollow"})}
         else {
           this.setState({followed:"follow"})
         }
    
      })

  }
  handleSubmit = event => {

    event.preventDefault();
    if(this.state.followed ==="follow") 
    {  this.setState({followed:"unfollow"})}
    else {  this.setState({followed:"follow"})}
   
     const propositionCadeau = {
      FollowedUserId: this.props.passedUser.id ,
      UserProfile:this.props.passedValue.id
      };
  
  
      return axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: propositionCadeau,
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  
  }
  

  handleClick = () => {
    if(this.state.followed ==="follow") 
    {  this.setState({followed:"unfollow"})}
    else {  this.setState({followed:"follow"})}

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
        <List
        style={{
          width: "50%",
          left: "25%"
        }}
        className="demo-loadmore-list"
         itemLayout="horizontal"
         >
           <List.Item
            actions={[
              
              <a>Message</a>
            ]}
          >
            <List.Item.Meta
              avatar={
                <a> 
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{" "}
                </a>
              }
              title={<a href="https://ant.design">{this.props.passedValue.firstName+" "+ this.props.passedValue.lastName}</a>}
              description={this.props.passedValue.bio}
             />
             <Button type="primary" icon="user-add" onClick={this.handleSubmit}>
             {this.state.followed}
              </Button>
          </List.Item>
        
    </List>
    );
  }
}
 