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
import "antd/dist/antd.css";
import { Icon } from "antd";
import { Popconfirm, message } from "antd";
import { Modal } from "antd";
import { SimpleShareButtons } from "react-simple-share";

var dateformat = require('dateformat');

const styles = theme => ({
  card: {
    width: 400
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
function confirm(e) {
  console.log(e);
  message.success("Service deleted");
}

function cancel(e) {
  console.log(e);
  message.error("Service not deleted");
}

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

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
    title="Do you want to delete this service ?"
    onConfirm={confirm}
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
              <Typography paragraph variant="body1">
                D'autre informations complementaires :
              </Typography>
               <Typography paragraph>
              <p>   {this.props.passedValue.descriptionCompetence} </p>
              </Typography>
              <Typography paragraph>
              <p> {this.props.passedValue.disponibiliteDemande} </p>
              </Typography>
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
