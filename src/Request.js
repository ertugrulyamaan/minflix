const key = process.env.REACT_APP_MOVIE_API_KEY


const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestSearch:`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`,
  requestmovie: `https://api.themoviedb.org/3/movie/`,
  key:key
  };
 
  export default requests;

