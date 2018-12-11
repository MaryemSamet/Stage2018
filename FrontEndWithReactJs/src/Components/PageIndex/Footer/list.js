import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    marginTop: 124,
    marginLeft: 550
  }
});

class InteractiveList extends React.Component {
  state = {
    dense: false,
    secondary: false
  };

  render() {
    const { classes } = this.props;
    const { dense } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <List dense={dense}>
            <Typography component="p">
              {" "}
              <a style={{ fontSize: 14, color: "#FFF" }}> About us </a>
            </Typography>
            -
            <Typography component="p">
              {" "}
              <a style={{ fontSize: 14, color: "#FFF" }}>
                {" "}
                Contact us{" "}
              </a>{" "}
            </Typography>
            -
            <Typography component="p">
              {" "}
              <a style={{ fontSize: 14, color: "#FFF" }}> Our services </a>{" "}
            </Typography>
          </List>
        </Grid>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InteractiveList);
