import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import El8 from "../Components/PageIndex/Footer/elementFooter1";
import CopyR from "../Components/PageIndex/Footer/copyright";
import Up from "../Components/Profile/up";
 import PageIndex from '../Components/PageIndex';
  import { Image } from "semantic-ui-react";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { message  } from 'antd';
  import "antd/dist/antd.css";
  import { Affix } from "antd";
  import AppBar from "@material-ui/core/AppBar";

import { userActions } from '../_actions';
import { Form, Icon, Input, Button } from 'antd';
import classNames from 'classnames';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        const { user, users } = this.props;

        return (
         <div>
                 
           <Affix offsetTop={this.state.top}>
          <AppBar
            position="static"
            style={{display:'flex',   justifyContent:'space-between',  flexDirection: 'row',

              backgroundImage: `url(${"https://wallpaper-house.com/data/out/8/wallpaper2you_237208.jpg"})`
            }}
          >     
          <div>   
                           
               <Link to="/index">
                <Image
                   width="75"
                  src="http://veritekglobal.com/fr/wp-content/uploads/sites/4/2015/10/swap1.png"
                />
              </Link>
             
                <Link to="/index">
                  <Image
                    height="60"
                    width="250"
                    src="images/donant.png"
                  />
                </Link>
                </div>
             <div>
               <Form name="form" onSubmit={this.handleSubmit} style={{width:"100%", display:"flex" ,position:'relative', paddingBottom:'10px'}}>
                   <div className={(submitted && !username ? ' has-error' : '')} style={{position:'relative',right:'5px'}}>
                   <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}style={{marginTop:'25px'}} placeholder="username"   name="username" value={username} onChange={this.handleChange}/>

                      
                       {submitted && !username &&
                           <div >                           {  message.warning('Username is required')} 
                           </div>
                       }
                   </div>
                   <div className={ (submitted && !password ? ' has-error' : '')}>
                         <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{marginTop:'25px'}} type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />

                       {submitted && !password &&
                           <div  > {  message.warning('Password is required')} </div>
                       }
                   </div>
                   <div  style={{ marginTop:"20px" }}>
                   <Button  type="primary" htmlType="submit"  style={{marginTop:'5px', marginLeft:'5px'}} >
                   <Icon type="login" />  Login
                </Button>

                        {loggingIn &&
                           <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                       }
                       <Link to="/register" className="btn btn-link"><b>Register</b></Link>
                   </div>
               </Form>
               </div>
               </AppBar>
           </Affix>

           

                     <div> <PageIndex passedUser={user} /> <Up /> <El8 /><CopyR />
                    </div>



             </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 