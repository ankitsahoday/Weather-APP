let apiKey="fe175c03bc942043ac1b2f504f7d9023"

function fetchweather(city)
{
   

    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=fe175c03bc942043ac1b2f504f7d9023")
          .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
          .then((data) =>displayweather(data));
}

function displayweather(data)
{
    

    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp} = data.main;
    // console.log(icon);
    
    // console.log(name +","+temp+","+description);
    document.querySelector(".city").innerText=name;
    document.querySelector(".temp").innerText=temp+"℃";
    document.querySelector(".description").innerText=description;
   document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";


}   

 

  function search() {
      let city=document.querySelector(".bar").value;
        // console.log("inside search "+ city);
        fetchweather(city);
  }

