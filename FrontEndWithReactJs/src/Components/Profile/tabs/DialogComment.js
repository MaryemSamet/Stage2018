import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Comments from "./comments";
import { Icon } from "antd";
import axios from "axios"
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ResponsiveDialog extends React.Component {
  state = {
    open: false,
    longeur:'0'
  };
  componentDidMount() {
    axios.get(`http://localhost:51492/api/CommentSurExperience/GetAllCommentOfExperience/${this.props.passedVal}`)
      .then(res => {
         const longeur =res.data.length;
        this.setState({   longeur });
 
      })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;
     return (
      <div>
        <a onClick={this.handleClickOpen} style={{ color: "#A6A6A6" }}>
          {" "}
          <IconText type="message" text={this.state.longeur} />{" "}
        </a>
 
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
          
          </DialogTitle>
          <DialogContent>
            <Comments passedVal={this.props.passedVal} getDataFromChild ={this.getDataFromChild}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              retour
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ResponsiveDialog);
