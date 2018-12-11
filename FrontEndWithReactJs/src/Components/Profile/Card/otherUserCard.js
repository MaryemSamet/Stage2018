import React from "react";
import "antd/dist/antd.css";
import { Card, Icon } from "antd";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { Modal, List, Avatar, Divider, Col, Row } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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
  state = { visible2: false };

   
  onClose = () => {
    this.setState({
      visible: false
    });
  };

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

  render() {
    return (
      <div>
        <Card
          style={{
            width: 300,
            position: "inherit",

            marginLeft: 25,
            backgroundImage: `url(${"http://jllsly.com/wallpapers/xwhite-wallpapers-free-Is-Cool-Wallpapers.jpg.pagespeed.ic.5kHSDZy92i.png"})`
          }}
          cover={
            <img
              alt="example"
              src="https://www.locali.fr/wp-content/uploads/2015/08/Profil-Image-Locali.jpg"
            />
          }
          actions={[<Icon onClick={this.showModal2} type="ellipsis" />]}
        >
          <Meta
            title=" Ben Foulen Hiba "
            description="je suis doué par les photo-Editing .. je suis tres competente par photoshop , et je joue à la guitare , je dessine des animes .. je peux vous aider surement ."
          />
          <br />
          <Typography variant="p">
            41 Abonnés <Icon type="user" />{" "}
          </Typography>
          <Typography variant="p">
            80 Abonnements <Icon type="user" />{" "}
          </Typography>
        </Card>

         <Modal
          title="User informations  "
          visible={this.state.visible2}
           footer={null}
           onCancel={this.handleCancel2}

          >

          <p style={{ ...pStyle, marginBottom: 24 }}>
            Informations personnelles
          </p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Nom & Prénom" content="Samet Maryem" />{" "}
            </Col>
            
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Ville" content="Ariana" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Pays" content="Tunisie" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="Date de naissance"
                content="Octobre 20,1996"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Bio"
                content="je suis doué par les photo-Editing .. je suis tres competente par photoshop , et je joue à la guitare , je dessine des animes .. je peux vous aider surement ."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Proffession & compétences</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Proffession" content="Eleve ingenieur" />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Competences"
                content=" ....  "
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="sametmaryem5@mail.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Numero de telephone"
                content="+216 55 67 63 23"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem title="Facebook" content=" Maryem Samet" />
            </Col>
          </Row>
        </Modal> 
      </div>
    );
  }
}

userInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(userInfo);
