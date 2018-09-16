import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  FormHelperText,
} from '@material-ui/core';

export default class SelectBox extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    const {
      id,
      disabled,
      label,
      options,
      required,
      input: { name, ...inputRest }
    } = this.props;
    const inputId = id || name;
    return (
      <FormControl
        fullWidth
        required
        disabled={disabled}
      >
        <InputLabel shrink htmlFor={inputId}>{label}</InputLabel>
        <Select
          {...inputRest}
          inputProps={{
            id: inputId,
          }}
        >
          {options.map(({ label, value }) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))}
        </Select>
        {required && (
          <FormHelperText>pole wymagane</FormHelperText>
        )}
      </FormControl>      
    );
  }
}