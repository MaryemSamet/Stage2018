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
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Menu, Dropdown } from "antd";
import { Icon } from "antd";
import Comments from "../comments";
import { Modal, Button } from "antd";
import { SimpleShareButtons } from "react-simple-share";
import {  Divider, Col, Row } from "antd";
import { Link } from "react-router-dom";
import ButtonFollow from "../Services/BottonFollow";
import ButtonProfile from "../Services/BottonProfile";
import axios from "axios"
const URL = `http://localhost:51492/api/UserReactionAnnonce`;

var dateformat = require('dateformat');
const URL2 = `http://localhost:51492/api/Favoris`;

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

const menu = (
  <Menu>
    <Menu.Item>
      {" "}
      <Link to="/servicecontrebesoin"> Propose a service</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/cadeau"> Propose a gift service</Link>{" "}
    </Menu.Item>
  </Menu>
);

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
  state = { visibleModal: false, expanded: false, visible: false  ,visible2: false,  longueur:'0',
  longueur2:'0',otherUser:'',
  backgroundCouleur:'' };


 
  showModal2= () => {
    this.setState({
      visible2: true,
    });
  }

 


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  onClose = () => {
    this.setState({
      visible: false
    });
  };
  handleClickAddLike = event => {
    event.preventDefault();
   
    if(this.state.backgroundCouleur ==="yellow") 
    {  this.setState({backgroundCouleur:"gray"})
  
    this.setState({ longueur:this.state.longueur-1 });
  }
    else {  
      this.setState({backgroundCouleur:"yellow"})
      this.setState({ longueur:this.state.longueur+1 });

    }

   
    const UserReaction = {
      userID: this.props.passedUser.id,
       annonceID: this.props.passedValue.id,
   
    };
   

    const FavorisPost = {
      userID:this.props.passedUser.id,
       annonceID: this.props.passedValue.id,
  
    };

       axios(URL, {
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
      axios(URL2, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        data: FavorisPost,
      })
        .then(response => response.data)
        .catch(error => {
          throw error;
        });

  
  }
    

  componentDidMount() {
   
    axios.get(`http://localhost:51492/api/UserReactionAnnonce/UserLikedAnnonce/${this.props.passedValue.id}`)
    .then(res => {
      const longueur = res.data.length;
      this.setState({ longueur });
    })
    axios.get(`http://localhost:51492/api/UserReactionAnnonce/MeLikedAnnonce/${this.props.passedUser.id}/${this.props.passedValue.id}`)
    .then(res => {
      const longueur2 = res.data.length;
      this.setState({ longueur2 });
      if (`${longueur2}` == 1)
      {this.setState({backgroundCouleur:"yellow"})}
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
 
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }

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

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          title="Share in"
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
            <ButtonFollow  passedUser={this.props.passedUser} passedValue={this.props.passedValue} />
           </div>

          <p style={{ ...pStyle, marginBottom: 24 }}>
            User Informations
          </p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Firt && last name" content={this.state.otherUser.firstName +"  "+ this.state.otherUser.lastName}  />{" "}
            </Col>
             
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content={this.state.otherUser.ville}  />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="Tunisie" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="Birh Date"
                content={ dateformat(this.state.otherUser.birthDate , "dd/mmmm/yyyy ")  }
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Bio"
                content={this.state.otherUser.bio} 
                />
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Profession & skills
</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Proffession" content={this.state.otherUser.profession} />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="  ....  "
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contact</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content={this.state.otherUser.email} />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Phone Number"
                content={"+216 "+this.state.otherUser.tel}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem title="Facebook" content={this.state.otherUser.lienFacebook} />
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
            action={
              <Dropdown overlay={ <Menu>
                <Menu.Item>
                  {" "}
                  <Link to={`/servicecontrebesoin/${this.props.passedValue.id}/${this.props.passedValue.userId}`}> Propose a service</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={`/cadeau/${this.props.passedValue.id}/${this.props.passedValue.userId}`}> Propose a gift </Link>{" "}
                </Menu.Item>
              </Menu>} placement="topRight">
                <IconButton style={{ marginTop: "75%" }}>
                  <MoreVertIcon />
                </IconButton>
              </Dropdown>
            }
            title={this.props.passedValue.titre}
             subheader={<i style={{fontSize:'13px'}} >{ dateformat(this.props.passedValue.datePublication , "dddd, mmmm dS, yyyy, h:MM:ss TT ") } </i>}

          />
          <CardMedia
            className={classes.media}
            image="http://www.chubouake.com/images/besoin-aide.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
            <p style={{fontFamily: "Georgia" , color:"#610B21"}} >   <i > Description :  </i> </p>{this.props.passedValue.description}
            </Typography>
            
            <Typography component="p">
            <p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i>Skills of this person :  </i></p> {this.props.passedValue.descriptionCompetence}
            </Typography>
            <Typography variant="p">
        <p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i> The availability of the person to make this service is between : </i></p>  { dateformat(this.props.passedValue.dateDebutDisponibiliteDemande , "dddd, mmmm dS, yyyy ")  }  || { dateformat(this.props.passedValue.dateFinDisponibiliteDemande , "dddd, mmmm dS, yyyy")  }  
         </Typography>
         <Typography component="p">
         <p style={{fontFamily: "Georgia" , color:"#610B21"}} >  <i>Note on the requested period :  </i></p> {this.props.passedValue.remarqueSurDispo}
            </Typography>

            
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Typography variant="h2" style={{fontSize:"27px"}}>
            {this.state.longueur}
{" "}
        <IconButton onClick={this.handleClickAddLike}>
         <Icon type="star" style={{color:this.state.backgroundCouleur , fontSize:"30px"}}  />
         </IconButton>
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
              <Comments />
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
