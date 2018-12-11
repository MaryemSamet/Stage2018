import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Progress } from "antd";

export default props => (
  <div>
    <Progress
      style={{ position: "relative", bottom: 502, left: 320 }}
      type="circle"
      percent={70}
    />
  </div>
);
