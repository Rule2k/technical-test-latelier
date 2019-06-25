
import React from 'react';
import PropsTypes from 'prop-types';

const Player = ({ player }) => (
  <div id="player">
    <p>Firstname : {player.firstname}</p>
    <p>Lastname : {player.lastname}</p>
    <p>shortname : {player.shortname}</p>
    <p>Sex : {player.sex}</p>
    <img src={player.country.picture} alt={player.country.code} />
    <img src={player.picture} alt="player" />
    <p>rank: {player.rank}</p>
    <p>points: {player.points}</p>
    <p>weight: {player.weight}</p>
    <p>height: {player.height}</p>
    <p>age: {player.age}</p>
  </div>
);

Player.propTypes = {
};

export default Player;
