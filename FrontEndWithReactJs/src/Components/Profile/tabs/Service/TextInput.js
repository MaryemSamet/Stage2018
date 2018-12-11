import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
   margin: {
    margin: theme.spacing.unit,
  },
 });

 
class InputAdornments extends React.Component {
  state = {
    amount: '',
 
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
            this.props.passedFunction(this.state.amount);

  };

  

 
  render() {
    const { classes } = this.props;

    return (
         
    
        <FormControl   className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">coût</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start">DT</InputAdornment>}
          />
        </FormControl>
        
     
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
