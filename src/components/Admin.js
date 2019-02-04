import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addName, deleteName } from '../logic/jsonStoreApi';

import {
  Names,
  Name,
  NameSpan,
  DeleteBtn,
  NewName,
  AddNameBtn,
} from './adminStyledComponent';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isLoading: false,
    };
  }
  componentDidUpdate({ names }) {
    if (names !== this.props.names) {
      this.setState({
        isLoading: false,
      });
    }
  }
  onChangeAddInput = ({ target: { value: inputValue } }) => {
    this.setState({
      inputValue,
    });
  };

  async addNameToDatabase(name) {
    await addName(name, Object.keys(this.props.names).length);
    this.props.updateNames();
    this.setState({
      inputValue: '',
      isLoading: true,
    });
  }

  async removeNameFromDatabase(key) {
    await deleteName(key);
    this.props.updateNames();
    this.setState({
      isLoading: true,
    });
  }

  render() {
    const { inputValue } = this.state;
    const namesMapped = Object.entries(this.props.names).map(nameArray => {
      const [key, { name }] = nameArray;
      return (
        <Name key={key}>
          <NameSpan>{name}</NameSpan>
          <DeleteBtn onClick={this.removeNameFromDatabase.bind(this, key)}>
            <i className="fas fa-times" />
          </DeleteBtn>
        </Name>
      );
    });

    return (
      <div>
        <h2>Admin page</h2>
        <div>
          {Object.entries(this.props.names).length ? (
            <Names>
              {this.state.isLoading ? (
                <i className="fas fa-spinner fa-spin" />
              ) : (
                namesMapped
              )}
            </Names>
          ) : null}
          <NewName
            type="text"
            onChange={this.onChangeAddInput}
            value={inputValue}
          />
          <AddNameBtn onClick={this.addNameToDatabase.bind(this, inputValue)}>
            <i className="fas fa-plus" />
          </AddNameBtn>
        </div>
        <Link to="/">Go back to home page</Link>
      </div>
    );
  }
}

Admin.propTypes = {
  names: PropTypes.object.isRequired,
  updateNames: PropTypes.func.isRequired,
};

export default Admin;
