import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { headerHeight } from '../../app.json';

// Make a component
class Header extends Component {
  render() {
    const headerText = this.props.headerText;
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: headerHeight,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
};

export default Header;
