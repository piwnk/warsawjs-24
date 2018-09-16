import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { propTypes as formPropTypes, reduxForm, Field } from 'redux-form';
import { Grid, Button } from '@material-ui/core';

import { OPERATION_TYPE } from '../store/constants';
import Panel from './Panel';
import ErrorMessage from './ErrorMessage';
import TextField from './TextField';
import RadioGroup from './RadioGroup';
import SelectBox from './SelectBox';

const OPERATIONS = [
  { value: OPERATION_TYPE.BUY, label: 'Kupno' },
  { value: OPERATION_TYPE.SELL, label: 'Sprzedaż' },
  { value: OPERATION_TYPE.EXCHANGE, label: 'Wymiana' },
];

const FIELD_NAMES = {
  OPERATION: 'operation',
  BUY_CURRENCY: 'buyCurrency',
  SELL_CURRENCY: 'sellCurrency',
  AMOUNT: 'amount',
};

class ExchangeForm extends Component {
  static propTypes = {
    ...formPropTypes,
    error: PropTypes.object,
    currencyOptions: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    onCancel: PropTypes.func,
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
    const { error, currencyOptions } = this.props;
    return (
      <form>
        <Panel>
          <Grid container spacing={24}>
            {error ? (
              <Grid item xs={12}>
                <ErrorMessage text="Cannot submit form" />
              </Grid>
            ) : (
              <Fragment>
                <Grid item xs={12}>
                  <Field
                    name={FIELD_NAMES.OPERATION}
                    label="Operacja"
                    options={OPERATIONS}
                    component={RadioGroup}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={FIELD_NAMES.BUY_CURRENCY}
                    options={currencyOptions}
                    label="Kupujemy"
                    component={SelectBox}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={FIELD_NAMES.SELL_CURRENCY}
                    options={currencyOptions}
                    label="Sprzedajemy"
                    component={SelectBox}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={FIELD_NAMES.AMOUNT}
                    label="Kwota"
                    required
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12} />
              </Fragment>
            )}
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
                Wykonaj
              </Button>
            </Grid>
          </Grid>
        </Panel>
      </form>
    );
  }
}

export default reduxForm({
  form: 'exchange',
  enableReinitialize: true,
})(ExchangeForm);
