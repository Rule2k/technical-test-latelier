/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Player from 'src/components/Player';
import Loading from 'src/components/Loading';
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


/**
 * Export
 */
export default App;
