 import El1 from "./PageIndex/Header/elementHeader1";
import El6 from "./Profile/Contenu/MenuUser/menu";
 import PropPrix from "./Home/proposition/contreService/propPrix";
import React from "react";
 import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class PageProfile extends React.Component {

  
  render() {
    return (<div><El6 /> <PropPrix passedValueAnnonceId={this.props.passedValueAnnonceId} passedUser={this.props.passedUser} passedValueUserId={this.props.passedValueUserId} /></div>);
  }
}
PageProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageProfile);
