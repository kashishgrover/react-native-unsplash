import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  Button,
  RefreshControl,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import color from '../theme/color';
import Thumbnail from './Thumbnail';
import unsplashService from '../services/unsplashService';

const BATCH_SIZE = 28;
const NUM_COLUMNS = 4;
const THUMBNAIL_WIDTH = Dimensions.get('window').width / NUM_COLUMNS - 6;

class ImageGallery extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      page: 1,
      error: null,
      isRefreshing: false,
      photos: [],
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  componentDidUpdate() {
    const { navigation } = this.props;
    navigation.addListener('willFocus', this.resetMainScreen);
  }

  resetMainScreen = () => {
    this.setState({ page: 1, photos: [], isLoading: true }, () => {
      this.makeRemoteRequest();
    });
  };

  makeRemoteRequest = async () => {
    const { page, photos } = this.state;
    this.setState({ isLoading: true });

    unsplashService
      .listPhotos(page, BATCH_SIZE, 'latest')
      .then(unsplashService.toJson)
      .then((data) => {
        this.setState({ photos: page === 1 ? data : [...photos, ...data] });
        this.setState({
          error: data.error || null,
          isLoading: false,
          isRefreshing: false,
        });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  };

  handleLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 }, () => {
      this.makeRemoteRequest();
    });
  };

  handleRefresh = () => {
    this.setState({ page: 1, isRefreshing: true, photos: [] }, () => {
      this.makeRemoteRequest();
    });
  };

  renderItem = ({ item, index }) => {
    const columnIndex = index % 4;
    return (
      <View style={{ marginLeft: columnIndex > 0 ? 8 : 0 }}>
        <Thumbnail photo={item} width={THUMBNAIL_WIDTH} />
      </View>
    );
  };

  renderFooter = () => {
    const { isLoading } = this.state;

    if (!isLoading) return null;

    return <ActivityIndicator style={{ marginVertical: 24 }} size="large" color={color.blue} />;
  };

  getItemLayout = (data, index) => ({
    length: THUMBNAIL_WIDTH,
    offset: THUMBNAIL_WIDTH * index,
    index,
  });

  render() {
    const { error, isRefreshing, photos } = this.state;
    if (error) {
      return (
        <View>
          <Text style={{ fontSize: 16, color: color.greyDark }}>
            {'Yikes, something went wrong! :o'}
          </Text>
          <Button onPress={this.makeRemoteRequest} title="Try Again" color={color.blue} />
        </View>
      );
    }
    return (
      <FlatList
        data={photos}
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
            onRefresh={this.resetMainScreen}
            tintColor={color.blue}
          />
)}
        columnWrapperStyle={{ marginBottom: 8 }}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={this.renderFooter}
        ListEmptyComponent={this.renderEmptyComponent}
      />
    );
  }
}

export default withNavigation(ImageGallery);
