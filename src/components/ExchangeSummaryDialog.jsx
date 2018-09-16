import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Button,
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

export default class ExchangeSummaryDialog extends PureComponent {
  static propTypes = {
    summary: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired,
    onCloseSummary: PropTypes.func.isRequired,
  };

  render() {
    const {
      summary: { amount, currency } = {},
      onCloseSummary,
    } = this.props;
    return (
      <Dialog open>
        <DialogTitle>Podsumowanie operacji</DialogTitle>
        <DialogContent>
          <Typography>Waluta: {currency}</Typography>
          <Typography>Kwota: {amount}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="raised"
            color="primary"
            onClick={onCloseSummary}
          >
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
