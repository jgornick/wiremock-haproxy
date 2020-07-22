const axios = require('axios')

const promise1 = axios.get('http://localhost:9000/v1/public/coin/1', {headers: {'Host': 'api.coinranking.com'}});
const promise2 = axios.get('http://localhost:9000/v1/public/coin/2', {headers: {'Host': 'api.coinranking.com'}});
const promise3 = axios.get('http://localhost:9000/v1/public/coin/3', {headers: {'Host': 'api.coinranking.com'}});
const promise4 = axios.get('http://localhost:9000/v1/public/coin/4', {headers: {'Host': 'api.coinranking.com'}});
const promise5 = axios.get('http://localhost:9000/v1/public/coin/5', {headers: {'Host': 'api.coinranking.com'}});
const promise6 = axios.get('http://localhost:9000/v1/public/coin/6', {headers: {'Host': 'api.coinranking.com'}});
const promise7 = axios.get('http://localhost:9000/v1/public/coin/7', {headers: {'Host': 'api.coinranking.com'}});
const promise8 = axios.get('http://localhost:9000/v1/public/coin/8', {headers: {'Host': 'api.coinranking.com'}});
const promise9 = axios.get('http://localhost:9000/v1/public/coin/9', {headers: {'Host': 'api.coinranking.com'}});
const promise10 = axios.get('http://localhost:9000/v1/public/coin/10', {headers: {'Host': 'api.coinranking.com'}});
const promise11 = axios.get('http://localhost:9000/v1/public/coin/11', {headers: {'Host': 'api.coinranking.com'}});
const promise12 = axios.get('http://localhost:9000/v1/public/coin/12', {headers: {'Host': 'api.coinranking.com'}});
const promise13 = axios.get('http://localhost:9000/v1/public/coin/13', {headers: {'Host': 'api.coinranking.com'}});
const promise14 = axios.get('http://localhost:9000/v1/public/coin/14', {headers: {'Host': 'api.coinranking.com'}});
const promise15 = axios.get('http://localhost:9000/v1/public/coin/15', {headers: {'Host': 'api.coinranking.com'}});
const promise16 = axios.get('http://localhost:9000/v1/public/coin/16', {headers: {'Host': 'api.coinranking.com'}});
const promise17 = axios.get('http://localhost:9000/v1/public/coin/17', {headers: {'Host': 'api.coinranking.com'}});
const promise18 = axios.get('http://localhost:9000/v1/public/coin/18', {headers: {'Host': 'api.coinranking.com'}});
const promise19 = axios.get('http://localhost:9000/v1/public/coin/19', {headers: {'Host': 'api.coinranking.com'}});
const promise20 = axios.get('http://localhost:9000/v1/public/coin/20', {headers: {'Host': 'api.coinranking.com'}});
const promise21 = axios.get('http://localhost:9000/v1/public/coin/21', {headers: {'Host': 'api.coinranking.com'}});
const promise22 = axios.get('http://localhost:9000/v1/public/coin/22', {headers: {'Host': 'api.coinranking.com'}});
const promise23 = axios.get('http://localhost:9000/v1/public/coin/23', {headers: {'Host': 'api.coinranking.com'}});
const promise24 = axios.get('http://localhost:9000/v1/public/coin/24', {headers: {'Host': 'api.coinranking.com'}});
const promise25 = axios.get('http://localhost:9000/v1/public/coin/25', {headers: {'Host': 'api.coinranking.com'}});
const promise26 = axios.get('http://localhost:9000/v1/public/coin/26', {headers: {'Host': 'api.coinranking.com'}});
const promise27 = axios.get('http://localhost:9000/v1/public/coin/27', {headers: {'Host': 'api.coinranking.com'}});
const promise28 = axios.get('http://localhost:9000/v1/public/coin/28', {headers: {'Host': 'api.coinranking.com'}});
const promise29 = axios.get('http://localhost:9000/v1/public/coin/29', {headers: {'Host': 'api.coinranking.com'}});
const promise30 = axios.get('http://localhost:9000/v1/public/coin/30', {headers: {'Host': 'api.coinranking.com'}});


Promise.all([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8,promise9,promise10,
    promise11,promise12,promise13,promise14,promise15,promise16,promise17,promise18,promise19,promise20,
    promise21,promise22,promise23,promise24,promise25,promise26,promise27,promise28,promise29,promise30,
]).then(function(values) {
  values.map(result =>{
    console.log(result.data);
  })
});