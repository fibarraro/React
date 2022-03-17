import axios from 'axios';

const KEY = 'AIzaSyC3myGCQoo7HjHqb7yxfEuijVd7g-syq3U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});