import axios from 'axios';
import { LOADING_APP, dataReceived } from './reducer';

const url = 'https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json';

// middleware. Ces actions n'arrivent pas directement jusqu'au reducer mais sont destinés à l'API

const middleware = store => next => (action) => {
  switch (action.type) {
    case LOADING_APP:
      axios.get(url)
        .then((result) => {
          store.dispatch(dataReceived(result.data));
        })
        .catch((error) => {
          console.log(error);
        });
    break;
    default:
      next(action);
  }
};

export default middleware;
