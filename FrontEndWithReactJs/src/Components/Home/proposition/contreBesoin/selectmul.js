import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const Option = Select.Option;
const children = [];
children.push(<Option key={'Tunis'}>Tunis</Option>);
children.push(<Option key={'Ariana'}>Ariana</Option>);

children.push(<Option key={'BenArous'}>Ben Arous</Option>);

children.push(<Option key={'Nabeul'}>Nabeul</Option>);
children.push(<Option key={'Sfax'}>Sfax</Option>);

function handleChange(value) {
  console.log(`selected ${value}`);
}

class ListMul extends React.Component {
  handleChangeSelectedListVille = value => {
 
    this.props.passedFunction(` ${value}`);
    }
    render() {
      return(
  

  <Select
    mode="multiple"
    style={{ width: "100%" }}
    placeh older="Selectionner les villes dans lesquelles vous pouvez etre disponible "
    onChange={this.handleChangeSelectedListVille} 
  >
    {children}
  </Select>)
 }
}

ListMul.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(ListMul);
