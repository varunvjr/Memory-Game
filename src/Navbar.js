import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'

const Navbar=({onNewGame})=>(
    <header>
    <h2><a>Memory Game</a><a onClick={onNewGame} 
    className="game">New Game</a></h2>
    </header>
);
Navbar.propTypes={
    onNewGame:PropTypes.func.isRequired
};
export default Navbar;