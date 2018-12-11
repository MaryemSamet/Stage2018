import React from "react";
import "antd/dist/antd.css";
import { Card, Icon } from "antd";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { Modal, List, Avatar, Divider, Col, Row } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
 
var dateformat = require('dateformat');
const { Meta } = Card;
const pStyle = {
  fontSize: 16,
  color: "rgba(0,0,0,0.85)",
  lineHeight: "24px",
  display: "block",
  marginBottom: 16
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: "22px",
      marginBottom: 7,
      color: "rgba(0,0,0,0.65)"
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: "inline-block",
        color: "rgba(0,0,0,0.85)"
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

class userInfo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user:props.passedUser,
     }
  }
  
  state = { visible2: false , longueurAbonne: '0',longueurAbonnement: '0'};

  componentDidMount() {
    axios.get(`http://localhost:51492/api/follower/allName/${this.props.passedUser.id}`)
      .then(res => {
        const longueurAbonne = res.data.length;
        this.setState({ longueurAbonne });
      })
      axios.get(`http://localhost:51492/api/following/allName/${this.props.passedUser.id}`)
      .then(res => {
        const longueurAbonnement = res.data.length;
        this.setState({ longueurAbonnement });
      })
 
      
  }
  showModal2= () => {
    this.setState({
      visible2: true,
    });
  }
  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }



  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div style={{            
        width:"300px", height:"50px",
        marginTop:'30px',position:'relative'
     }}>
 
        <Card
          style={{
            width: "100%",
            position: "inherit",
             boxShadow: `1.5px 3px 1.5px #9E9E9E`,
            backgroundImage: `url(${"http://jllsly.com/wallpapers/xwhite-wallpapers-free-Is-Cool-Wallpapers.jpg.pagespeed.ic.5kHSDZy92i.png"})`
          }}
          cover={
            <img
              alt="example"
              src="https://www.locali.fr/wp-content/uploads/2015/08/Profil-Image-Locali.jpg"
            />
          }
          actions={[
            <Icon type="edit" />,
            <Icon onClick={this.showModal2} type="ellipsis" />
          ]}
        >
          <Meta
            title={this.state.user.firstName +" "+this.state.user.lastName}
            description={this.state.user.bio}
          />
          <br />
          <Typography variant="p">
           {this.state.longueurAbonne} Followers{" "}
            <Link to="/abonne">
              {" "}
              <IconButton>
                <Icon type="user" />{" "}
              </IconButton>{" "}
            </Link>
          </Typography>
          <Typography variant="p">
            {this.state.longueurAbonnement} Followings
            <Link to="/abonnement">
              {" "}
              <IconButton>
                <Icon type="user" />{" "}
              </IconButton>{" "}
            </Link>
          </Typography>
        </Card>

    <Modal
          title="User informations  "
          visible={this.state.visible2}
           footer={null}
           onCancel={this.handleCancel2}

          >

          <p style={{ ...pStyle, marginBottom: 24 }}>
User Informations          </p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Last  && first name" content={this.state.user.firstName +" "+this.state.user.lastName}/>{" "}
            </Col>
         
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content={this.state.user.ville}/>
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="Tunisie" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="Birth Day"
                content={ dateformat(this.state.user.birthDate, "mmmm dd, yyyy")  }
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Bio"
                content={this.state.user.bio}
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Profession && skills</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Profession" content={this.state.user.profession}/>
            </Col>
          </Row>

            <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="..."
              />
            </Col>
          </Row>  
          <Divider />
          <p style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content={this.state.user.email}/>
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Numero de telephone"
                content={this.state.user.tel}
              />
            </Col>
          </Row>
          {/* <Row>
            <Col span={24}>
              <DescriptionItem title="Facebook" content={this.state.user.lienFacebook} />
            </Col>
          </Row> */}
        </Modal> 
      </div>
    );
  }
}

userInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(userInfo);
