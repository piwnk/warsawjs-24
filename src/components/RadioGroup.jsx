import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';

export default class RadioButtonGroup extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    const { options, input, label } = this.props;
    return (
      <FormControl component="fieldset" required>
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup {...input}>
          {options.map(({ label, value }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio color="primary" />}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>      
    );
  }
}
