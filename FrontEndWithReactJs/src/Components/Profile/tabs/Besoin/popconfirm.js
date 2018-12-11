import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Popconfirm, message } from "antd";
import { Icon } from "antd";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);




class LoadMoreList extends React.Component {
 
 
 
  confirm  = (e) =>{
    e.preventDefault();

    axios.delete(`http://localhost:51492/api/Annonce/${this.props.passedVal}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    console.log(`${this.props.passedVal}`);
  
    
    message.success("Need deleted");
  
  }
  
    cancel= (e) => {
    console.log(e);
    message.error("Need deleted");
  }
  
  
  render() {
 
    return (
      <form onSubmit={this.handleSubmit}>
   
  <Popconfirm
  title="Do you really want to delete this need?"
  onConfirm={this.confirm}
  onCancel={this.cancel}
  okText="Yes"
  cancelText="No"
>
  <a style={{ color: "#A6A6A6" }} href="#">
    <IconText type="delete" text="Delete" />
 
  </a>
</Popconfirm>
</form>

    );
  }
}

LoadMoreList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(LoadMoreList);
