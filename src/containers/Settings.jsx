import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import { readSettings, updateSettings } from '../store/actions';
import { getSettings } from '../store/selectors';
import Panel from '../components/Panel';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import SettingsForm from '../components/SettingsForm';

class Settings extends PureComponent {
  static propTypes = {
    settings: PropTypes.shape({}),
    readSettings: PropTypes.func.isRequired,
    updateSettings: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
    isLoadError: false,
  };

  componentDidMount() {
    const { readSettings } = this.props;
    this.setState({ isLoading: true });
    readSettings()
      .then(() => {
        this.setState({ isLoading: false, isLoadError: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, isLoadError: true });
      });
  }

  handleSubmit = values => {
    const { updateSettings } = this.props;
    this.setState({ isLoading: true });
    return updateSettings(values)
      .then(() => {
        this.setState({ isLoading: false, isLoadError: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, isLoadError: true });
      });
  };

  render() {
    const { settings } = this.props;
    const { isLoading, isLoadError } = this.state;
    if (isLoading) {
      return (
        <Loader />
      );
    } else if (isLoadError) {
      return (
        <ErrorMessage text="Nie udało się zaciągnąć ustawień kantora" />
      );
    }
    return settings ? (
      <Panel>
        <Typography variant="headline">Ustawienia</Typography>
        <SettingsForm
          initialValues={settings}
          onSubmit={this.handleSubmit}
        />
      </Panel>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    settings: getSettings(state),
  };
}

const mapDispatchToProps = {
  readSettings,
  updateSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
