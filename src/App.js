import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { fetchNames } from './logic/jsonStoreApi';

import Roulette from './components/Roulette';
import Admin from './components/Admin';

import { AppContent, Title } from './appStyledComponent';

class App extends Component {
  state = {
    names: {},
  };

  componentDidMount() {
    this.getNames();
  }

  async getNames() {
    const {
      data: { result },
    } = await fetchNames();

    this.setState({
      names: result ? result : {},
    });
  }

  render() {
    return (
      <AppContent>
        <Title>Roulette</Title>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Roulette {...props} names={this.state.names} />}
            />
            <Route
              exact
              path="/admin"
              render={props => (
                <Admin
                  {...props}
                  names={this.state.names}
                  updateNames={this.getNames.bind(this)}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </AppContent>
    );
  }
}

export default App;
