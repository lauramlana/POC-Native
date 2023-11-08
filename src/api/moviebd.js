import axios from 'axios';
import axiosRetry from 'axios-retry';
import { apiKey } from '../assets/mock';

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

// ver no console o numero de chamadas
axios.interceptors.request.use((config) => {
  config.__retryCount = config.__retryCount || 0;
  config.__retryCount += 1;
  console.log(`Laura fazendo tentativa #${config.__retryCount} de ${config.url}`);
  return config;
});

// Endpoints
const apiBaseUrl = `https://api.themoviedb.org/3`;
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming/day?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated/day?api_key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('Erro na tentativa #', error.config.__retryCount, error);
    return {};
  }
};

export const fetchTrending = () => {
  return apiCall(trendingMoviesEndpoint);
};

export const fetchUpcoming = () => {
  return apiCall(upcomingMoviesEndpoint);
};

export const fetchTopRated = () => {
  return apiCall(topRatedMoviesEndpoint);
};
