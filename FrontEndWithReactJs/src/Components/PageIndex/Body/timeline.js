import React from "react";
import "antd/dist/antd.css";
import { Timeline } from "antd";
export default props => (
  <Timeline pending="Exchanging Done">
    <Timeline.Item>Create your account on our site "Donnant Donnant" </Timeline.Item>
    <Timeline.Item>Add all your needs and services
</Timeline.Item>
    <Timeline.Item>
      Rechercher les services et les besoins qui vous interessent
    </Timeline.Item>
    <Timeline.Item>
      {" "}
      Find the services that interest you and all the people you can help
    </Timeline.Item>
    <Timeline.Item>
      {" "}
      As soon as you are interested in an ad send your proposition
    </Timeline.Item>
    <Timeline.Item>
      {" "}
      Waiting for confirmation and setting appointments
    </Timeline.Item>
  </Timeline>
);
