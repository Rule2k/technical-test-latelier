/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Player from 'src/components/Player';
import Loading from 'src/components/Loading';
import PropTypes from 'prop-types';
import './app.scss';

/**
 * Code
 */


class App extends React.Component {
  componentDidMount() {
    const { loadingApp } = this.props;
    loadingApp();
  }

  render() {
    const { players, loading } = this.props;
    return (
      loading ? <Loading />
        : (
          <div id="app">
            {players.map(player => (
              <Player player={player} key={player.shortname} />
            ))}
          </div>
        )
    );
  }
}

App.propTypes = {
  loadingApp: PropTypes.func.isRequired,
  players: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

App.defaultProps = {
  players: [],
};
/**
 * Export
 */
export default App;
