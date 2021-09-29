import axios from 'axios';

axios.request("http://fakeapi.jsonparseronline.com/users").then(value => console.log(value)).catch();