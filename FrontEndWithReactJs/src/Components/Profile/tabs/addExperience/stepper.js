import React from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Steps, Button, message } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
 import TextField from "@material-ui/core/TextField";
import { Icon } from "antd";
import { Input } from "antd";
import Upload from "./upload";
import axios from 'axios';
 import {  Form} from 'antd';
import { Modal } from 'antd';
var dateFormat = require('dateformat');
var nowDate = new Date();
const URL = `http://localhost:51492/api/experience`;

const { TextArea } = Input;

const ButtonGroup = Button.Group;

const Step = Steps.Step;

const steps = [
  {
    title: "First",
    content: "First-content"
  },
  {
    title: "Second",
    content: "Second-content"
  },
  {
    title: "Last",
    content: "Last-content"
  }
];

class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      titre: '',
      contenu: '',
      userId:props.passedUser.id
 
    };
  }
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

   

  handleChangeTitre = event => {
    this.setState({ titre: event.target.value});
  }

  handleChangeContenu = event => {
    this.setState({  contenu: event.target.value});
  }
  handleSubmit = event => {
    event.preventDefault();
   
    const exp = {
      titre: this.state.titre,
      contenu: this.state.contenu,
      datePub:  nowDate ,
      IdUser: this.state.userId
    };
    this.setState({
      visible: false
    });
     return axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: exp,
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  
  }

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  getStepContent(step) {
    
    switch (step) {
      case 0:
        return (

          <div>

            <TextField
              label="Title"
              style={{
                width: 200,
               }}
              name="titre"
              onChange={this.handleChangeTitre}
              helperText="Specify an appropriate title for your new experience              "
            />
          </div>
        );
      case 1:
        return (
          <div>
            <TextArea
              placeholder="Describe your new experience  !! "
              rows={4}
              name="contenu" onChange={this.handleChangeContenu}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Upload />
          </div>
        );

      default:
        return "Unknown step";
    }
  }

  render() {
    const { current } = this.state;
    return (
      <div>
     

           <Button type="primary" onClick={this.showModal}>Add an experience</Button>
        <Modal
          title="Add your new experience "
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
         >
          

    
      <div  >
      <Form onSubmit={this.handleSubmit}>

        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">
          {// Populate the content pane based on the active step
          this.getStepContent(current)}
        </div>
        <div style={{height:'65px'}}>
          <ButtonGroup>
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                <Icon type="left" />Go back
              </Button>
            )}

            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Go forward<Icon type="right" />
              </Button>
            )}
          </ButtonGroup>
        </div>
        <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e8e8e8",
              padding: "10px 16px",
              textAlign: "right",
              left: 0,
              background: "#fff",
              borderRadius: "0 0 4px 4px"
            }}
          >
            <Button
              style={{
                marginRight: 8
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">Submit</Button>
          </div>
        </Form>
      </div>
      </Modal>

      </div>
    );
  }
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(Stepper);
