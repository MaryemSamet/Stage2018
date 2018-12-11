import React from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Steps, Button } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "material-ui/Typography";
import TextField from "@material-ui/core/TextField";
import { Icon } from "antd";
import { Input } from "antd";
import { DatePicker } from "antd";
import moment from "moment";
import { DateRange } from 'react-date-range';
import { InputNumber } from "antd";
import Upload from "../upload";
import axios from "axios";
import { Modal } from 'antd';
import TextInput from "./TextInput"
import {  Form} from 'antd';


const { TextArea } = Input;
const { RangePicker } = DatePicker;
const URL = `http://localhost:51492/api/AnnonceService`;
var nowDate = new Date();

const dateFormat = "YYYY/MM/DD";

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
    title: "Cost",
    content: "Last-content"
  },
  {
    title: "Disponibility",
    content: "image-content"
  },
  {
    title: "image",
    content: "image-content"
  }
];
function onChange(value) {
  console.log("changed", value);
}

class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      titre: '',
      cout:'0',
      description: '',
       disponibiliteServiceDebut:'',
      disponibiliteServiceFin:'',

      descriptionBesoin:'',
      remarqueSurDisponibilite:'',
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


  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  handleChangeTitre = event => {
    this.setState({ titre: event.target.value});
  }

  handleChangeRemarque = event => {
    this.setState({ remarqueSurDisponibilite: event.target.value});
  }

  handleChangeDescription = event => {
    this.setState({  description: event.target.value});
  }
  handleChangeCout = x => {
    this.setState({  cout: x});
  }
  handleChangeDescriptionBesoin = event => {
    this.setState({  descriptionBesoin: event.target.value});
  }
  handleChangeDisponibilite = range => {
    const valueOfInput1 = moment(range.startDate).format();
    const valueOfInput2 = moment(range.endDate).format();

    this.setState({  disponibiliteServiceDebut: valueOfInput1,
      disponibiliteServiceFin: valueOfInput2});
  }
  
  
  handleSubmit = event => {
    event.preventDefault();
   
    const service = {
      titre: this.state.titre,
      description: this.state.description,
      datePublication:  nowDate ,
      userID: this.props.passedUser.id,
      cout: this.state.cout,
      dateDebutDisponibiliteService: this.state.disponibiliteServiceDebut,
      dateFinDisponibiliteService: this.state.disponibiliteServiceFin,

      descriptionBesoin: this.state.descriptionBesoin,
      remarqueSurDisponibilite: this.state.remarqueSurDisponibilite

    };
    this.setState({
      visible: false
    });
     return axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: service,
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

              helperText="Specify an appropriate title for your new service"
            />
          </div>
        );
      case 1:
        return (
          <div>
            <TextArea placeholder="Describe your service !! " rows={4}
                          name="description"
                          onChange={this.handleChangeDescription}
             />
          </div>
        );
      case 2:
        return (
          <div>
            <Typography>If the service requires money, how much does it cost?  </Typography>
           <TextInput passedFunction ={this.handleChangeCout} />

          </div>
        );
      case 3:
        return (
          <div>
            <Typography> Your availability to offer the service</Typography>


             <DateRange
                    onInit={this.handleChangeDisponibilite}
                    onChange={this.handleChangeDisponibilite}
                />
 
              {" "}
              <TextArea
              placeholder="Note on the period of service availability              "
              autosize
              name="remarque"
              onChange={this.handleChangeRemarque}
            />

            <TextArea
              placeholder="What do you want to have in return              "
              autosize
              name="descBesoin"
              onChange={this.handleChangeDescriptionBesoin}
            />
          </div>
        );

      case 4:
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
               <Button type="primary" onClick={this.showModal}>Add a service</Button>
        <Modal
          title="Add your service "
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
        <div style={{ width:'522px',height:'65px'}}>
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
