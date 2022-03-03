# bongoblida-weather-app
The past three years I lived in Iceland, where the winters are long and the summers are short. The Icelanders have a special word for good summer weather: bongóblíða. I made an app that shows people whether it is currently bongóblíða in Reykjavík, the country's capital.  
I am using the weather data from the OpenWeather API. The app will state that it is bongóblíða if the temperature is 10 degrees Celsius or higher, the weather description is not equal to 'Rain' and the percentage of clouds is equal to or less than 50%. Since high temperatures are rare in Iceland, one can't be too strict. :)  
Of course most of the time the website will show that it isn't bongóblíða, in which case it has a button that people can click to get ideas for what to do in this 'bad' weather ;)  
I shared the app with some Icelandic developers and thankfully they could appreciate the humor :) Feel free to check out the app on bongoblida.netlify.app.  
I used React for the frontend. To fetch the data from the OpenWeather API I created a little backend that I deployed to Heroku, keeping my API key safe.  
