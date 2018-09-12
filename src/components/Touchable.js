import React from 'react';
import { TouchableOpacity } from 'react-native';

export default props => (
  <TouchableOpacity style={{ ...props.style }} onPress={props.onPress} hitSlop={props.hitSlop} key={props.key}>
    {props.children}
  </TouchableOpacity>
);