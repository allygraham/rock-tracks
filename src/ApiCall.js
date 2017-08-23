import axios from 'axios';

export default {
  requestPost: function(id) {
    return axios.get(`https://itunes.apple.com/search?term=rock&media=music`)
      .then(response => {
        console.log(response); 
        return {
          response: response.data.results,
        }
      }).catch(error => console.log('Error fetchign and parsing data', error));
  }
}