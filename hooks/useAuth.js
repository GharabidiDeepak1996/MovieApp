import react, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { route } from "../utils/apis";
import axios from "axios";

//init create context
const AuthContext = createContext({});

// const wait = (timeout) => {
//   return new Promise((resolve) => setTimeout(resolve, timeout));
// };

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [trending, setTrending] = useState([]);

  //Get the data from apis
  const getData = async () => {
    try {
      const nowPlaying = await axios.get(route.now_playing);
      const popular = await axios.get(route.popular);
      const topRated = await axios.get(route.top_rated);
      const upcoming = await axios.get(route.upcoming);
      const trending = await axios.get(route.trending);

      setNowPlaying(nowPlaying.data.results);
      setPopular(popular.data.results);
      setTopRated(topRated.data.results);
      setUpcoming(upcoming.data.results);
      setTrending(trending.data.results);
    } catch (err) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //Deepak
  //Refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const memoedValue = useMemo(
    () => ({
      loading,
      nowPlaying,
      popular,
      topRated,
      upcoming,
      trending,
      onRefresh,
      refreshing,
    }),
    [
      loading,
      nowPlaying,
      popular,
      topRated,
      upcoming,
      trending,
      onRefresh,
      refreshing,
    ]
  );
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};
