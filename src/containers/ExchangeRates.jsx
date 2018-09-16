import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

import { readExchangeRates } from '../store/actions';
import { getExchangeRates } from '../store/selectors';
import Loader from '../components/Loader';
import Panel from '../components/Panel';
import ErrorMessage from '../components/ErrorMessage';

class ExchangeRates extends PureComponent {
  static propTypes = {
    readExchangeRates: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
    isLoadError: null,
  };

  componentDidMount() {
    const { readExchangeRates } = this.props;
    this.setState({ isLoading: true });
    readExchangeRates()
      .then(() => {
        this.setState({ isLoading: false, isLoadError: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, isLoadError: true });
      });
  }

  render() {
    const { rates } = this.props;
    const { isLoading, isLoadError } = this.state;
    if (isLoading) {
      return (
        <Loader />
      );
    } else if (isLoadError) {
      return (
        <ErrorMessage text="Nie udało się zaciągnąć kursów wymiany" />
      );
    }
    return rates ? (
      <Panel>
        <Typography>Kursy wymiany</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Waluta</TableCell>
              <TableCell>Kod</TableCell>
              <TableCell>Kupno</TableCell>
              <TableCell>Sprzedaż</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rates.map(({ name, code, buy, sell }) => (
              <TableRow key={code}>
                <TableCell>{name}</TableCell>
                <TableCell>{code}</TableCell>
                <TableCell>{buy}</TableCell>
                <TableCell>{sell}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Panel>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    rates: getExchangeRates(state),
  };
}

const mapDispatchToProps = {
  readExchangeRates,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRates);
