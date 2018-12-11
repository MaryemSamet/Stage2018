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

 
 

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class LoadMoreList extends React.Component {
  state = {
    besoins: [], backgroundColor: '#A4A4A4' };
  
  handleClick = () => {
    if(this.state.backgroundColor ==="#A4A4A4") 
    {  this.setState({backgroundColor:"#F7FE2E"})}
    else {  this.setState({backgroundColor:"#A4A4A4"})}

  }

  componentDidMount() {
    axios.get(`http://localhost:51492/api/AnnonceBesoin/all/${this.props.passedUser.id}`)
      .then(res => {
        const besoins = res.data;
        this.setState({ besoins });
      })
  }


  render() {
    const { besoins } = this.state;

    return (
      <div  >
      <List gutter={16}  >
      { this.state.besoins.map(element  => <li span={8}  >  <Element  passedUser={this.props.passedUser} passedValue ={element}/> </li>)}
      </List>
       </div>  

 
    );
  }
}
