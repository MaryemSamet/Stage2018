import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MainContent from "../Components/MainContent";

import { userActions } from '../_actions';
import El6 from "../Components/Profile/Contenu/MenuUser/menu";
import El1 from "../Components/PageIndex/Header/elementHeader1";
import El8 from "../Components/PageIndex/Footer/elementFooter1";
import CopyR from "../Components/PageIndex/Footer/copyright";
import Up from "../Components/Profile/up";
import PageHome from "../Components/PageHome"
import GrandTab from "../Components/Home/tabs/GrandTab";
import PageIndex from '../Components/PageIndex';
 class IndexPage extends React.Component {
  


    render() {
        const { user, users } = this.props;
        return (
 
          <div> <El1 passedUser={user} /><PageIndex passedUser={user} /> <Up /> <El8 /><CopyR />
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedIndexPage = connect(mapStateToProps)(IndexPage);
export { connectedIndexPage as IndexPage };