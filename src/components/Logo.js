import React from 'react'
import { View, Image } from 'react-native'
import Log from '../assets/icons/bitmap3.png'



export default props => (
  <View style={props.style} >
    <Image source={Log} style={{ width: 308, height: 57}} />
  </View>
)
