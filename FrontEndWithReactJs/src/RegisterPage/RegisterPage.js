import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import El8 from "../Components/PageIndex/Footer/elementFooter1";
import CopyR from "../Components/PageIndex/Footer/copyright";
import Up from "../Components/Profile/up";
 import PageIndex from '../Components/PageIndex';
  import { Image } from "semantic-ui-react";
 
import { userActions } from '../_actions';
 import "antd/dist/antd.css";
   import { Form, Input, Tooltip, Icon,DatePicker, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
 
 
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                ville:'',
                email:'',
                  tel:'',
                  bio:'',
                  profession:'',
                  birthDate:''
 
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

     handleSubmit(event) {
         event.preventDefault();

         this.setState({ submitted: true });
         const { user } = this.state;
         const { dispatch } = this.props;
         this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
 
                dispatch(userActions.register(values));
            
   
            }
          });
 
     }
 

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
     
    
      handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      }
    
      compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      }
    
      validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    
      handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
      }
    
    

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
    
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
        const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '216',
        })(
          <Select style={{ width: 70 }}>
            <Option value="216">216</Option>
           </Select>
        );
    
     
        return (<div>
<div style={{    display:'flex',   justifyContent:'space-between',      backgroundImage: `url(${"https://wallpaper-house.com/data/out/8/wallpaper2you_237208.jpg"})`
 }}  >
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
                 </Link></div>


             </div>
 <div  style={{width:'100%',backgroundImage: `url("images/aktualnosci-foto-pomagamy.jpg")`,backgroundSize:'cover'}} >

<div style={{width:'50%', left:'50%',paddingTop:'5%' ,marginBottom:'-10%',paddingBottom:'5%',position:'relative' , }}  >

 <p 
          style={{
            marginLeft:'-15%',
            marginTop:'-10%',
            textAlign: "center",
            fontSize: 40,
            fontFamily: "lucida grande"
          }}
        >
          {" "}
Registration{" "}
        </p>
<Form onSubmit={this.handleSubmit}   >
<Row gutter={16}>

            <Col span={12}>

       <FormItem
              {...formItemLayout}
             >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input setFieldsValue={user.email} placeholder="E-mail" onChange={this.handleChange} />
              )}
            </FormItem>
            </Col>
            <Col span={12}>

            <FormItem
              {...formItemLayout}
               
            >
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
              })(
                <Input setFieldsValue={user.username} placeholder="UserName" onChange={this.handleChange}/>
              )}
            </FormItem>
            </Col>

          
            </Row>

        <Row gutter={16}>
       
            <Col span={12}>

            <FormItem
              {...formItemLayout}
             >
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your firstname!', whitespace: true }],
              })(
                <Input setFieldsValue={user.firstName} placeholder="First Name"onChange={this.handleChange}/>
              )}
            </FormItem>
            </Col>
            <Col span={12}>

<FormItem
  {...formItemLayout}
 >
  {getFieldDecorator('lastName', {
    rules: [{ required: true, message: 'Please input your lastName!', whitespace: true }],
  })(
    <Input setFieldsValue={user.lastName}placeholder="Last Name" onChange={this.handleChange}/>
  )}
</FormItem>
</Col>

            </Row>
            <Row gutter={16}>
            <Col span={12}>
     <FormItem
              {...formItemLayout}
             >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type="password" placeholder="Password" setFieldsValue={user.password} onChange={this.handleChange}/>
              )}
            </FormItem>
            </Col>

            <Col span={12}>

<FormItem
  {...formItemLayout}
 >
  {getFieldDecorator('confirm', {
    rules: [{
      required: true, message: 'Please confirm your password!',
    }, {
      validator: this.compareToFirstPassword,
    }],
  })(
    <Input type="password" placeholder="Confirm Password" onBlur={this.handleConfirmBlur} />
  )}
</FormItem>
</Col>            
          </Row>
            <Row gutter={16}>
            <Col span={12}>

            <FormItem
              {...formItemLayout}
             >
              {getFieldDecorator('ville', {
                 rules: [{  required: true, message: 'Please select your habitual residence!' ,whitespace: true}],
              })(
                <Input setFieldsValue={user.ville} placeholder="Habitual City" onChange={this.handleChange}/>
              )}
            </FormItem>
            </Col>
            <Col span={12}>

            <FormItem
              {...formItemLayout}
               
            >
              {getFieldDecorator('bio', {
                rules: [{ required: true, message: 'Please input your bio!', whitespace: true }],
              })(
                <Input setFieldsValue={user.bio} placeholder="Biography" onChange={this.handleChange}/>
              )}
            </FormItem>
            </Col>
            </Row>
            <Row gutter={16}>
            <Col span={12}>

            <FormItem
              {...formItemLayout}
              
            >
              {getFieldDecorator('profession', {
                rules: [{ required: true, message: 'Please input your profession!', whitespace: true }],
              })(
                <Input setFieldsValue={user.profession} placeholder="Profession" onChange={this.handleChange}/>
              )}
            </FormItem>
            </Col>
            <Col span={12}>

            <FormItem
          {...formItemLayout}
         >
          {getFieldDecorator('birthDate',{
                rules: [{ type: 'object', required: true, message: 'Please select date!' }],
              })(
            <DatePicker placeholder="Birth Date" setFieldsValue={user.birthDate} />
          )}
        </FormItem>
        </Col>
        </Row>

         <Row gutter={16}>
            <Col span={12}>

            <FormItem
              {...formItemLayout}
             >
              {getFieldDecorator('tel', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input placeholder="Phone Number" addonBefore={prefixSelector} style={{ width: '100%' }} setFieldsValue={user.tel} onChange={this.handleChange} />
              )}
            </FormItem>
            </Col>
            </Row>
              
            <FormItem        
>
              <Button type="primary" htmlType="submit" style={{width:'70%' , left:'7.5%'}} >Register</Button>
                                   {registering && 
                           <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                       }
                                                          <Link to="/login" style={{width:'70%',position:'relative', left:'7.5%'}} className="btn btn-link">Cancel</Link>


            </FormItem>
           

          </Form>

    
 </div>
    </div>
    <div>  <Up /> <El8 /><CopyR />
                    </div>

         </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}
const WrappedRegistrationForm  = Form.create()(RegisterPage);

 
const connectedRegisterPage = connect(mapStateToProps)(WrappedRegistrationForm);
export { connectedRegisterPage as RegisterPage }; 