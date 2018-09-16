import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper, Icon, Typography } from '@material-ui/core';

const styles = {
  self: {}
};

class Loader extends PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    message: PropTypes.string,
  };

  render() {
    const { classes, message } = this.props;
    return (
      <Paper className={classes.self}>
        <Icon />
        <Typography>{message}</Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Loader);
