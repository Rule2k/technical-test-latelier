
import React from 'react';
import PropsTypes from 'prop-types';

const Player = () => (
  <div id="player">
    <p>Firstname : Stan</p>
    <p>Lastname : Wawrinka</p>
    <p>shortname : S.WAW</p>
    <p>Sex : M</p>
    <img src='https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png' alt='SUI' />
    <img src='https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg' alt='SUI' />
    <p>rank: 21</p>
    <p>points: 1784</p>
    <p>weight: 81000</p>
    <p>height: 183</p>
    <p>age: 33</p>
  </div>
);

Player.propTypes = {
  clic: PropsTypes.number.isRequired,
  message: PropsTypes.string.isRequired,
  doSomething: PropsTypes.func.isRequired,
};

export default Player;
