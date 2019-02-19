import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  Button,
  RefreshControl,
  Dimensions,
} from 'react-native';
import config from '../../config';
import color from '../../theme/color';
import Thumbnail from '../Thumbnail/Thumbnail';

const BATCH_SIZE = 28;
const NUM_COLUMNS = 4;
const THUMBNAIL_WIDTH = Dimensions.get('window').width / NUM_COLUMNS - 10;

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      page: 1,
      error: null,
      isRefreshing: false,
    };

    this.dataArray = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    const { page } = this.state;
    const url = `${config.baseUrl}?page=${page}&per_page=${BATCH_SIZE}`;

    this.setState({ isLoading: true });

    try {
      const res = await fetch(url);
      const data = await res.json();
      this.dataArray = page === 1 ? data : [...this.dataArray, ...data];
      this.setState({
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
    this.setState({ page: 1, isRefreshing: true }, () => {
      this.makeRemoteRequest();
    });
  };

  renderItem = ({ item }) => (
    <View style={{ paddingTop: 8, paddingLeft: 8 }}>
      <Thumbnail
        url={item.urls.thumb}
        backgroundColor={item.color}
        width={THUMBNAIL_WIDTH}
      />
    </View>
  )

  renderFooter = () => {
    const { isLoading } = this.state;

    if (!isLoading) return null;

    return (
      <View style={{ paddingVertical: 24 }}>
        <ActivityIndicator size="large" color={color.red} />
      </View>
    );
  };

  getItemLayout = (data, index) => ({
    length: THUMBNAIL_WIDTH,
    offset: THUMBNAIL_WIDTH * index,
    index,
  });

  render() {
    const { error, isRefreshing } = this.state;
    const { getRef } = this.props;

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
        ref={getRef}
        data={this.dataArray}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        getItemLayout={this.getItemLayout}
        maxToRenderPerBatch={BATCH_SIZE}
        windowSize={BATCH_SIZE}
        numColumns={NUM_COLUMNS}
        removeClippedSubviews
        refreshControl={(
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
            tintColor={color.red}
          />
        )}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={2}
        ListFooterComponent={this.renderFooter}
        ListEmptyComponent={this.renderEmptyComponent}
      />
    );
  }
}

ImageGallery.propTypes = {
  getRef: PropTypes.func,
};

ImageGallery.defaultProps = {
  getRef: () => null,
};

export default ImageGallery;
