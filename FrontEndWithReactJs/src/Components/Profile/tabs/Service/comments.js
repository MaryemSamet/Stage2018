import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
 
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class CheckboxListSecondary extends React.Component {
  

  state = {
    persons: [],
   }
  componentDidMount() {
    axios.get(`http://localhost:51492/api/CommentSurAnnonce/GetAllCommentOfAnnonce/${this.props.passedVal}`)
      .then(res => {
        const persons = res.data;
         this.setState({ persons });

      })
  }
 
  render() {
    const { classes } = this.props;

    return (   

<div className={classes.root}>
       <List>
         {this.state.persons.map(value => (
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
     </div>
 
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxListSecondary);
