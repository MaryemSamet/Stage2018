import React, { Component, Fragment } from "react";
import El1 from "./PageIndex/Header/elementHeader1";
import El6 from "./Profile/Contenu/MenuUser/menu";
import El8 from "./PageIndex/Footer/elementFooter1";
import CopyR from "./PageIndex/Footer/copyright";
import Up from "./Profile/up";
import { Divider } from "antd";
import ListBesoin from "./Profile/MesAnnonces/Besoin/ListBesoins";

export default class extends Component {
  render() {
    return [<El6 passedUser={this.props.passedUser}/>, <ListBesoin />];
  }
}
