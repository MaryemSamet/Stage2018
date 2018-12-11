import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import "antd/dist/antd.css";
import { Icon } from "antd";
import Typography from "@material-ui/core/Typography";
// webkitBackgroundSize: 'cover',
// mozBackgroundSize: 'cover',
// oBackgroundSize: 'cover',

 
function PaperSheet(props) {
  const { classes } = props;

  return (
    <div >
      <Paper className={classes.root} elevation={1} square="true" style={{backgroundImage: `url(${"images/cover1.jpg"})` ,backgroundSize:'cover', 
  width:'100%', height:550}}  >
        <Typography
          style={{
            position: "relative",
            top: 80,
            fontFamily: "Impact"
          }}
          variant="display3"
        >
 Find any service here
         </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PaperSheet);
