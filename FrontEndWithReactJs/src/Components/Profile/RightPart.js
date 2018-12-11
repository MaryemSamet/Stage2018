import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
 import Tabs from "./tabs/tabs";
 import Tableau from './Contenu/tableau/tableau'
 import CardUser from "./Card/userCard"
class RightPart extends React.Component {
 
  render() {
     return (
       <div style={{display: "flex", width:'100%',  marginTop:'80px',position:'relative',
       padding: '20px' , justifyContent:'space-around'}}>
             
             <div> <CardUser passedUser={this.props.passedUser}/> </div>

       <div style={{width:'60%'}}>
             
             <Tableau  passedUser={this.props.passedUser}/>
              <Tabs passedUser={this.props.passedUser}/>
               </div>
         </div>
     );
  }
}

RightPart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles()(RightPart);