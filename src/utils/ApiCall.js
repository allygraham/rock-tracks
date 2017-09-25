import axios from 'axios';

export default {
  requestPost: (id) => {
    return axios.get(`https://itunes.apple.com/search?term=rock&media=music`)
      .then(response => {
        return {
          response: response.data.results,
        }
      }).catch(error => console.log('Error fetching and parsing data', error));
  }
}