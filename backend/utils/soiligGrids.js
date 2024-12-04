import axios from "axios";

export const solidData = async () => {
  console.log("this shit was hit");
  const all_data={};
  let temp_data={};
  const data = await axios.get(
    "https://rest.isric.org/soilgrids/v2.0/properties/query?lon=-72&lat=-9&property=bdod&property=cec&property=clay&property=nitrogen&property=phh2o&property=sand&depth=0-5cm&depth=0-30cm&depth=5-15cm&depth=15-30cm&value=mean"
  );
//   console.log(data.data.properties.layers);
  data.data.properties.layers.map((each,ind)=>{
    temp_data[each.name]=each.depths[0].values.mean;
  })
  const weather_data=await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=-9&longitude=-72&current=rain&hourly=temperature_2m,relative_humidity_2m,rain"
  )
//   console.log(weather_data.data);
//   console.log(temp_data);
temp_data["temperature"]=weather_data.data.hourly.temperature_2m[0];
temp_data["humidity"]=weather_data.data.hourly.relative_humidity_2m[0];
temp_data["rain"]=weather_data.data.current.rain;

//get phosphorus and potassium
  return temp_data;
};
