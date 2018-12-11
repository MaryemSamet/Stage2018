import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import Selectmul from "./selectmul";
import SelectmulService from "./selectmulService";
import { Radio } from "antd";
import { Redirect } from 'react-router-dom'
import moment from "moment";
import {withRouter} from 'react-router';
import {
 
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker
} from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
const URL = `http://localhost:51492/api/PropositionServiceContreService`;
const URL2 = `http://localhost:51492/api/notification`;

var nowDate = new Date();

const RadioGroup = Radio.Group;

const { Option } = Select;


class PageServiceContreService extends React.Component {
   

  constructor(props ) {
    super(props  );
    
     this.state = {
      value: 1,    redirectToNewPage: false, services:[], experiences:[], listSerives:'',listVilles:'',listExperiences:'',message:'',
      dateDebut:'',dateFin:'',optionChoice:'l\'un des plusieurs',        annonceID : ''

  
    };
  }
 
  onChange = e => {
    this.setState({
      value: e.target.value
    });
    if(this.state.value===1)
     { this.setState({
      optionChoice: ' l\'un des plusieurs'
    });}
     else {  this.setState({
      optionChoice: 'plusieurs contre un'
    });
  }
}

  handleChangeDebut =range => {
    const valueOfInput1 = range[0].format();
    const valueOfInput2 = range[1].format();
    this.setState({  dateDebut: valueOfInput1, dateFin :valueOfInput2});

console.log('eee',valueOfInput1); console.log("jjjj",valueOfInput2);
  }

  handleChangeSelectedServices = (x) => {
    this.setState({  listSerives: x});
    console.log('valeur : ',x);

  }
  handleChangeSelectedVille = (x) => {
    this.setState({  listVilles: x});
    console.log('ville : ',x);

  }
  handleChangeSelectedExperience = (value) => {
    this.setState({  listExperiences: ` ${value}`});
    console.log('exps : ',` ${value}`);

  }

  handleChangeMessage = (e) => {
    this.setState({  message: e.target.value});
 
     
     
    console.log(this.props.passedValueAnnonceId.params.id);
    

  }
  handleChangeChoice = (e) => {
    this.setState({  optionChoice: e.target.value});
    console.log(` ${this.state.optionChoice}`);

  }
  handleSubmit = event => {
    event.preventDefault();
    
     const propositionServiceContreService = {
      etat: 'Waiting for response',
      annonceID: this.props.passedValueAnnonceId.params.id,
      dateProposition:  nowDate ,
      proposedToUserID: this.props.passedValueUserId.params.iduser,
      proposerUserID: this.props.passedUser.id,
      listExperiences: this.state.listExperiences,
      listServices:this.state.listSerives ,
      listVilles: this.state.listVilles,
      optionChoice:this.state.optionChoice,
      dateDebut: this.state.dateDebut,
      dateFin: this.state.dateFin,
      message:this.state.message,
      typeProposition:'servicecontreservice'

      };
      const notifServiceContreService = {
        titre :`sends you a proposition of a service against your service related to your post N °
        ${this.props.passedValueAnnonceId.params.id}`,
        typeNotif:' Proposition ',
        dateNotification: nowDate,
        vu:false,
        annonceID:this.props.passedValueAnnonceId.params.id,
        receiverUser: this.props.passedValueUserId.params.iduser,
        senderUser:this.props.passedUser.id,
       
       }
       
             axios(URL2, {
               method: 'POST',
               headers: {
                 'content-type': 'application/json',
               },
               data: notifServiceContreService,
             })
               .then(response => response.data
             )
               .catch(error => {
                 throw error;
               });
         

       axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: propositionServiceContreService,
    })
      .then(response => response.data,     this.setState({ redirectToNewPage: true })
    )
      .catch(error => {
        throw error;
      });
  
  }


  componentDidMount() {
    axios.get(`http://localhost:51492/api/AnnonceService/all/${this.props.passedUser.id}`)
      .then(res => {
        const services = res.data;
        this.setState({ services });
      })
      axios.get(`http://localhost:51492/api/experience/all/${this.props.passedUser.id}`)
      .then(res => {
        const experiences = res.data;
        this.setState({ experiences });
      })
      
  }

 
  render() {
    if (this.state.redirectToNewPage) {
      return (
      <Redirect to="/profile"/>
      )
    }
 
 
    return (
 
      <div fullWidth style={{width:'70%',left:"15%",marginTop:"80px",position:'relative' }} >
       
      <div style={{width:'100%'}}  >
        <p
          style={{
            textAlign: "center",
            fontSize: 40,
            fontFamily: "lucida grande"
          }}
        >
          {" "}
          Proposal of a service against a service
        </p>

        <Form onSubmit={this.handleSubmit} layout="vertical" hideRequiredMark >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="You're available in which cities ?">
                <Selectmul passedFunction={this.handleChangeSelectedVille} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="What can you offer against this service ?">
                <SelectmulService passedValueList={this.state.services} passedFunction={this.handleChangeSelectedServices} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="All against one service ? ">
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}> one of all </Radio>
                  <Radio value={2}>many againt one</Radio>
                </RadioGroup>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Include one of your experiences ">
                <Select placeholder="Which experience you want to include with this proposition" onChange={this.handleChangeSelectedExperience} >
                   { this.state.experiences.map(element  => <Option value={element.titre} >  {element.titre}</Option>)}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="How long do you want to have this service?">
                <DatePicker.RangePicker
                  style={{ width: "100%" }}
                  getPopupContainer={trigger => trigger.parentNode}
                  onChange={this.handleChangeDebut}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Private Message ">
                <Input.TextArea
                  rows={4}
                  placeholder="Enter a private message to explain your proposal and your skills                  "
                  onChange={this.handleChangeMessage}
                />
              </Form.Item>
            </Col>
          
          </Row>
        <div
          style={{
            position: "absolute",
            width: "100%",
            borderTop: "1px solid #e8e8e8",
            textAlign: "right",
            left: 0,
            background: "#fff",
            borderRadius: "0 0 4px 4px"
          }}
        >
                    <Link to='/'>

            <Button
              style={{
                marginRight: 8
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
          </Link>
          
            {" "}
            <Button  htmlType="submit" type="primary">
              Submit
            </Button>
          
        </div>
        </Form>
  </div>
      </div>
     );
  }
}

PageServiceContreService.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(PageServiceContreService);
