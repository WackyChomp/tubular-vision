import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';      //removed '/' to fix -_-

const options = {
  url: BASE_URL,
  params: {maxResults:'50'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchYoutubeAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};