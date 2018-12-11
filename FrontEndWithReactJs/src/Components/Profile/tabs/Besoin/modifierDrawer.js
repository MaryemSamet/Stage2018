import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import React from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import Stepper from "./stepper";
import { Icon } from "antd";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class MenuAppBar extends React.Component {
  state = { visible: false };
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  showModal = () => {
    this.setState({
      visible: true,
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
          title="Add your new experience "
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
         >
          <Stepper />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e8e8e8",
              padding: "10px 16px",
              textAlign: "right",
              left: 0,
              background: "#fff",
              borderRadius: "0 0 4px 4px"
            }}
          >
            <Button
              style={{
                marginRight: 8
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Mettre à jour
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(MenuAppBar);
