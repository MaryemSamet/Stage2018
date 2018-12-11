import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import Selectmul from "./selectmul";
import SelectmulBesoin from "./selectmulBesoin";
import { Radio } from "antd";
import { Redirect } from 'react-router-dom'

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
const URL2 = `http://localhost:51492/api/notification`;

const URL = `http://localhost:51492/api/PropositionServiceContreBesoin`;
var nowDate = new Date();
const RadioGroup = Radio.Group;

const { Option } = Select;

class Cadeau extends React.Component {
  constructor(props ) {
    super(props  );
    
     this.state = {
      value: 1 ,   redirectToNewPage: false, services:[], experiences:[], listSerives:'',listVilles:'',listExperiences:'',message:'',
       besoins:[], listBesoins:'',acceptValue:'Yes ,during the whole period       '

  
    };
  }
  handleChangeDebut =range => {
    const valueOfInput1 = range[0].format();
    const valueOfInput2 = range[1].format();
    this.setState({  dateDebut: valueOfInput1, dateFin :valueOfInput2});

console.log('eee',valueOfInput1); console.log("jjjj",valueOfInput2);
  }
  onChangeAcceptPeriod = (e) => {
    this.setState({
      value: e.target.value
    });
    if(this.state.value===1)
     { this.setState({
      acceptValue: 'Yes ,during the whole period      '    });}
     else {  this.setState({
      acceptValue: 'no, just for a negotiable period      '
    });
  } 
  }

  handleChangeSelectedServices = (value) => {
    this.setState({  listSerives: ` ${value}`});
    console.log('service : ',` ${value}`);

  }
  handleChangeSelectedBesoins = (value) => {
    this.setState({  listBesoins: ` ${value}`});
    console.log('besoin : ',` ${value}`);

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
 
  handleSubmit = event => {
    event.preventDefault();
    
     const propositionServiceContreBesoin = {
      etat: 'Waiting for response',
      annonceID: this.props.passedValueAnnonceId.params.id,
      dateProposition:  nowDate ,
      proposedToUserID: this.props.passedValueUserId.params.iduser,
      proposerUserID: this.props.passedUser.id,
      listExperiences: this.state.listExperiences,
      listServices:this.state.listSerives ,
      listVilles: this.state.listVilles,
      message:this.state.message,   
      typeProposition:'servicecontrebesoin' ,
      listBesoins:this.state.listBesoins,
 

      };


      const notifServiceContreBesoin = {
        titre :`sends you a proposion of a service against your need related to your post N °        ${this.props.passedValueAnnonceId.params.id}`,
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
               data: notifServiceContreBesoin,
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
      data: propositionServiceContreBesoin,
    })
      .then(response => response.data,    this.setState({ redirectToNewPage: true })
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
      axios.get(`http://localhost:51492/api/AnnonceBesoin/all/${this.props.passedUser.id}`)
      .then(res => {
        const besoins = res.data;
        this.setState({ besoins });
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
          Proposal of a service against a need
        </p>

        <Form  onSubmit={this.handleSubmit}  layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="You are available in which cities? ">
                <Selectmul passedFunction={this.handleChangeSelectedVille} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="What can you offer ? ">
                <Select placeholder="Choose service you can offer against this need" onChange={this.handleChangeSelectedServices} >
                    { this.state.services.map(element  => <Option value={element.titre} >  {element.titre}</Option>)}

                 </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="What services do you need against your proposition ?">
                <SelectmulBesoin passedValueList={this.state.besoins} passedFunction={this.handleChangeSelectedBesoins}  />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Include one of your experiences ">
                <Select placeholder="Which experience you want to include in this proposition" onChange={this.handleChangeSelectedExperience}>
                { this.state.experiences.map(element  => <Option value={element.titre} >  {element.titre}</Option>)}

                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item label="You agree to provide him with this service for the duration he has requested? ">
                <RadioGroup onChange={this.onChangeAcceptPeriod} value={this.state.value}>
                  <Radio value={1}> Yes , during the whole period </Radio>
                  <Radio value={2}>No, just for a negotiable period</Radio>
                </RadioGroup>
              </Form.Item>

            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Private Message ">
                <Input.TextArea
                  rows={4}
                  placeholder="Enter a private message to explain your proposition and your skills                  "
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
          <Link to="/">
            {" "}
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
            <Button htmlType="submit"  type="primary">
              Submit
            </Button>
            
         </div>
         </Form>

      </div>
      </div>
    );
  }
}

Cadeau.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(Cadeau);
