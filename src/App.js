import React, { Component } from 'react';
import { Platform, StatusBar, YellowBox } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';

// Redux Store
import store from './redux/store';

import { Feels, From, Thanks } from './containers';

const RouterWithRedux = connect()(Router);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Platform.OS === 'android' && StatusBar.setHidden(true);
    YellowBox.ignoreWarnings([ 'Setting a timer' ]);
  }

  render() {
    return (
      <Provider store={store}>
          <RouterWithRedux key="root">
            <Scene
              key="root"
              panHandlers={null}
              hideNavBar
            >
              <Scene key="FEELS" component={Feels} />

              <Scene key="FROM" component={From} />

              <Scene key="THANKS" component={Thanks} />

            </Scene>
          </RouterWithRedux>
      </Provider>
    );
  }
}
