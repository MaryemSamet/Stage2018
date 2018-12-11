import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Image } from "semantic-ui-react";
import IconButton from "@material-ui/core/IconButton";
import "antd/dist/antd.css";
import { Icon } from "antd";
import List from "./list";
import List2 from "./list2";
import { Affix } from "antd";

const styles = theme => ({
  root: {
     marginTop: '140px',
    
    ...theme.mixins.gutters(),
     paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
     display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: 320,
    backgroundImage: `url(${"https://wallpaper-house.com/data/out/8/wallpaper2you_237208.jpg"})`
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1} square="true">
        <Image
          height="60"
          width="250"
          src="images/donant.png"
        />

        <List />
        <List2 />

        <div>
          <div style={{ marginLeft: 10, marginTop: 220 }}>
            <IconButton style={{   marginRight:'22px' }}>
              <Icon
                style={{ fontSize: 36, color: "#FFF" }}
                type="twitter"
                color="inherit"
              />
            </IconButton>
             <IconButton style={{   marginRight:'22px' }}>
              <Icon
                style={{ fontSize: 36, color: "#FFF" }}
                type="facebook"
                color="inherit"
              />
            </IconButton>
             <IconButton style={{ marginRight:'22px' }}>
              <Icon
                style={{ fontSize: 36, color: "#FFF" }}
                type="youtube"
                color="inherit"
              />
            </IconButton>
             <IconButton style={{  marginRight:'22px' }}>
              <Icon
                style={{ fontSize: 36, color: "#FFF" }}
                type="instagram"
                color="inherit"
              />
            </IconButton>
             <IconButton style={{marginRight:'22px' }}>
              <Icon
                style={{ fontSize: 36, color: "#FFF" }}
                type="linkedin"
                color="inherit"
              />
            </IconButton>
          </div>
        </div>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
