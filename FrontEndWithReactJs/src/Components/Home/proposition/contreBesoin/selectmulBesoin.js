import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const Option = Select.Option;

 

function handleChange(value) {
  this.setState({  listServices:` ${value}`});

  console.log(` ${value}`);
}

class ListMul extends React.Component {
   handleChangeSelectedListBesoins= value => {
 
    this.props.passedFunction(` ${value}`);
    }
  
  render() {
    return(
  <Select
    mode="multiple"
    style={{ width: "100%" }}
    placeholder="Selectionner les besoins que vous avez besoin "
    onChange={this.handleChangeSelectedListBesoins}
  >
    { this.props.passedValueList.map(element  => <Option key={element.titre}>  {element.titre}</Option>)}
  </Select>)
  }
}

ListMul.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(ListMul);
