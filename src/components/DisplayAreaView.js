import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import ImageView from './ImageView';
import { headerHeight } from '../../app.json';

class DisplayAreaView extends Component {
  constructor(props) {
    super();
    this.state = {
      selected: 1,
      images: props.images
    };
  }

  onLayout() {
  }

  onLeft() {
    if (this.state.selected > 1) {
      console.log('onLeft selected > 1');
      this.setState({ selected: this.state.selected - 1 });
    }
  }

  onRight() {
    if (this.state.selected < (this.state.images.numberOfImages)) {
      console.log('onRight selected < this.state.images.numberOfImages');
      this.setState({ selected: this.state.selected + 1 });
    }
  }

  render() {
    const { images, selected } = this.state;
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    return (
      <ImageView
        onLayout={this.onLayout.bind(this)}
        onLeft={this.onLeft.bind(this)}
        onRight={this.onRight.bind(this)}
        viewWidth={windowWidth}
        viewHeight={windowHeight - headerHeight}
        imageSource={images['image' + selected]}
      />
    );
  }
}

export default DisplayAreaView;
