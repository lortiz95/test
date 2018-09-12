import React from 'react'
import { View, Image } from 'react-native'

import { Touchable } from '../components';

const Smiles = (props) => (
  <View style={{flexDirection: 'row', marginHorizontal: 25}}>
    <Touchable onPress={props.onPress}><Image source={props.src} style={props.style} /></Touchable>
  </View>
)

export default Smiles