
const request = require ('request')

const geocode =  (adress ,callback)=>{


const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoicHJha2hhcnJycjQiLCJhIjoiY2tjbnV0ODZkMDg2bTJ0bGRtYmIybnZseCJ9.Hiza73R6j3TwDLk18r_XEg&limit=1'
request( {url:url,json:true},(error,response)=>{
  
  if(error || response.body.features.length==0)
  {
  	callback('error',undefined)
  }
  else 
  {
  	callback(undefined,{
  		lat:response.body.features[0].center[1],
  		long:response.body.features[0].center[0],
  		name:response.body.features[0].place_name
  	})
  }

})


}




module.exports = geocode 