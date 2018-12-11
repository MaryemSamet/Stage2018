import React from "react";
import "antd/dist/antd.css";
import "./style.css";
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
import { DatePicker } from "antd";
import moment from "moment";
import Upload from "../upload";
import axios from "axios";
 import { DateRange } from 'react-date-range';
import {  Form} from 'antd';
import { Modal } from 'antd';

const URL = `http://localhost:51492/api/AnnonceBesoin`;
var nowDate = new Date();

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

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
    title: "Disponibility",
    content: "Last-content"
  },
  {
    title: "image",
    content: "image-content"
  }
];

class Stepper extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      current: 0,
      titre: '',
      cout:'0',
      description: '',
       disponibiliteDemandeDebut:'',
      disponibiliteDemandeFin:'',
remarque:'',
      descriptionCompetence:'',
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


  handleSelect(date){
    console.log(date); // Momentjs object
}


  
  handleChangeTitre = event => {
    this.setState({ titre: event.target.value});
  }
 

  handleChangeDescription = event => {
    this.setState({  description: event.target.value});
  }
  handleChangeRemarque = event => {
    this.setState({  remarque: event.target.value});
  }

  handleChangeCout = x => {
    this.setState({  cout: x});
  }
  handleChangeDescriptionCompetence = event => {
    this.setState({  descriptionCompetence: event.target.value});
  }
  handleChangeDisponibilite = range => {
    const valueOfInput1 = moment(range.startDate).format();
    const valueOfInput2 = moment(range.endDate).format();

    this.setState({  disponibiliteDemandeDebut: valueOfInput1,
      disponibiliteDemandeFin: valueOfInput2});
  }
  
  
  handleSubmit = event => {
    event.preventDefault();
   
    const besoin = {
      titre: this.state.titre,
      description: this.state.description,
      datePublication:  nowDate ,
      userID: this.props.passedUser.id,
      cout: this.state.cout,
      dateDebutDisponibiliteDemande: this.state.disponibiliteDemandeDebut,
      dateFinDisponibiliteDemande: this.state.disponibiliteDemandeFin,
      remarqueSurDispo: this.state.remarque ,
      descriptionCompetence: this.state.descriptionCompetence,
 
    };
    this.setState({
      visible: false
    });
    return axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: besoin,
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
              onChange={this.handleChangeTitre}

              helperText="Specify an appropriate title for your needs  "
            />
          </div>
        );
      case 1:
        return (
          <div>
            <TextArea placeholder="Describe your need  !! " rows={4}           
                onChange={this.handleChangeDescription}
/>
          </div>
        );
      case 2:
        return (
          <div>
            <Typography>
              {" "}
              You need a service for a duration of {" "}
            </Typography>
            <DateRange
                    onInit={this.handleChangeDisponibilite}
                    onChange={this.handleChangeDisponibilite}
                />
           
              <TextArea
              placeholder="Add a note about the period in which you need this service              "
              autosize
              onChange={this.handleChangeRemarque}

            />
             <TextArea
              placeholder="What can you offer in return ?              "
              autosize
              onChange={this.handleChangeDescriptionCompetence}

            />
          </div>
        );
      case 3:
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
                 <Button type="primary" onClick={this.showModal}>Add a need</Button>
        <Modal
          title="Add your need "
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width="50%"
          >
          

    

      
      
         <Form onSubmit={this.handleSubmit}>

        <div>
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
        </Modal>

    </div>

     
    );
  }
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(Stepper);
