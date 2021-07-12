import Unsplash, { toJson } from 'unsplash-js/native';
import config from '../config';

const unsplash = new Unsplash({
  applicationId: config.unsplash.accessKey,
  secret: config.unsplash.secretKey,
});

export default {
  listPhotos: unsplash.photos.listPhotos,
  toJson,
};
