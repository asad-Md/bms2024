import axios from "axios";

export const solidData = async ({lat,long}) => {
  console.log("this shit was hit mwith");

  let temp_data={};
  try{
    const test = [long,lat]
      const data = await axios.get(
        `https://rest.isric.org/soilgrids/v2.0/properties/query?lon=${test[0]}&lat=${test[1]}&property=bdod&property=cec&property=cfvo&property=clay&property=nitrogen&property=ocd&property=ocs&property=phh2o&property=sand&property=silt&property=soc&property=wv0010&property=wv0033&property=wv1500&depth=0-5cm&depth=0-30cm&depth=5-15cm&depth=15-30cm&depth=30-60cm&depth=60-100cm&depth=100-200cm&value=Q0.5&value=Q0.05&value=Q0.95&value=mean&value=uncertainty`
      );
      const weather_data=await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=rain&hourly=temperature_2m,relative_humidity_2m,rain`
      )
    
      data.data.properties.layers.map((each,ind)=>{
        temp_data[each.name]=each.depths[0].values.mean;
      })
    
    temp_data["temperature"]=weather_data.data.hourly.temperature_2m[0];
    temp_data["humidity"]=weather_data.data.hourly.relative_humidity_2m[0];
    temp_data["rain"]=weather_data.data.current.rain;
    console.log(temp_data);
    return temp_data;
  }
  catch(err){
    console.log(err);
    return 1;
  }

//get phosphorus and potassium

};
