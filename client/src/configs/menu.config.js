import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SlideShowOutlinedIcon from "@material-ui/icons/SlideshowOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SearchoutlinedIcon from "@material-ui/icons/SearchOutlined";
import LockResetOutlinedIcon from "@material-ui/icons/LockResetOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

const main = [
  {
    display: "Home",
    path: "/",
    icon: <HomeOutlinedIcon />,
    state: "home",
  },
  {
    display: "movies",
    path: "/movie",
    icon: <SlideShowOutlinedIcon />,
    state: "home",
  },
  {
    display: "tv series",
    path: "/tv",
    icon: <LiveTvOutlinedIcon />,
    state: "homtve",
  },
  {
    display: "search",
    path: "/search",
    icon: <SearchoutlinedIcon />,
    state: "search",
  },
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: <FavoriteBorderOutlinedIcon />,
    state: "favorites",
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: <RateReviewOutlinedIcon />,
    state: "reviews",
  },
  {
    display: "password update",
    path: "/password-update",
    icon: <LockResetOutlinedIcon />,
    state: "password.update",
  },
];

const menuConfigs = { main, user };
export default menuConfigs;
