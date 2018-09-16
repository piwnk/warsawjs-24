import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const STYLES = {
  self: {
    textDecoration: 'none',
    marginLeft: '0',
    marginRight: '0.3em',
    fontWeight: 'bold',
    display: 'inline',
  },
};

class MeetupLink extends PureComponent {
  static propTypes = {
    eventId: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { eventId, classes, ...rest } = this.props;
    return (
      <Typography
        {...rest}
        component="a"
        classes={{ root: classes.self }}
        href={`https://www.meetup.com/WarsawJS/events/${eventId}/`}
        target="_blank"
      />
    );
  }
}

export default withStyles(STYLES)(MeetupLink);
