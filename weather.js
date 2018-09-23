let request = require('request');
let argv = require('yargs').argv;

let apiKey = '0f304b5e45e910b5ab3d6b0a6b4a5a97';
let city = argv.c || 'Reading';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `Temperature is ${weather.main.temp-273} degrees in ${weather.name}!`;
    console.log(message);
	
	var date = new Date(weather.sys.sunset*1000);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	message = `Sunset is at ${hours + ":" + minutes + ":" + seconds} GMT in ${weather.name}!`;
    console.log(message);
  }
});