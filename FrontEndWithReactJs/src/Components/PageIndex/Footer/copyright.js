import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Image } from "semantic-ui-react";
import IconButton from "@material-ui/core/IconButton";
import "antd/dist/antd.css";
import Typography from "@material-ui/core/Typography";

import { Icon } from "antd";
import List from "./list";
const styles = theme => ({
  root: {
     marginTop: '140px',
 
    ...theme.mixins.gutters(),
    marginTop: 2,
    width: "100%",
    height: 50,
    backgroundImage: `url(${"https://wallpaper-house.com/data/out/8/wallpaper2you_237208.jpg"})`
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1} square="true">
        <Typography style={{ fontSize: 10, color: "#FEFFFF" }} component="p">
          © 2018 | Made with{" "}
          <Icon style={{ fontSize: 10, color: "#F48F" }} type="heart" /> by
          Maryem
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
