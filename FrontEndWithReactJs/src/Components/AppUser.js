import React, { Component, Fragment } from "react";
import El1 from "./PageIndex/Header/elementHeader1";
 import El8 from "./PageIndex/Footer/elementFooter1";
import CopyR from "./PageIndex/Footer/copyright";
 import Up from "./Profile/up";
 import MainContent from "./MainContent";
 export default class extends Component {
  render() {
    return [<El1 />, <MainContent />, <Up />, <El8 />, <CopyR />];
  }
}
