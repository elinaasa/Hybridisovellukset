import {deleteTag, postTag} from '../models/tagModel';
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
  Mutation: {
    createTag: async (
      _parent: undefined,
      args: {input: {tag_name: string}},
    ) => {
      return await postTag(args.input);
    },
    deleteTag: async (_parent: undefined, args: {input: string}) => {
      console.log(args);
      return await deleteTag(Number(args.input));
    },
  },
};
