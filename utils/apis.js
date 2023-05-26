export const baseUrl = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/original";
export const route = {
  now_playing: `${baseUrl}/movie/now_playing?api_key=${process.env.API_KEY}&language-en-US`,
  popular: `${baseUrl}/movie/popular?api_key=${process.env.API_KEY}&language=en-US`,
  top_rated: `${baseUrl}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US`,
  trending: `${baseUrl}/trending/movie/week?api_key=${process.env.API_KEY}&language=en-US`,
  search: `${baseUrl}/search/movie?api_key=${process.env.API_KEY}&language=en-US`,
};
