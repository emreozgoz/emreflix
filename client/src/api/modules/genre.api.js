import publicClient from "../publicClient";

const genreEndpoints = {
  list: ({ mediaType }) => `${mediaType}/genres`,
};
const genreApi = {
  list: async ({ mediaType }) => {
    try {
      const response = await publicClient.get(
        genreEndpoints.list({ mediaType })
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default genreApi;
