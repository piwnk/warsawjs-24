import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes as formPropTypes, Field } from 'redux-form';
import { Grid, Button } from '@material-ui/core';

import Panel from './Panel';
import TextField from './TextField';

class SettingsForm extends PureComponent {
  static propTypes = {
    ...formPropTypes,
    onSubmit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
  };

  handleResetClick = () => {
    const { reset } = this.props;
    reset();
  };

  handleSubmitClick = () => {
    const { submit } = this.props;
    submit();
  };

  render() {
    return (
      <form>
        <Panel>
          <Grid container spacing={24}>
            <Fragment>
              <Grid item xs={6}>
                <Field
                  name="buyMargin"
                  label="Marża kupno"
                  required
                  component={TextField}
                  suffix="%"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="sellMargin"
                  label="Marża sprzedaż"
                  required
                  component={TextField}
                  suffix="%"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="refreshInterval"
                  label="Częstotliwość aktualizacji kursów"
                  required
                  component={TextField}
                  suffix="sekund"
                />
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="default"
                  onClick={this.handleResetClick}
                >
                  Zresetuj
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmitClick}
                >
                  Zapisz
                </Button>
              </Grid>
            </Fragment>
          </Grid>
        </Panel>
      </form>
    );
  }
}

export default reduxForm({
  form: 'settings',
})(SettingsForm);
