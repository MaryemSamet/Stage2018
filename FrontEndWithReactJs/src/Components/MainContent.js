import React from "react";
import { Switch, Route } from "react-router-dom";
import PageHome from "./PageHome";
import PageProfile from "./PageProfile";
import PageService from "./PageService";
import PageBesoin from "./PageBesoin";
import PageAbonne from "./PageAbonne";
import PageAbonnement from "./PageAbonnement";
import PageFavoris from "./PageFavoris";
import PageIndex from "./PageIndex";
import PageCadeau from "./PageCadeau";
import PageServiceContreBesoin from "./PageServiceContreBesoin";
import PageServiceContreService from "./PageServiceContreService";
import PagePrix from "./PagePrix";
import PageOtherUser from "./PageOtherUser";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

 
class Main extends React.Component {
  render() {
 
    return (
  <main>
    <Switch>
      <Route exact path="/" component={PageHome} />
      <Route path="/profile" component={PageProfile} />
      <Route path="/service" component={PageService} />
      <Route path="/besoin" component={PageBesoin} />
      <Route path="/favoris" component={PageFavoris} />

      <Route path="/abonne" component={PageAbonne} />
      <Route path="/abonne" component={PageAbonne} />
      <Route path="/abonnement" component={PageAbonnement} />
      <Route path="/index" component={PageIndex} />
      <Route path="/cadeau/:id/:iduser" component={PageCadeau} />
      <Route path="/servicecontrebesoin/:id/:iduser" component={PageServiceContreBesoin} />
      <Route path="/servicecontreservice/:id/:iduser"   component={PageServiceContreService}  />
      <Route path="/otheruser" component={PageOtherUser} />
      <Route path="/prix/:id/:iduser" component={PagePrix} />
    </Switch>
  </main>
 );
}
}

Main.propTypes = {
classes: PropTypes.object.isRequired
};

export default withStyles()(Main);
 