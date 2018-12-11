import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./style.css";
import El5 from "./cover";
import El6 from "./cover2";
import El7 from "./cover3";
import El8 from "./cover4";
export default props => (
  <Carousel autoplay fade>
    <div>
      <El5 />
    </div>
    <div>
      <El6 />
    </div>
    
    <div>
      <El8 />
    </div>
  </Carousel>
);
