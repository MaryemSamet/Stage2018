import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {  Avatar, Button, Spin } from "antd";
import { Menu, Dropdown } from 'antd';
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "antd";
import Badge from "@material-ui/core/Badge";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

import reqwest from "reqwest";
import axios from "axios"
import UserNameComponentNotif from "./UserNameComponentNotif"
var dateformat = require('dateformat');
 
class LoadMoreList extends React.Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    notifications: [] ,
    active: null
  };

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


  componentDidMount() {
    axios.get(`http://localhost:51492/api/notification/all/${this.props.passedUser.id}`)
      .then(res => {
        const notifications = res.data;
        this.setState({        loading: false,          notifications });
      })
  }


 
  onLoadMore = () => {
    this.setState({
      loadingMore: true
    });
    this.getData(res => {
      const notifications = this.state.notifications.concat(res.results);
      this.setState(
        {
          notifications,
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
    const { loading, loadingMore, showLoadingMore, notifications } = this.state;
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
      
     <Dropdown 
 
          overlay={

          <Menu>
            
          
                <Menu.ItemGroup title="Notifications" >

               </Menu.ItemGroup>
 
                   { this.state.notifications.map(element  =>        
 
 <Menu.Item style={{display:'flex'}}  key={element.id} value={element.titre} > 
                    <Avatar size={50} icon="user" />

                  <a   href="http://www.alipay.com/"   style={{textDecoration:'none'}} > 

                  {<p  style ={{    width: '450px',blockSize:'45px',
                  padding: '2px 5px',   overflow: 'hidden' , whiteSpace:'initial', }} ><UserNameComponentNotif passedValue={element.senderUser}/> {element.titre}  
                  </p>    }
                   <p style= {{padding: '2px 5px'}}>  { dateformat(element.dateNotification , "dddd, mmmm dS, yyyy, h:MM:ss TT ")  } 
                   </p> </a></Menu.Item>
                   
                   )}
              
 
              <Menu.Item   style={{width:'100%' , position:'relative',textAlign: 'center'}} >  <b> Show All Notifications </b></Menu.Item>
   
</Menu> 
 
}

        trigger={['click']}>
   
  <Badge badgeContent={this.props.passedLongNotif} color="secondary"  style={{marginLeft:'13px'}}  >
    <Icon
      style={{
        fontSize: 30,
        color: '#817C7C',
        position: "relative",
        marginTop: 5
      }}
       
      type="global"
    />
  </Badge>
 
</Dropdown>

    );
  }
}

LoadMoreList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(LoadMoreList);

{/* <Dropdown overlay={<Menu >
  <Menu.Item key="0">
    <a href="http://www.alipay.com/">1st menu item</a>
  </Menu.Item>
  <Menu.Item key="1">
    <a href="http://www.taobao.com/">2nd menu item</a>
  </Menu.Item>
  <Menu.Divider />
  <Menu.Item key="3">3rd menu item</Menu.Item>
</Menu>
} trigger={['click']}>
   <IconButton
    style={{marginLeft:'13px'}}

  onClick={() => this.setModal2Visible(true)}
  aria-label="4 pending messages"
 >
  <Badge badgeContent={this.state.longueurNotif}color="secondary">
    <Icon
      style={{
        fontSize: 30,
        color: "#817C7C",
        position: "relative",
        marginTop: 5
      }}
      type="global"
    />
  </Badge>
</IconButton>

</Dropdown>
 */}
