import React from 'react'
import { View, Text } from 'react-native'

const Title = (props) => (
  <View>
    <Text style={{fontFamily: 'Lato-BlackItalic', fontSize: 50, color: '#000000'}}>{props.text}</Text>
  </View>
)

export default Title