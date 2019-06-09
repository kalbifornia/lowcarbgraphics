import React, { Component } from 'react';
import { View, Image } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

class ImageView extends Component {
  constructor() {
    super();
    this.state = {
      moveDirection: 'none'
    };
  }

  onDragLeft = () => {
    console.log('onDragLeft!');
  }

  responderRelease = (myX) => {
    console.log('responderRelease!!', myX);
    if (myX <= -1) {
      this.props.onRight();
    } else if (myX >= 1) {
      this.props.onLeft();
    } else {
      console.log('Not moving this release!');
    }
  }


    render() {
      const { viewStyle } = styles;
      const { viewWidth, viewHeight, imageSource, onLayout } = this.props;
      console.log('Rendering ImageView, imageSource=', imageSource);
      return (
        <View style={viewStyle} onLayout={onLayout}>
          <ImageZoom
            cropWidth={viewWidth}
            cropHeight={viewHeight}
            imageWidth={viewWidth}
            imageHeight={viewHeight}
            onDragLeft={this.onDragLeft}
            responderRelease={this.responderRelease}
          >
            <Image
              style={{
                height: viewHeight,
                width: viewWidth,
                flex: 1 }}
                resizeMode='contain'
              source={imageSource}
            />
            <Image
              style={{
                height: viewHeight,
                width: viewWidth,
                flex: 1
              }}
              resizeMode='contain'
              source={{uri: 'https://1.bp.blogspot.com/-kRhj8n16izY/XImS-Vlm1UI/AAAAAAAAAgM/t-KsK53Rfe0RPnZXL3u8FJ7Ah2YbYGPAACLcBGAs/s1600/IMG_2723.jpg'}} />
            </ImageZoom>
        </View>
      );
    }


}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'blue'
  }
};

export default ImageView;
