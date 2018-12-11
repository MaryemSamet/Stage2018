import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Icon } from "antd";
import Popconfirm from "./popconfirm";
import ModifierDrawer from "./modifierDrawer";
import DialogComment from "../DialogComment";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import axios from 'axios';
import Element from "./Element"
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

 

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class AddServiceClass extends React.Component {
  
  state = {
    experiences: [], backgroundColor: '#A4A4A4' };
    handleClick = () => {
      if(this.state.backgroundColor ==="#A4A4A4") 
      {  this.setState({backgroundColor:"red"})}
      else {  this.setState({backgroundColor:"#A4A4A4"})}
  
    }
  

  componentDidMount() {
     axios.get(`http://localhost:51492/api/experience/all/${this.props.passedUser.id}`)
      .then(res => {
        const experiences = res.data;
        this.setState({ experiences });
      })
  }


  render() {
    const { experiences } = this.state;

    return (
      <div >
      <List gutter={16}  >
      { this.state.experiences.map(element  => <li span={8}  >  <Element   passedValue ={element} passedUser={this.props.passedUser} /> </li>)}
      </List>
       </div>  

    );
  }
}
AddServiceClass.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(AddServiceClass);
