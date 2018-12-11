import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Menu, Dropdown } from "antd";
import { Icon } from "antd";
import GroupPic from "./GroupPic";
import CommentsExperience from "../CommentsExperience";
import { Modal, Button } from "antd";
import { SimpleShareButtons } from "react-simple-share";
import {Divider, Col, Row } from "antd";
import ButtonFollow from "../Services/BottonFollow";
import ButtonProfile from "../Services/BottonProfile";
import { Link } from "react-router-dom";
import axios from "axios"
var dateformat = require('dateformat');
const URL = `http://localhost:51492/api/UserReactionExperience`;

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: "22px",
      marginBottom: 7,
      color: "rgba(0,0,0,0.65)"
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: "inline-block",
        color: "rgba(0,0,0,0.85)"
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const pStyle = {
  fontSize: 16,
  color: "rgba(0,0,0,0.85)",
  lineHeight: "24px",
  display: "block",
  marginBottom: 16
};

const styles = theme => ({
  card: {
    maxWidth: 300,
    webkitBoxShadow: '6px 7px 20px 0px rgba(156,156,156,1)',
    mozBoxShadow: '6px 7px 20px 0px rgba(156,156,156,1)',
    boxShadow: '6px 7px 20px 0px rgba(156,156,156,1)'
    
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = { visibleModal: false, expanded: false, visible: false, visible2: false,     longueur:'0',
  longueur2:'0',otherUser:'',
  backgroundCouleur:'' 
};
 
  onClose = () => {
    this.setState({
      visible: false
    });
  };

 

  handleClick = () => {
    if(this.state.backgroundColor ==="#A4A4A4") 
    {  this.setState({backgroundColor:"red"})}
    else {  this.setState({backgroundColor:"#A4A4A4"})}

  }
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
  showModal2= () => {
    this.setState({
      visible2: true,
    });
  }
  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  showModal = () => {
    this.setState({
      visibleModal: true
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visibleModal: false
    });
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  getContent() {
    return <GroupPic />;
  }
  componentDidMount() {
   
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
      axios.get(`http://localhost:51492/api/User/${this.props.passedValue.userId}`)
    .then(res => {
      const otherUser = res.data;
      this.setState({ otherUser }); 
    })


 
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          title="Share in "
          visible={this.state.visibleModal}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
        >
          <SimpleShareButtons
            whitelist={["Facebook", "Twitter", "LinkedIn", "Google+"]}
          />
        </Modal>
       <Modal
          title="User informations  "
          visible={this.state.visible2}
           footer={null}
           onCancel={this.handleCancel2}

          >
           
           <div style={{width:'100%', display:'flex' ,}}>
             <ButtonProfile />{" "}
          
          <ButtonFollow passedUser={this.props.passedUser} passedValue={this.props.passedValue}/>
            </div>
          <p style={{ ...pStyle, marginBottom: 24 }}>
            Informations personnelles
          </p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Nom & Prénom" content={this.state.otherUser.firstName + this.state.otherUser.lastName}  />{" "}
            </Col>
       
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Ville" content={this.state.otherUser.ville} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Pays" content="Tunisie" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="Date de naissance"
                content= { dateformat(this.state.otherUser.birthDate , "dd/mmmm/yyyy ")  }
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Bio"
                content={this.state.otherUser.bio} 
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Proffession & compétences</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Proffession" content={this.state.otherUser.profession}  />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Competences"
                content=" ..."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="Hiba5@mail.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Numero de telephone"
                content="+216 55 67 63 23"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem title="Facebook" content=" Samet Hiba " />
            </Col>
          </Row>
        </Modal>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <a>
                {" "}
                <Avatar
                  onClick={this.showModal2}
                  aria-label="Recipe"
                  src="https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Profile-512.png"
                />
              </a>
            }
            title={this.props.passedValue.titre}
              subheader={<i style={{fontSize:'13px'}} >{ dateformat(this.props.passedValue.datePub , "dddd, mmmm dS, yyyy, h:MM:ss TT ") } </i>}

          />
          <CardContent>
            <div>{this.getContent()}</div>
          </CardContent>
          <CardContent>
            <Typography component="p">
                {this.props.passedValue.contenu}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Typography variant="p">
            {this.state.longueur}
{" "}
              <IconButton onClick={this.handleClickAddLike}>
              <Icon type="heart"  style={{color:this.state.backgroundCouleur , fontSize:"30px"}}  />
              </IconButton>{" "}
            </Typography>
            <IconButton aria-label="Share" onClick={this.showModal}>
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Comments:
              </Typography>
              <CommentsExperience  passedValueId ={this.props.passedValue.id} />
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
