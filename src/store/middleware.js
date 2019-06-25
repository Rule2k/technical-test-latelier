import axios from 'axios';

const url = 'https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json';

// middleware. Ces actions n'arrivent pas directement jusqu'au reducer mais sont destinés à l'API

const middleware = store => next => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default middleware;
