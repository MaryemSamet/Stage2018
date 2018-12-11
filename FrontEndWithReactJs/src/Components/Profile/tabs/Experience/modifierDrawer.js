import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import React from "react";
import "antd/dist/antd.css";
import { Drawer, Button } from "antd";
import Stepper from "./Stepper";
import { Icon } from "antd";
import { Modal } from 'antd';
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
 class MenuAppBar extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <a style={{ color: "#A6A6A6" }} onClick={this.showModal}>
          {" "}
          <IconText type="edit" text="Update" />{" "}
        </a>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
         
         <Stepper/>
         <Button
              style={{
                marginRight: 8
              }}
              onClick={this.handleCancel}
            >
              Cancel
            </Button>
            <Button onClick={this.handleCancel} type="primary">
              Mettre à jour
            </Button>

          </Modal>

      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(MenuAppBar);
