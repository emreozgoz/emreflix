const mediaType = {
  movie: "movie",
  tv: "tv",
};
const category = {
  popular: "popular",
  topRated: "top_rated",
};
const bacdropPath = (imgEndpoint) =>
  `https://image.tmdb.org/t/p/original${imgEndpoint}`;
const posterPath = (imgEndpoint) =>
  `https://image.tmdb.org/t/p/w500${imgEndpoint}`;
const youtubePath = (videoId) =>
  `https://www.youtube.com/watch?v=${videoId}?controls=0`;

const tmdbConfigs = {
  mediaType,
  category,
  bacdropPath,
  posterPath,
  youtubePath,
};
export default tmdbConfigs;
