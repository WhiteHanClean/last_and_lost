import axios from 'axios';

const $api = axios.create({
  baseURL: 'ala-too-project.herokuapp.com/api',
});

export default $api;
