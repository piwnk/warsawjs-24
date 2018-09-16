import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { connect } from 'react-redux';

import { readStatistics } from '../store/actions';
import { getStatistics } from '../store/selectors';
import Panel from '../components/Panel';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

class Reporting extends PureComponent {
  static propTypes = {
    statistics: PropTypes.shape({}),
    readStatistics: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
    isLoadFailed: false,
  };

  componentDidMount() {
    const { readStatistics } = this.props;
    this.setState({ isLoading: true });
    readStatistics()
      .then(() => {
        this.setState({ isLoading: false, isLoadFailed: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, isLoadFailed: true });
      });
  }

  render() {
    const { statistics } = this.props;
    const { isLoading, isLoadFailed } = this.state;
    if (isLoading) {
      return (
        <Loader />
      );
    } else if (isLoadFailed) {
      return (
        <ErrorMessage text="Wystąpił błąd podczas wczytywania statystyk" />
      );
    }
    return statistics ? (
      <Panel>
        <Typography variant="title">Statystyki</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa</TableCell>
              <TableCell>Wartość</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {('totalOperations' in statistics) && (
              <TableRow>
                <TableCell>Ilość operacji</TableCell>
                <TableCell>{statistics.totalOperations}</TableCell>
              </TableRow>
            )}
            {('totalSell' in statistics) && (
              <TableRow>
                <TableCell>Sprzedano na kwotę</TableCell>
                <TableCell>{statistics.totalSell}</TableCell>
              </TableRow>
            )}
            {('totalBuy' in statistics) && (
              <TableRow>
                <TableCell>Zakupiono na kwotę</TableCell>
                <TableCell>{statistics.totalBuy}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Panel>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    statistics: getStatistics(state),
  };
}

const mapDispatchToProps = {
  readStatistics,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reporting);
