const favoriteUtils = {
  check: ({ listFavorites, mediaId }) =>
    listFavorites &&
    listFavorites.find(
      (favorite) => favorite.mediaId.toString() === mediaId.toString()
    ) !== undefined,
};
export default favoriteUtils;
