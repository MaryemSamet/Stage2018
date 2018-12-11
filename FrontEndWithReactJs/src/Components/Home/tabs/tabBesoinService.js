import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import ListService from "./Services/ListServices";
import ListBesoin from "./Besoins/ListBesoin";
import ListExperience from "./Experiences/ListExperience";
import axios from "axios"
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: 'theme.palette.background.paper',
    width: "100%", 
 

   }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
    besoins: []

  };

 
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" style ={{      
           webkitBoxShadow: '0px 7px 20px 0px rgba(140,130,140,0.86)',
        mozBoxShadow: '0px 7px 20px 0px rgba(140,130,140,0.86)',
        boxShadow: 'inset 0px 7px 20px 0px rgba(140,130,140,0.86)',
        }}    >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            fullWidth
            centered
          >
            <Tab label=" Users Services" />
            <Tab label=" Users Needs " />
            <Tab label=" Users Experiences" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <ListService passedUser={this.props.passedUser}/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ListBesoin passedUser={this.props.passedUser}/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ListExperience passedUser={this.props.passedUser}/>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
