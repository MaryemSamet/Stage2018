import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Popconfirm, message } from "antd";

function confirm(e) {
  console.log(e);
  message.success("Abonnement supprimé");
}

function cancel(e) {
  console.log(e);
  message.error("abonnement non supprimé");
}

export default props => (
  <Popconfirm
    title="Vous voulez supprimer cette personne de votre list d'abonnement?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Oui"
    cancelText="Non"
  >
    <a href="#">Supprimer</a>
  </Popconfirm>
);
