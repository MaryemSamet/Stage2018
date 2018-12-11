import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
 
  
  
import { DateRange } from 'react-date-range';

class DateClass extends Component {
    handleSelect(range){
        console.log(range);
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
    }
 
    render(){
        return (
            <div>
                <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                />
            </div>
        )
    }
}
 

DateClass.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles()(DateClass);
  