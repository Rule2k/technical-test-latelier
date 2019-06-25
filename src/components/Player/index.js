
import React from 'react';
import PropTypes from 'prop-types';
import './player.scss';

const Player = ({ player }) => (
  <div className="player">
    <p>Firstname : {player.firstname}</p>
    <p>Lastname : {player.lastname}</p>
    <p>Shortname : {player.shortname}</p>
    <p>Sex : {player.sex}</p>
    <img src={player.country.picture} alt={player.country.code} />
    <img src={player.picture} alt="player" />
    <p>rank: {player.data.rank}</p>
    <p>points: {player.data.points}</p>
    <p>weight: {player.data.weight / 1000} kg</p>
    <p>height: {player.data.height} cm</p>
    <p>age: {player.data.age} ans</p>
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
