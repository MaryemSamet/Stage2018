import Typography from "@material-ui/core/Typography";

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  topo: {
    marginLeft: 390,
    marginTop: 50
  }
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function Title(props) {
  const { classes } = props;

  return (
    <Typography className={classes.topo} variant="headline" component="h3">
      People experiences and memories about exchanging via "Donnant Donnant" {" "}
    </Typography>
  );
}

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
