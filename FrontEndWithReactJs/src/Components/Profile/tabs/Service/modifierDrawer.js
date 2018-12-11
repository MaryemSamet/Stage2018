import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import React from "react";
import "antd/dist/antd.css";
import { Drawer, Button } from "antd";
import Stepper from "../Service/stepper";
import { Icon } from "antd";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class MenuAppBar extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <a style={{ color: "#A6A6A6" }} onClick={this.showDrawer}>
          {" "}
          <IconText type="edit" text="Update" />{" "}
        </a>

        {/* <Drawer
          title="Modifier ce service"
          width={720}
          placement="right"
          onClose={this.onClose}
          maskClosable={false}
          visible={this.state.visible}
          style={{
            height: "calc(100% - 55px)",
            overflow: "auto",
            paddingBottom: 53
          }}
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
        </Drawer> */}
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(MenuAppBar);
