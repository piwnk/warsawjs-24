import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { OPERATION_TYPE } from '../store/constants';
import { readExchangeRates, exchange } from '../store/actions';
import { getCurrencyOptions } from '../store/selectors';
import Panel from '../components/Panel';
import Loader from '../components/Loader';
import ExchangeForm from '../components/ExchangeForm';
import ExchangeSummaryDialog from '../components/ExchangeSummaryDialog';

class Exchange extends PureComponent {
  static propTypes = {
    readExchangeRates: PropTypes.func.isRequired,
    exchange: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
    isLoadError: null,
    showSummaryDialog: false,
    exchangeSummary: null,
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

  handleSubmit = values => {
    const { exchange } = this.props;
    this.setState({ isLoading: true });
    return exchange(values)
      .then(summary => {
        global.console.warn(summary);
        this.setState({
          isLoading: false,
          isLoadError: false, 
          showSummaryDialog: true,
          summary,
        });
      })
      .catch(() => {
        this.setState({ isLoading: false, isLoadError: true });
      });
  };

  handleCloseSummaryDialog = () => {
    this.setState({ showSummaryDialog: false, summary: null });
  };

  render() {
    const { currencyOptions } = this.props;
    const { isLoading, isLoadError, showSummaryDialog, summary } = this.state;
    return (isLoading || isLoadError) ? (
      <Loader />
    ) : (
      <Panel>
        <ExchangeForm
          initialValues={{
            operation: OPERATION_TYPE.BUY,
            buyCurrency: '',
            sellCurrency: '',
            amount: '0.0',
          }}
          currencyOptions={currencyOptions}
          onSubmit={this.handleSubmit}
        />
        {showSummaryDialog && (
          <ExchangeSummaryDialog
            summary={summary}
            onCloseSummary={this.handleCloseSummaryDialog}
          />
        )}
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencyOptions: getCurrencyOptions(state),
  }
}

const mapDispatchToProps = {
  readExchangeRates,
  exchange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
