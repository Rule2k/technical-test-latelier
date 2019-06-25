
import React from 'react';
import PropTypes from 'prop-types';
import './player.scss';

const Player = ({ player }) => (
  <div className="player">
    <div className="pictures">
      <img className="picture" src={player.picture} alt="player" />
      <img className="country" src={player.country.picture} alt={player.country.code} />
    </div>
    <p className="firstname"><span>Firstname :</span> {player.firstname}</p>
    <p className="lastname"><span>Lastname :</span> {player.lastname}</p>
    <p className="shortname"><span>Shortname :</span> {player.shortname}</p>
    <p className="sex"><span>Sex :</span> {player.sex}</p>
    <p className="rank"><span>Rank: </span> {player.data.rank}</p>
    <p className="points"><span>Points: </span> {player.data.points}</p>
    <p className="weight"><span>Weight: </span> {player.data.weight / 1000} kg</p>
    <p className="height"><span>Height: </span> {player.data.height} cm</p>
    <p className="age"><span>Age: </span> {player.data.age} ans</p>
  </div>
);

Player.propTypes = {
  player: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    shortname: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    country: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.string.isRequired,
    data: PropTypes.shape({
      rank: PropTypes.number.isRequired,
      points: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      age: PropTypes.number.isRequired,
      last: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    }).isRequired,
  }).isRequired,

};

export default Player;
