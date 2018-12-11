import React from "react";
import "antd/dist/antd.css";
import { Badge, Icon } from "antd";

export default props => (
  <div>
    <Badge count={5}>
      <Icon type="eye" style={{ fontSize: 30 }} />
    </Badge>
  </div>
);
