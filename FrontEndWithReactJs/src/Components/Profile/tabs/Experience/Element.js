

import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Icon } from "antd";
import Popconfirm from "./popconfirm";
import ModifierDrawer from "./modifierDrawer";
import DialogComment from "../DialogComment";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import axios from 'axios';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

var dateformat = require('dateformat');
const URL = `http://localhost:51492/api/UserReactionExperience`;
 

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ElementClass extends React.Component {
  state = {
    experiences: [],backgroundColor:'', backgroundCouleur: '',longueur:0, longueur2:0
  };

  handleClickAddLike = event => {
    event.preventDefault();
   
    if(this.state.backgroundCouleur ==="red") 
    {  this.setState({backgroundCouleur:"gray"})
  
    this.setState({ longueur:this.state.longueur-1 });
  }
    else {  
      this.setState({backgroundCouleur:"red"})
      this.setState({ longueur:this.state.longueur+1 });

    }


    const UserReaction = {
      userID: this.props.passedUser.id,
       experienceID: this.props.passedValue.id,
 
    };
   
     return axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: UserReaction,
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });

  
  }

   

 
 /* handleClick = () => {
    if(this.state.backgroundColorUnLiked ==="#A4A4A4") 
    {  this.setState({backgroundColorUnLiked: 'red',backgroundColorLiked:'#A4A4A4' })}
    else {  this.setState({backgroundColorLiked:'#A4A4A4', backgroundColorUnLiked:'red'})}

  }
  */
   componentDidMount() {
    axios.get(`http://localhost:51492/api/experience/`)
      .then(res => {
        const experiences = res.data;
        this.setState({ experiences });
      })
      axios.get(`http://localhost:51492/api/UserReactionExperience/UserLikedExperience/${this.props.passedValue.id}`)
      .then(res => {
        const longueur = res.data.length;
        this.setState({ longueur });
      })
 
      axios.get(`http://localhost:51492/api/UserReactionExperience/MeLikedExperience/${this.props.passedUser.id}/${this.props.passedValue.id}`)
      .then(res => {
        const longueur2 = res.data.length;
        this.setState({ longueur2 });
        if (`${longueur2}` == 1)
        {this.setState({backgroundCouleur:"red"})}
        else {
          this.setState({backgroundCouleur:"gray"})
        }
  
  
      })
 
  }


  render() {
    const { experiences } = this.state;

    return (
      <div style={{   
      borderRadius: '5px',
      borderRightStyle: 'none',
      marginBottom: '5px',
      marginTop: '10px',
      paddingLeft:'20px',
      webkitBoxShadow: '6px 7px 20px 0px rgba(30,29,82,0.63)',
      mozBoxShadow: '6px 7px 20px 0px rgba(30,29,82,0.63)',
      boxShadow: '6px 7px 20px 0px rgba(30,29,82,0.63)',
      paddingRight:"22px",

        
       }} >
      <List
      itemLayout="vertical"
      size="large"
      
   
       >
        <List.Item
          key={this.props.passedValue.title}
          actions={[
            <Typography variant="p">
              <IconButton onClick={this.handleClickAddLike}>
              <Icon type="heart"  style={{color:this.state.backgroundCouleur , fontSize:"30px"}}  />
              </IconButton>{" "}
             {this.state.longueur} 
            </Typography>,
  
            <DialogComment passedVal={this.props.passedValue.id}  />,
            <ModifierDrawer />,
            <Popconfirm  passedVal={this.props.passedValue.id}   />
          ]}
          extra={
            <img
              width={250}
              alt="logo"
               src="http://www.libellulesmagazine.net/wp-content/uploads/2018/04/tattoo-2894318__340-300x200.jpg"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={this.props.passedValue.id} />}
            title={<a href={this.props.passedValue.href}>{this.props.passedValue.titre}</a>}
            description=  { dateformat(this.props.passedValue.datePub , "dddd, mmmm dS, yyyy, h:MM:ss TT ")  }       
          />
           {this.props.passedValue.contenu}
        </List.Item>
    
   </List>
   </div>
    );
  }
}

ElementClass.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(ElementClass);
