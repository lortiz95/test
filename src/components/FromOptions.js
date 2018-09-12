import React from 'react'
import { View, Text, } from 'react-native'

import Touchable from './Touchable'

export default (props) => (
  <Touchable onPress={props.onPress}>
    <View style={props.style} >
      <Text style={{color: '#ffffff', fontFamily: 'Lato-Bold', fontSize: 23}} >{props.text}</Text>
    </View>
  </Touchable>
)