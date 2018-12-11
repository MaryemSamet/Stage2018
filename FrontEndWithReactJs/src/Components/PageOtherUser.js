import React, { Component, Fragment } from "react";
 import El6 from "./Profile/Contenu/MenuUser/menu";
 import El9 from "./Profile/Card/otherUserCard";
 import { Divider } from "antd";
 import Tabs from "./Profile/tabs/tabs";
import BottonFollow from "./Home/tabs/Services/BottonFollow";
export default class extends Component {
  render() {
    return [
      <El6 />,
      <BottonFollow />,
      <El9 />,
      <Divider dashed="true" />,
      <Tabs />
    ];
  }
}
