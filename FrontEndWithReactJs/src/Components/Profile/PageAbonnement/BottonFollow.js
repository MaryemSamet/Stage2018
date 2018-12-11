import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
 import "antd/dist/antd.css";
import { Icon } from "antd";
import {  Button } from 'antd';
import axios from 'axios';
const URL = `http://localhost:51492/api/follower`;
const URL2 = `http://localhost:51492/api/notification`;
var nowDate = new Date();

class ContainedButtons extends React.Component {
state= {
  followed : '',
  long:'0'

}
 

 componentDidMount() {
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
    FollowedUserId: this.props.passedValue.id,
    UserProfile: this.props.passedUser.id
    };


    
    const notifAbonne = {
      titre :'cette personne a commencé à vous suivre  ',
      typeNotif:'abonné',
      dateNotification: nowDate,
      vu:false,
       receiverUser: this.props.passedValue.id,
      senderUser:this.props.passedUser.id,
     
     }
     if(this.state.long == 0) {
      axios(URL2, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        data: notifAbonne,
      })
        .then(response => response.data
      )
        .catch(error => {
          throw error;
        });
    
    
    }
         
    
     
 

     axios(URL, {
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



  render(){
   return (
    <Button type="primary" style={{width:'100%'  }}          onClick={this.handleSubmit}
    >        <Icon type="user-add" />     
               {this.state.followed}
    </Button>

   
    
  );
}
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(ContainedButtons);
 