import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  withStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import * as urls from '../urls';

const STYLES = theme => ({
  toolbar: theme.mixins.toolbar,
});

class Sidebar extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    classes: PropTypes.shape({}).isRequired,
  };

  render() {
    const { className } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: className,
        }}
      >
        <List>
          <ListItem>
            <ListItemText
              primary={<NavLink to={urls.EXCHANGE_RATES}>Kursy wymiany</NavLink>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<NavLink to={urls.EXCHANGE}>Kupno / Sprzedaż</NavLink>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<NavLink to={urls.REPORTING}>Statystyki</NavLink>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<NavLink to={urls.SETUP}>Ustawienia</NavLink>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<NavLink to={urls.ABOUT}>O projekcie</NavLink>}
            />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(STYLES)(Sidebar);
