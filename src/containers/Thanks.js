import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Logo, Title } from '../components';

class Thanks extends Component {

  componentDidMount() {
    setTimeout(() => Actions.push('FEELS'), 5000)
   }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 3, justifyContent: 'center'}}>
          <Logo />
        </View>
        <View style={{flex: 2}}>
          <Title text='Gracias por tu tiempo!' />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
  feel: state.options.feel,
  category: state.options.category,
  category_id: state.options.category_id,
});

export default connect(mapStateToProps)(Thanks);

