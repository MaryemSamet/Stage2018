import React,{ Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

const { Sider } = Layout;

const SubMenu = Menu.SubMenu;

class SideMenu extends Component{

  static propTypes = {
    location: PropTypes.object.isRequired
  }
  
  render() {
    const { location } = this.props;
    return (
      <Menu theme="white" mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}
      style={{position:'fixed',zIndex:'5',width:'100%',    flexGrow: 1
,      top:'10%'}} >
      <Menu.Item key="/">
        <NavLink to="/" >
          <Icon type="user" />
          <span>Home</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/profile">
        <NavLink to="/profile">
           <Icon type="solution" />
           <span>My Profile</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/favoris">
        <NavLink to="/favoris">
           <Icon type="star-o" />
           <span>My Favorites</span>
        </NavLink>
      </Menu.Item>

        {/* <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="database" />
                <span>Mes annonces</span>
              </span>
            }
          >
            <Menu.Item
              key="/besoin"
              style={{
                borderRadius: "25px",
                boxShadow: " 0px 0px  rgba(0, 0, 0, 0.1) "
              }}
            >
              <NavLink to="/besoin">Mes besoins</NavLink>
            </Menu.Item>
            <Menu.Item
              key="/service"
              style={{
                borderRadius: "25px",
                boxShadow: " 0px 0px  rgba(0, 0, 0, 0.1) "
              }}
            >
              <NavLink to="/service">Mes services</NavLink>
            </Menu.Item>
          </SubMenu> */}
          <Menu.Item key="/abonne">
        <NavLink to="/abonne">
           <Icon type="rocket" />
           <span>My Followers</span>
        </NavLink>
      </Menu.Item>

            <Menu.Item key="/abonnement">
        <NavLink to="/abonnement">
           <Icon type="user" />
           <span>My Followings</span>
        </NavLink>
      </Menu.Item>
          
    </Menu>

    )
  }
}

export default withRouter(SideMenu);


/*

import React from "react";
import "antd/dist/antd.css";
import { Menu, Icon, Button } from "antd";
import { Affix } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { browserHistory} from 'react-router';
import { NavLink, withRouter } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
 
class MenuUser extends React.Component {
  state = {
    collapsed: false
    };
    static propTypes = {
      location: PropTypes.object.isRequired
    }
  
  

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };


 

  render() {    const { location } = this.props;

    return (
      <div>
        <Menu
          mode="horizontal"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          style={{
            width: "100%"
          }}
          defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}          >
          <Menu.Item
            key="/"
            style={{
              borderRadius: "25px",
              boxShadow: " 0px 0px  rgba(0, 0, 0, 0.1) "
            }}
           >
            <NavLink to="/"        >
              <Icon type="home" />
              <span>Accueil</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="/profile"
 
            style={{
              borderRadius: "25px",
              boxShadow: " 0px 0px  rgba(0, 0, 0, 0.1) "
            }}
          >
            <NavLink to="/profile">
              <Icon type="solution" />
              <span>Profile</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="/favoris"
            style={{
              borderRadius: "25px",
              boxShadow: " 0px 0px  rgba(0, 0, 0, 0.1) "
            }}
          >
            <NavLink to="/favoris">
              <Icon type="star-o" />
              <span>Mes favoris</span>
            </NavLink>
          </Menu.Item>
         <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="database" />
                <span>Mes annonces</span>
              </span>
            }
          >
            <Menu.Item
              key="/besoin"
              style={{
                borderRadius: "25px",
                boxShadow: " 0px 0px  rgba(0, 0, 0, 0.1) "
              }}
            >
              <NavLink to="/besoin">Mes besoins</NavLink>
            </Menu.Item>
            <Menu.Item
              key="/service"
              style={{
                borderRadius: "25px",
                boxShadow: " 0px 0px  rgba(0, 0, 0, 0.1) "
              }}
            >
              <NavLink to="/service">Mes services</NavLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="/abonne"
            style={{
              borderRadius: "25px",
              boxShadow: " 0px 0px  rgba(0, 0, 0, 0.1) "
            }}
          >
            <NavLink to="/abonne">
              <Icon type="rocket" />
              <span>Mes abonnés</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="/abonnement"
            style={{
              borderRadius: "25px",
              boxShadow: " 0px 0px  rgba(0, 0, 0, 0.1) "
            }}
          >
            <NavLink to="/abonnement">
              <Icon type="user" />
              <span>Mes abonnements</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

MenuUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(MenuUser);
*/