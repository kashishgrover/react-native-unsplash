import Unsplash, { toJson } from 'unsplash-js/native';
import config from '../config';

const unsplash = new Unsplash({
  applicationId: config.unsplashApplicationId,
  secret: config.unsplashSecret,
});

export default {
  listPhotos: unsplash.photos.listPhotos,
  toJson,
};
