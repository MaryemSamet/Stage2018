/*import React from "react";
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
import { Menu, Dropdown, Button } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Modifier
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Supprimer
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Details
      </a>
    </Menu.Item>
  </Menu>
);

const styles = theme => ({
  card: {
    width: 350,
    height: 350,
    borderRadius: "100%",
    backgroundImage: `url(${"https://image.freepik.com/vecteurs-libre/abstrait-gris-flou_7190-649.jpg"})`
  },
  media: {
    height: 0,
    marginLeft: -3,
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
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            style={{ height: 200, marginLeft: "10%", marginRight: "10%" }}
            action={
              <Dropdown overlay={menu} placement="topRight">
                <IconButton style={{ marginTop: "75%" }}>
                  <MoreVertIcon />
                </IconButton>
              </Dropdown>
            }
            title="Mon Service"
            subheader="Juin 10, 2018"
          />
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              style={{ marginLeft: "75%", marginTop: "-56%" }}
              aria-label="Share"
            >
              <ShareIcon />
            </IconButton>
          </CardActions>

          <CardContent
            style={{ marginTop: "-14%", marginLeft: "10%", marginRight: "10%" }}
          >
            <Typography component="p">
              Vous trouverez ici la description de votre service offert , nature
              du service , periode de disponibilité et d'autre information
              complementaires...
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
*/