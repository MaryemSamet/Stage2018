import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { ProfilePage } from '../ProfilePage';
import { FavorisPage } from '../FavorisPage';
import { AbonnementPage } from '../AbonnementPage';
import { AbonnePage } from '../AbonnePage';
import {CadeauPage} from '../CadeauPage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { ServiceContreBesoinPage } from '../ServiceContreBesoinPage';
import { ServiceContreServicePage } from '../ServiceContreServicePage';
import { PrixPage } from '../PrixPage';
import {IndexPage} from '../IndexPage';
import "antd/dist/antd.css";
import { message  } from 'antd';

import { Modal } from "antd";

class App extends React.Component {
    constructor(props) {
        super(props);
         const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    
    
     render() {
        const { alert } = this.props;
        return (
            <div  >
                <div  >
                    <div  >
                         {alert.message == 'Registration successful' && 
                           
         <div  > {message.success(alert.message)} </div> 
                        }
                         {alert.message != 'Registration successful' && alert.message && 
                           
                           <div  > {message.error(alert.message)} </div> 
                                          }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute   path="/profile" component={ProfilePage} />
                                 <PrivateRoute   path="/favoris" component={FavorisPage} />
                                <PrivateRoute   path="/abonne" component={AbonnePage} />
                                <PrivateRoute   path="/abonnement" component={AbonnementPage} />

                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/cadeau/:id/:iduser" component={CadeauPage} />
      <PrivateRoute path="/servicecontrebesoin/:id/:iduser" component={ServiceContreBesoinPage} />
      <PrivateRoute path="/servicecontreservice/:id/:iduser"   component={ServiceContreServicePage}  />
      <PrivateRoute path="/prix/:id/:iduser" component={PrixPage} /> 
      <PrivateRoute path="/index" component={IndexPage} />

      {/* <PrivateRoute exact path="/" component={PageHome} /> */}
      {/* <PrivateRoute path="/profile" component={PageProfile} />
      <PrivateRoute path="/service" component={PageService} />
      <PrivateRoute path="/besoin" component={PageBesoin} />
      <PrivateRoute path="/favoris" component={PageFavoris} />

      <PrivateRoute path="/abonne" component={PageAbonne} />
      <PrivateRoute path="/abonne" component={PageAbonne} />
      <PrivateRoute path="/abonnement" component={PageAbonnement} />
      <PrivateRoute path="/index" component={PageIndex} />
      <PrivateRoute path="/cadeau/:id/:iduser" component={PageCadeau} />
      <PrivateRoute path="/servicecontrebesoin/:id/:iduser" component={PageServiceContreBesoin} />
      <PrivateRoute path="/servicecontreservice/:id/:iduser"   component={PageServiceContreService}  />
      <PrivateRoute path="/otheruser" component={PageOtherUser} />
      <PrivateRoute path="/prix/:id/:iduser" component={PagePrix} /> */}
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 