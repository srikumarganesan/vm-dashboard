import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://frontend-test-api.herokuapp.com/api/v1/users/b9e82f86-f772-4447-91b3-f9e60c407cf6'
});

export default instance;