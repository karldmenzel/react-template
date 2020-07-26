import axios from 'axios';

export const exampleService = () => {
    const serviceUrl = 'https://www.google.com';

    return axios.get(serviceUrl);
}