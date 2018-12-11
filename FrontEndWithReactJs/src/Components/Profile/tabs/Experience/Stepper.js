import React from "react";
import "antd/dist/antd.css";
 import { Steps, Button, message } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "material-ui/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import { Icon } from "antd";
import { Input } from "antd";
import Upload from "../addExperience/upload";
import axios from 'axios';
import { Drawer } from "antd";
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
    title: "Title",
    content: "First-content"
  },
  {
    title: "Description",
    content: "Second-content"
  },
  {
    title: "Image",
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
 
    };
  }
 
  
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

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
      IdUser: 1
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
              placeholder="Describe your new experience !! "
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
         
        </Form>
      </div>

          </div>

     
     

      </div>
    );
  }
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(Stepper);
