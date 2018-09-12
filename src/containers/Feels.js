import React, { Component } from 'react';
import { View, StyleSheet, NetInfo } from 'react-native';
import { connect } from 'react-redux';

import { Logo, Title, Smiles } from '../components';
import { saveFeel } from '../redux/actions/option'

const smile = [
  {id: '1', src: require('../assets/icons/smiles/unhappy_x3.png'), data: 'unhappy'},
  {id: '2', src: require('../assets/icons/smiles/neutral_x3.png'), data: 'neutral'},
  {id: '3', src: require('../assets/icons/smiles/happy_x3.png'), data: 'happy'},
  {id: '4', src: require('../assets/icons/smiles/very_happy_x3.png'), data: 'very_happy'},
];

class Feels extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.ignoredYellowBox = ['Setting a timer'];

    const handler = data => this.props.dispatch({type: 'CHANGE_CONNECTION_STATUS', payload: data })

    NetInfo.isConnected.fetch().then(isConnected => {
      console.log(isConnected)
      NetInfo.isConnected.addEventListener('connectionChange', handler)
    })
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleConnectionChange);
  }

  handleFeel = feel => this.props.dispatch(saveFeel(feel));

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Logo />
        </View>
        <View style={styles.mid}>
          <Title text='¿Cómo te fue hoy?'/>
        </View>
        <View style={styles.bot}>
          {smile.map(obj => <Smiles src={obj.src} key={obj.id} style={{width: 150, height: 150}} onPress={() => this.handleFeel(obj.data)} /> )}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  top: {
    flex: 9,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  mid: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bot: {
    flex: 20,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

const mapStateToProps = state => ({
  ...state,
  isConnected: state.network.isConnected,
});

export default connect(mapStateToProps)(Feels);
