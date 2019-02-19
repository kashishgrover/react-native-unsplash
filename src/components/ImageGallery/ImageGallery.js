import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  Button,
  RefreshControl,
} from 'react-native';
import config from '../../config';
import color from '../../theme/color';
import Thumbnail from '../Thumbnail/Thumbnail';
import ThumbnailConfig from '../Thumbnail/Thumbnail.config';

const PAGE_SIZE = 30;

class ImageGallery extends React.Component {
  state = {
    isLoading: false,
    data: [],
    page: 1,
    error: null,
    isRefreshing: false,
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    const { page } = this.state;
    const url = `${config.baseUrl}?page=${page}&per_page=${PAGE_SIZE}`;

    this.setState({ isLoading: true });

    try {
      const { data: existingData } = this.state;
      const res = await fetch(url);
      const data = await res.json();

      this.setState({
        data: page === 1 ? data : [...existingData, ...data],
        error: data.error || null,
        isLoading: false,
        isRefreshing: false,
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  };

  handleLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 }, () => {
      this.makeRemoteRequest();
    });
  };

    handleRefresh = () => {
      this.setState({
        page: 1,
        isRefreshing: true,
      }, () => {
        this.makeRemoteRequest();
      });
    };

  renderFooter = () => {
    const { isLoading } = this.state;

    if (!isLoading) return null;

    return (
      <View style={{ paddingTop: 32, paddingBottom: 64 }}>
        <ActivityIndicator size="large" color={color.red} />
      </View>
    );
  };

  getItemLayout = (data, index) => ({
    length: ThumbnailConfig.width,
    offset: ThumbnailConfig.width * index,
    index,
  });

  render() {
    const { data, error, isRefreshing } = this.state;

    if (error) {
      return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: color.white }}>
            Yikes, something went wrong!
          </Text>
          <Button
            onPress={this.makeRemoteRequest}
            title="Try Again"
            color={color.red}
          />
        </View>
      );
    }

    return (
      <FlatList
        data={data}
        extraData={data.length}
        renderItem={({ item }) => <Thumbnail url={item.urls.thumb} />}
        keyExtractor={(item, index) => index}
        getItemLayout={this.getItemLayout}
        numColumns={4}
        refreshControl={(
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
            tintColor={color.red}
          />
        )}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={50}
        ListFooterComponent={this.renderFooter}
        ListEmptyComponent={this.renderEmptyComponent}
      />
    );
  }
}

export default ImageGallery;
