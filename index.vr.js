import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('wtc_path_station.jpg')}/>
        <Text
          style={{
            backgroundColor: '#ff6f69',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -9]}],
          }}>
          Hi, Floored!
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
