import { connect } from 'react-redux';
import App from 'src/components/App';
import { loadingApp } from 'src/store/reducer';


/* Envoi au composant App la liste des joueurs.
 */

const mapStateToProps = (state, ownProps) => ({
  players: state.data.players,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadingApp: () => {
    dispatch(loadingApp());
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
