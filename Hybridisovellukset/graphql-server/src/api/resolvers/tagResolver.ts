import {fetchAllTags, fetchTagsByMediaId} from '../models/tagModel';

export default {
  Query: {
    tags: async () => {
      return await fetchAllTags();
    },
  },
  MediaItem: {
    tags: async (parent: {media_id: string}) => {
      console.log(parent);
      const mediaId = Number(parent.media_id);
      return await fetchTagsByMediaId(mediaId);
    },
  },
};
