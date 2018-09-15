import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Paper,
} from '@material-ui/core';

import Sidebar from './Sidebar';

const STYLES = {
  self: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: '0 0 auto',
  },
  main: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'row',
  },
  sidebar: {
    position: 'relative',
    width: 240,
    flex: '0 0 auto',
  },
  content: {
    flex: '1 1 auto',
  },
  footer: {
    flex: '0 0 auto',
  },
};

class Layout extends PureComponent {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.self}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <Typography variant="title" color="inherit">Wirtualny kantor</Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.main}>
          <Sidebar className={classes.sidebar} />
          <Paper elevation={0} classes={{ root: classes.content }}>
            {children}
          </Paper>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(STYLES)(Layout));