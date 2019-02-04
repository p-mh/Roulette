import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { randomizeName } from '../logic/rouletteFunctions';

import { ChoosenName, Randomize } from './rouletteStyledComponent';

class Roulette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: this.props.names,
      choosenName: null,
    };
  }

  randomize = () => {
    this.setState({
      choosenName: randomizeName(Object.values(this.props.names)),
    });
  };

  render() {
    return (
      <div>
        <Randomize onClick={this.randomize.bind(this)}>Random !</Randomize>
        <ChoosenName>{this.state.choosenName}</ChoosenName>
        <Link to="/admin">Go to admin page</Link>
      </div>
    );
  }
}

Roulette.propTypes = {
  names: PropTypes.object,
};

export default Roulette;
