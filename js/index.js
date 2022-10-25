const d = new Date();
document.getElementById("dnt").innerHTML = d;

search.addEventListener("click",(e)=>{
        var city = document.getElementById("inp").value;

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=835c0c6cafe202d27256802a1fd140f6")

            .then((Response) => {

                if (!Response.ok) {

                    document.getElementById("cityName").innerHTML = "City name is invalid.";

                    throw new Error("City doesnt exist.");
                }
                return Response.json();
            })

            .then((data) => {

                console.log(data);

                document.getElementById("cityName").innerHTML = data.name

                document.getElementById("degree").innerHTML = "Temp" + " " + data.main.temp + "°C"

                document.getElementById("humidity").innerHTML = "Humidity " + data.main.humidity + "%"

                document.getElementById("wind").innerHTML = "Wind Speed" + data.wind.speed + "km/h"



                const myObj = data.weather[0];

                document.getElementById("data").innerHTML = myObj.description


            })


    }






)








