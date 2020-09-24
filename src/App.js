import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import Main from './screens/Main';
import store from './store';

import {Provider} from 'react-redux';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Main />
    </SafeAreaView>
  </Provider>
);

export default App;
