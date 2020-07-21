const axios = require('axios')

let URL1 = "http://localhost:9000/v1/public/coin/1"
let URL2 = "http://localhost:9000/v1/public/coin/2"
let URL3 = "http://localhost:9000/v1/public/coin/3"
let URL4 = "http://localhost:9000/v1/public/coin/4"
let URL5 = "http://localhost:9000/v1/public/coin/5"
let URL6 = "http://localhost:9000/v1/public/coin/6"
let URL7 = "http://localhost:9000/v1/public/coin/7"
let URL8 = "http://localhost:9000/v1/public/coin/8"
let URL9 = "http://localhost:9000/v1/public/coin/9"
let URL10 = "http://localhost:9000/v1/public/coin/10"
let URL11 = "http://localhost:9000/v1/public/coin/11"
let URL12 = "http://localhost:9000/v1/public/coin/12"
let URL13 = "http://localhost:9000/v1/public/coin/13"
let URL14 = "http://localhost:9000/v1/public/coin/14"
let URL15 = "http://localhost:9000/v1/public/coin/15"
let URL16 = "http://localhost:9000/v1/public/coin/16"
let URL17 = "http://localhost:9000/v1/public/coin/17"
let URL18 = "http://localhost:9000/v1/public/coin/18"
let URL19 = "http://localhost:9000/v1/public/coin/19"
let URL20 = "http://localhost:9000/v1/public/coin/20"


const promise1 = axios.get(URL1, {headers: {'Host': 'api.coinranking.com'}});
const promise2 = axios.get(URL2, {headers: {'Host': 'api.coinranking.com'}});
const promise3 = axios.get(URL3, {headers: {'Host': 'api.coinranking.com'}});
const promise4 = axios.get(URL4, {headers: {'Host': 'api.coinranking.com'}});
const promise5 = axios.get(URL5, {headers: {'Host': 'api.coinranking.com'}});
const promise6 = axios.get(URL6, {headers: {'Host': 'api.coinranking.com'}});
const promise7 = axios.get(URL7, {headers: {'Host': 'api.coinranking.com'}});
const promise8 = axios.get(URL8, {headers: {'Host': 'api.coinranking.com'}});
const promise9 = axios.get(URL9, {headers: {'Host': 'api.coinranking.com'}});
const promise10 = axios.get(URL10, {headers: {'Host': 'api.coinranking.com'}});
const promise11 = axios.get(URL11, {headers: {'Host': 'api.coinranking.com'}});
const promise12 = axios.get(URL12, {headers: {'Host': 'api.coinranking.com'}});
const promise13 = axios.get(URL13, {headers: {'Host': 'api.coinranking.com'}});
const promise14 = axios.get(URL14, {headers: {'Host': 'api.coinranking.com'}});
const promise15 = axios.get(URL15, {headers: {'Host': 'api.coinranking.com'}});
const promise16 = axios.get(URL16, {headers: {'Host': 'api.coinranking.com'}});
const promise17 = axios.get(URL17, {headers: {'Host': 'api.coinranking.com'}});
const promise18 = axios.get(URL18, {headers: {'Host': 'api.coinranking.com'}});
const promise19 = axios.get(URL19, {headers: {'Host': 'api.coinranking.com'}});
const promise20 = axios.get(URL20, {headers: {'Host': 'api.coinranking.com'}});


Promise.all([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8,promise9,promise10,
    promise11,promise12,promise13,promise14,promise15,promise16,promise17,promise18,promise19,promise20,
]).then(function(values) {
  values.map(result =>{
    console.log(result.data);
  })
});