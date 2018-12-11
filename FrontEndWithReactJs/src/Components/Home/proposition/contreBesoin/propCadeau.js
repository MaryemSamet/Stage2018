import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
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
import Selectmul from "./selectmul";
import axios from "axios";
import { InputNumber } from "antd";

const URL = `http://localhost:51492/api/PropositionServiceCadeau`;
const URL2 = `http://localhost:51492/api/notification`;

var nowDate = new Date();

const { Option } = Select;

class Cadeau extends React.Component {
  constructor(props ) {
    super(props  );
    
     this.state = {
        redirectToNewPage: false,message:'',
      dateDebut:'',dateFin:'',        annonceID : '',
      nbFois:'1'

  
    };
  }

  handleChangeDebut =range => {
    const valueOfInput1 = range[0].format();
    const valueOfInput2 = range[1].format();
    this.setState({  dateDebut: valueOfInput1, dateFin :valueOfInput2});

console.log('eee',valueOfInput1); console.log("jjjj",valueOfInput2);
  }

  
  
  handleChangeMessage = (e) => {
    this.setState({  message: e.target.value});     
    console.log(this.props.passedValueAnnonceId.params.id);
    }
 handleChangeNbFois = (value) => {
        this.setState({  nbFois: ` ${value}`});
        console.log(this.state.nbFois);
        }
       
 
  handleSubmit = event => {
    event.preventDefault();
    
     const propositionCadeau = {
      etat: 'Waiting for response',
      annonceID: this.props.passedValueAnnonceId.params.id,
      dateProposition:  nowDate ,
      proposedToUserID: this.props.passedValueUserId.params.iduser,
      proposerUserID: this.props.passedUser.id,
      message:this.state.message,
      nbFois:this.state.nbFois,
      dateDebut: this.state.dateDebut,
      dateFin: this.state.dateFin,
      typeProposition: 'servicecadeau'
      };
const notifCadeau = {
 titre :`sends you a proposition of GIFT service against your need related to the post N° ${this.props.passedValueAnnonceId.params.id}` ,
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
        data: notifCadeau,
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
      data: propositionCadeau,
    })
      .then(response => response.data,     this.setState({ redirectToNewPage: true })
    )
      .catch(error => {
        throw error;
      });
  
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
          Proposition of a gift against a need
{" "}
        </p>
        <Form  onSubmit={this.handleSubmit} layout="vertical" hideRequiredMark>
        <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="How often you want to offer a gift service   ?">
                <InputNumber min={1} step={1}              
                    defaultValue={1}

                         onChange={this.handleChangeNbFois}
                                  />
              </Form.Item>
            </Col>

        </Row>
           <Row gutter={16}>
             <Col span={12}>
              <Form.Item label="For how long ?">
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
                  placeholder="Enter a message to explain the proposition                  "
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
