import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const testvar = process.env.REACT_APP_TESTKEY; 

const options = {
  method: 'GET',
  url: 'https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

console.log(API_KEY);
console.log(testvar);


// let teams = [
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ATL', teamId: '1'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
//     { abbr: 'ARI', teamId: '22'},
// ]

