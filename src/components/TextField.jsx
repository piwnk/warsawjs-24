import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  TextField as MuiTextField,
  InputAdornment,
} from '@material-ui/core';

export default class TextField extends PureComponent {
  static propTypes = {
    prefix: PropTypes.node,
    suffix: PropTypes.node,
  };

  render() {
    const { input, prefix, suffix, label, required } = this.props;

    const inputProps = {};
    if (prefix) {
      inputProps.startAdornment = (
        <InputAdornment position="start">{prefix}</InputAdornment>
      );
    }
    if (suffix) {
      inputProps.endAdornment = (
        <InputAdornment position="start">{suffix}</InputAdornment>
      );
    }

    return (
      <MuiTextField
        {...input}
        fullWidth
        label={label}
        required={required}
        helperText={required ? "pole wymagane" : null}
        InputProps={inputProps}
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  }
}