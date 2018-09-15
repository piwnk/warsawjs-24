import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

import Panel from '../components/Panel';
import MeetupLink from '../components/MeetupLink';

const STYLES = {
  para: {
    marginBottom: 16,
  },
};

class About extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    const paraClasses = { root: classes.para };
    return (
      <Panel>
        <Typography component="p" variant="title" classes={paraClasses}>
          Wirtualny Kantor
        </Typography>
        <Typography component="p" variant="subheading" classes={paraClasses}>
          Ten projekt został stworzony na potrzeby cyklu warsztatów WarsawJS.
        </Typography>
        <Typography component="p" variant="body1" classes={paraClasses}>
          Tak naprawdę pomysł stworzenia takiej aplikacji pojawił się
          po <MeetupLink eventId="250613275">Warszatach #20</MeetupLink>
          z podstaw React-a.
        </Typography>
        <Typography component="p" variant="body1" classes={paraClasses}>
          Podczas <MeetupLink eventId="252573624">Warsztatów #22</MeetupLink>
          zaczęliśmy pisać testy jednostkowe za pomocą narzędzia Jest.
        </Typography>
        <Typography component="p" variant="body1" classes={paraClasses}>
          W trakcie <MeetupLink eventId="252574823">Warsztatów #23</MeetupLink>
          zaczęliśmy napisaliśmy kilka testów end-to-end za pomocą
          narzędzia TestCafe.
        </Typography>
        <Typography component="p" variant="body1" classes={paraClasses}>
          Podczas <MeetupLink eventId="252575012">Warsztatów #24</MeetupLink>
          będziemy wrócimy do Jest-a i będziemy się uczyć pisania
          testów integracyjnych.
        </Typography>
      </Panel>
    );
  }
}

export default withStyles(STYLES)(About);
