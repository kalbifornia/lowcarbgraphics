import React, { Component } from 'react';
import { View, Text, Linking, Alert } from 'react-native';
import Header from './components/Header';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Asset, AppLoading } from 'expo';
import { displayName as appDisplayName, mainBackgroundColor } from '../app.json';
import images from './images';


class App1 extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      currentIndex: 0
    };
  }

  onChange = (index) => {
    this.setState({currentIndex: index})
  }

  onClick = () => {
    const {
      imageWebsite,
      imageWebsiteQuestion,
      imageWebsiteTitle
    } = images[this.state.currentIndex].props;

    if (imageWebsite != undefined) {
      Alert.alert(
        imageWebsiteTitle,
        imageWebsiteQuestion,
        [
          {text: 'Yes', onPress: () => Linking.openURL(imageWebsite)},
          {text: 'No'},
        ],
        {cancelable: false}
      );
    }
  }

  loadingRender = () => {
    console.log('loadingRender');
    return (
      <View style={{
        position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 14,
          backgroundColor: 'orange'
        }}
        ><Text>LOADING...</Text></View>
    );
  }

  renderIndicator = (curIndex, totalImages) => {
    return (

      <View style={
        {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 50,
          zIndex: -1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent'}}
        >
          <Text style={
            {
              fontWeight: 'bold'
            }
          }>{appDisplayName + ': Image ' + curIndex + ' of ' + totalImages}</Text>
        </View>
    );
  }

  async _cacheResourcesAsync() {
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image.props.source).downloadAsync();
    });
    return Promise.all(cacheImages)

  }

  onFinishedLoading = () => {
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={this.onFinishedLoading}
          onError={console.warn}
        />
      );
    }

    const {
      author,
      authorTwitter
    } = images[this.state.currentIndex].props;

    let authorSection = <Text> </Text>;
    if (author != null) {
      authorSection = <Text style={
        {
            fontWeight: 'bold'
        }
      }>{'Graphic Creator: ' + author}</Text>;
    }
    let authorTwitterSection = <Text> </Text>;
    if (authorTwitter != null) {
      authorTwitterSection = <Text style={
          {
              fontWeight: 'bold'
          }
      }>{authorTwitter}</Text>;
    }
    return (
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
          <ImageViewer
            imageUrls={images}
            enablePreload={true}
            backgroundColor={'transparent'}
            saveToLocalByLongPress={false}
            renderIndicator={this.renderIndicator}
            onClick={this.onClick}
            onChange={this.onChange}
            index={this.state.currentIndex}
            />
            <View style={{
              position: 'absolute',
              bottom: 50,
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              zIndex: -1
            }}>
              {authorSection}
              {authorTwitterSection}
              </View>
          </View>
    );
  }
}

export default App1;
