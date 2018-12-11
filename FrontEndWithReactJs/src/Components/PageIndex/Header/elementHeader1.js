import React from "react";
import PropTypes, { func } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
 import "antd/dist/antd.css";
import { Icon } from "antd";
import Tooltip from "@material-ui/core/Tooltip";
import { Image } from "semantic-ui-react";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import "antd/dist/antd.css";
import { Menu, Dropdown } from 'antd';

import { Affix } from "antd";
import { Modal, Button } from "antd";
import Msg from "./messages";
import Notif from "./notification";
import { Link } from "react-router-dom";
import axios from "axios";
  const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1,
    color: "#C10838"
  },
  menuButton: {
    marginLeft: -2,
    marginRight: 20,
    marginTop: -26
  },

  margin: {
    margin: theme.spacing.unit * 2
  },

  padding: {
    padding: `0 ${theme.spacing.unit * 1}px`
  }
});

class MenuAppBar extends React.Component {
   
  state = {
    auth: true,
    anchorEl: null,
    modal1Visible: false,
    modal2Visible: false,
    
    longueurNotif : 0,
    longueurDisc :0
  };
  componentDidMount() {
 
      axios.get(`http://localhost:51492/api/notification/all/${this.props.passedUser.id}`)
      .then(res => {
        const longueurNotif = res.data.length;
        this.setState({        longueurNotif });
      })
      axios.get(`http://localhost:51492/api/Discussion/all/${this.props.passedUser.id}`)
      .then(res => {
        const longueurDisc = res.data.length;
        this.setState({        longueurDisc });
      })

  }
 

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  handleOk2(modal2Visible) {
    this.setState({ modal2Visible });
  }

  handleCancel2(modal2Visible) {
    this.setState({ modal2Visible });
  }
  handleOk1(modal1Visible) {
    this.setState({ modal1Visible });
  }

  handleCancel1(modal1Visible) {
    this.setState({ modal1Visible });
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <Modal
          title="mailbox"
          okText="Fermer"
          cancelText="Show All"
          visible={this.state.modal1Visible}
          onOk={() => this.handleOk1(false)}
          onCancel={() => this.handleCancel1(false)}
        >
          <Msg passedUser={this.props.passedUser}/>
        </Modal>
        {/* <Modal
          title="Mes notifications"
          okText="Fermer"
          cancelText="Afficher tous"
          visible={this.state.modal2Visible}
          onOk={() => this.handleOk2(false)}
          onCancel={() => this.handleCancel2(false)}
        >
                
          <Notif  passedUser={this.props.passedUser}/>
        </Modal> */}
        <Affix offsetTop={this.state.top}>
          <AppBar
            position="static"
            style={{
              backgroundImage: `url(${"https://wallpaper-house.com/data/out/8/wallpaper2you_237208.jpg"})`
            }}
          >
            <Toolbar>
              <Link to="/index">
                <Image
                  className={classes.image}
                  width="75"
                  src="http://veritekglobal.com/fr/wp-content/uploads/sites/4/2015/10/swap1.png"
                />
              </Link>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                <Link to="/index">
                  <Image
                    height="60"
                    width="250"
                    src="https://lh6.googleusercontent.com/9FKnRZJMMvBJGIIdDtMplDr_iYX7Ul7p6pe9UR68PopqHsvKnHO3LqYp06rnE6DDvyY2dYvuTLCIfSfoCt49=w1920-h910"
                  />
                </Link>
              </Typography>

<div>
<Tooltip title="Mailbox"  >

  <IconButton
    onClick={() => this.setModal1Visible(true)}
    aria-label="4 pending messages"
    style={{marginLeft:'13px'}}
   >
    <Badge badgeContent={this.state.longueurDisc} color="secondary">
      <MailIcon
        style={{
          fontSize: 32,
          color: "#817C7C",
          position: "relative",
          marginTop: 5
        }}
      />
    </Badge>
  </IconButton>
  </Tooltip>
  <Tooltip title="Notifications"  >
<IconButton     style={{textDecoration:'none'}}
 >
<Notif  passedUser={this.props.passedUser} passedLongNotif={this.state.longueurNotif} />  
</IconButton>
</Tooltip >

<Tooltip title="My Profile"  >
<Link to="/profile" style={{textDecoration:'none'}}>    <IconButton
     aria-haspopup="true"
     color="inherit"
     style={{marginLeft:'13px'}}

   > 
    <AccountCircle style={{ fontSize: 35, color: "#817C7C" }} />
  </IconButton> 
  </Link>
  </Tooltip>

   {this.props.passedUser.firstName}
  
  <Tooltip title="Log Out"  >
  <Link to="/login" style={{textDecoration:'none'}}> 
<IconButton
    style={{marginLeft:'13px'}}
    >
      <Icon
        style={{ fontSize: 30, color: "#817C7C" }}
        type="logout"
      />
    </IconButton>
    </Link>
  </Tooltip>
</div>

             </Toolbar>
          </AppBar>
        </Affix>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
