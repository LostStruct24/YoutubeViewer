import axios from 'axios';

const KEY = 'AIzaSyAZF2P78IR4p4BtXVyUAepWWnaUP0ILw0E';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});

