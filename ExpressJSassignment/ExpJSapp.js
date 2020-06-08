const express = require('express');

const expressApp = express(); 

//expressApp.use((req, res, next) => {
//  console.log('Went to the first funnel');
//  next();
//}); 

//expressApp.use((req, res, next) => {
//  console.log('Went to the second funnel');
//  res.send('<h1>This is my response!</h1>');
//}); 

expressApp.use('/users', (req, res, next) => {
  console.log('In another middle ware!');
  res.send('<h1>Youre in the user page</h1>');
}); 

expressApp.use('/', (req, res, next) => {
  console.log('In another middle ware!');
  res.send('<h1>Youre in another page!</h1>');
}); 

//const server = http.createServer(expressApp);
//server.listen(2000);
//replaces to below
expressApp.listen(3000);