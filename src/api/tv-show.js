import { BASE_URL2 } from './config.js';
import { FAKE_DATA , FAKE_RECOMENDATIONS} from './fake-data.js';
import axios from 'axios';


const API_KEY_PARAM = process.env.REACT_APP_API_KEY;
const BEARER_TOKEN = process.env.REACT_APP_READ_ACCESS_TOKEN;

const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
};



export class TVShowAPI{
    

    static async fetchPopulars(){

           const response = await axios.get(url, options);
           console.log(response.data.results);
           return response.data.results;

        // return FAKE_DATA;     

    }


    static async fetchRecommendations(tvShowId){

           const response = await axios.get(`${BASE_URL2}tv/${tvShowId}/recommendations?api_key=${API_KEY_PARAM}`, options);
           console.log(response.data.results);

           return response.data.results;

        //  return FAKE_RECOMENDATIONS;     

    }
    static async fetchByTitle(title){

           const response = await axios.get(`${BASE_URL2}search/tv?api_key=${API_KEY_PARAM}&query=${title}`, options);
           console.log(response.data.results);

           return response.data.results;

       

    }
}
