import React from "react";
import PropTypes, { func } from "prop-types";
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
import "antd/dist/antd.css";
import { Icon } from "antd";
import { Popconfirm, message } from "antd";
import { Modal } from "antd";
import { SimpleShareButtons } from "react-simple-share";
import axios from "axios"
var dateformat = require('dateformat');

const styles = theme => ({
  card: {
    width: 400,
   
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
    [theme.breakpoints.up("sm")]: {}
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

 
function Contenu (props) {
  if(props.passed.descriptionBesoin!=null) {
  return<div>
   
<Typography paragraph>
<p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i> Desription of the need : </i> </p><p>{props.passed.descriptionBesoin}</p>
</Typography>

<Typography paragraph>
<p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i> Disponibilty of service is between :  </i></p><p>{props.passed.dateDebutDisponibiliteService} ||  {props.passed.dateFinDisponibiliteService} </p>
</Typography>
<Typography paragraph>
<p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i>  Note about the disponibilty period : </i></p><p>{props.passed.remarqueSurDisponibilite} </p>
</Typography>
</div>} 
 
 return<div>
 
<Typography paragraph>
<p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i> Desription of skills : </i></p><p>{props.passed.descriptionCompetence} </p>
</Typography>

<Typography paragraph>
<p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i>Disponibilty required is between : </i></p><p> {props.passed.dateDebutDisponibiliteDemande} ||  {props.passed.dateFinDisponibiliteDemande} </p>
</Typography>
<Typography paragraph>
<p style={{fontFamily: "Georgia" , color:"#610B21"}} > <i> Note about the disponibilty period : </i> </p><p>{props.passed.remarqueSurDispo}</p>
</Typography>
</div>
}

function cancel(e) {
  console.log(e);
  message.error("Not Deleted From Favorite");
}



class RecipeReviewCard extends React.Component {
  state = { expanded: false };
  confirm  = (e) =>{
    e.preventDefault();

    axios.delete(`http://localhost:51492/api/Favoris/${this.props.passedUser.id}/${this.props.passedValue.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
     axios.delete(`http://localhost:51492/api/UserReactionAnnonce/${this.props.passedUser.id}/${this.props.passedValue.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    
    message.success("Favorite Deleted");
  
  }
  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
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
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <a>
                {" "}
                <Avatar
                  aria-label="Recipe"
                  src="https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Profile-512.png"
                />
              </a>
            }
            title={this.props.passedValue.titre}
            subheader={ dateformat(this.props.passedValue.datePublication , "dddd, mmmm dS, yyyy ")
          }
          />
          <CardMedia
            className={classes.media}
            image="https://beinweb.fr/wp-content/uploads/2015/02/comment-utiliser-les-favoris-sur-twitter.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
           <p>  {this.props.passedValue.description}</p>
       

            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <Popconfirm
    title="Do you really want to delete this post from favorites ? "
    onConfirm={this.confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
 <IconButton aria-label="remove favorites">
              <Icon type="close-circle" />
            </IconButton>  
            </Popconfirm>
            <IconButton aria-label="Share" onClick={this.showModal}>
              <ShareIcon />
            </IconButton>
                        <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
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
              <Contenu passed={this.props.passedValue} />
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
