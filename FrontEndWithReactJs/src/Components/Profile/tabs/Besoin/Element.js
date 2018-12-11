import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Icon } from "antd";
import Popconfirm from "./popconfirm";
import ModifierDrawer from "./modifierDrawer";
import DialogComment from "../DialogComment";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import axios from 'axios';
var dateformat = require('dateformat');


const URL = `http://localhost:51492/api/UserReactionAnnonce`;

 

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class LoadMoreList extends React.Component {
  state = {
    besoins: [], backgroundColor:'', backgroundColorUnLiked: '#A4A4A4',backgroundColorLiked:'yellow',longueur2:0,longueur:0  };
  /*
  handleClick = () => {
    if(this.state.backgroundColor ==="#A4A4A4") 
    {  this.setState({backgroundColor:"#F7FE2E"})}
    else {  this.setState({backgroundColor:"#A4A4A4"})}

  }
*/
handleClickAddLike = event => {
  event.preventDefault();
 
    
  const UserReaction = {
    userID:this.props.passedUser.id,
     annonceID: this.props.passedValue.id,

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

  componentDidMount() {
    axios.get(`http://localhost:51492/api/AnnonceBesoin`)
      .then(res => {
        const besoins = res.data;
        this.setState({ besoins });
      })
      axios.get(`http://localhost:51492/api/UserReactionAnnonce/UserLikedAnnonce/${this.props.passedValue.id}`)
      .then(res => {
        const longueur = res.data.length;
        this.setState({ longueur });
      })
      axios.get(`http://localhost:51492/api/UserReactionAnnonce/MeLikedAnnonce/${this.props.passedUser.id}/${this.props.passedValue.id}`)
      .then(res => {
        const longueur2 = res.data.length;
        this.setState({ longueur2 });
      })

  }


  render() {
    const { besoins } = this.state;

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
  paddingRight:"22px"
  
    
         
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
         <Icon type="star" style={{color:this.state.longueur2 ? `${this.state.backgroundColorLiked}` : `${this.state.backgroundColorUnLiked}`, fontSize:"30px"}} onClick= {this.handleClick}  />
         </IconButton>
         {this.state.longueur} 

            </Typography>,
  
            <DialogComment />,
            <ModifierDrawer />,
            <Popconfirm passedVal={this.props.passedValue.id}  />
          ]}
          extra={
            <img
              width={250}
              alt="logo"
              src="http://2.bp.blogspot.com/-KLby4fpMEno/UM8T7RY39TI/AAAAAAAAB-Q/bS6AzCik5ps/s640/windows+server+2012+storage+spaces.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={this.props.passedValue.id} />}
            title={<a     href={this.props.passedValue.href}>{this.props.passedValue.titre}</a>}
            description=   { dateformat(this.props.passedValue.datePublication , "dddd, mmmm dS, yyyy, h:MM:ss TT ")  }       

          />
           <Typography variant="p">
           <p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i>Description : </i> </p>{this.props.passedValue.description}

        </Typography>

          <Typography variant="p">
          <p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i>My Skills : </i> </p>  {this.props.passedValue.descriptionCompetence}
          </Typography>
         
         <Typography variant="p">
         <p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i>The period requested to have this need : </i></p>  { dateformat(this.props.passedValue.dateDebutDisponibiliteDemande , "dddd, mmmm dS, yyyy ")  }  || { dateformat(this.props.passedValue.dateFinDisponibiliteDemande , "dddd, mmmm dS, yyyy")  }  
         </Typography>

          <Typography variant="p">
          <p style={{fontFamily: "Georgia" , color:"#610B21"}} ><i>Note on the period requested :</i>   </p>  {this.props.passedValue.remarqueSurDispo}
          </Typography>
        </List.Item>
    
</List>
</div>
    );
  }
}
