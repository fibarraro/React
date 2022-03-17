import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID DLtierWA0fD2F7ucXWFBmgzbFRgYdB-VhYt3Bebjl2A'
    }
});