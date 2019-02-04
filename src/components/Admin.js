import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addName, deleteName } from '../logic/jsonStoreApi';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      names: [],
    };
  }
  static getDerivedStateFromProps(nextProps, state) {
    const { names } = nextProps;
    if (names !== state.names) {
      return {
        names,
      };
    }
    return {};
  }

  onChangeAddInput = ({ target: { value: inputValue } }) => {
    this.setState({
      inputValue,
    });
  };

  async addNameToDatabase(name) {
    await addName(name, Object.keys(this.state.names).length);
    this.props.updateNames();
    this.setState({
      inputValue: '',
    });
  }

  async removeNameToDatabase(key) {
    await deleteName(key);
    this.props.updateNames();
  }

  render() {
    const { names, inputValue } = this.state;
    const namesMapped = Object.entries(names).map(nameArray => {
      const [key, { name }] = nameArray;
      return (
        <div key={key}>
          <span>{name} </span>
          <button onClick={this.removeNameToDatabase.bind(this, key)}>
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      );
    });

    return (
      <div>
        <h2>Admin page</h2>
        <div>
          {namesMapped}
          <input
            type="text"
            onChange={this.onChangeAddInput}
            value={inputValue}
          />
          <button onClick={this.addNameToDatabase.bind(this, inputValue)}>
            <i className="fas fa-plus" />
          </button>
        </div>
        <Link to="/">Go back to home page</Link>
      </div>
    );
  }
}

Admin.propTypes = {
  names: PropTypes.object,
  updateNames: PropTypes.func,
};

export default Admin;
