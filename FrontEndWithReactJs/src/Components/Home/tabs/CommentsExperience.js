import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios"
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class CheckboxListSecondary extends React.Component {
  state = { comments : []}
  componentDidMount() {
    axios.get(`http://localhost:51492/api/CommentSurAnnonce/GetAllCommentOfAnnonce/${this.props.passedValueID}`)
      .then(res => {
        const comments = res.data;
         this.setState({ comments });

      })
  }
 
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {this.state.comments.map(value => (
            <ListItem key={value} dense button className={classes.listItem}>
              <Avatar
                alt="Remy Sharp"
                src="http://beragaminfo.com/wp-content/uploads/2017/09/These-Are-the-Photos-Your-Dating-Profile-Absolutely-Must-Have-According-to-Matchmakers.jpg"
              />
              <ListItemText primary={value.contenu} />
              <ListItemSecondaryAction />
            </ListItem>
          ))}
        </List>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Ecrire ton commentaire ici
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxListSecondary);
