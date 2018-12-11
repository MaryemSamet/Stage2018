import React from "react";
import "antd/dist/antd.css";
import { Menu, Icon, Button } from "antd";
import { Affix } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
 
const listRouters = [
  '',
  '/profile',
  '/favoris',
  '/besoin',
  '/service',
  '/abonne',
  '/abonnement',
];
 class LinkClass extends React.Component {
  state = {
    collapsed: false
  };

  _handleClick(menuItem,listRouter) { 
    this.setState({ active: menuItem, activerouter: listRouter });
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {const activeStyle = { color: '#ff3333' };

    return (
      <div>
      <Link 
           style={this.state.active === menuItem ? activeStyle : {}} 
           onClick={this._handleClick.bind(this, menuItem,listRouter)}
           to={listRouter} > 
           <Icon type="home" />
          <span> {this.props.passedValue}</span> 
      </Link>
      </div>
    );
  }
}

LinkClass.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles()(LinkClass);
