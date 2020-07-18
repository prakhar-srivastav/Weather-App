


const request = require ('request')

const forecast= (lat,long,callback)=>{

	const url ='http://api.weatherstack.com/current?access_key=b9b87104dfda76650c59cecb47e81bc7&query='+lat+
	',' + long + '&units=f'
    

	request({url:url,json:true},(error,response)=>{
		if(error || response.body.error)
		{
			callback('error',undefined)
		}
		else 
		{
            callback(undefined,{
            	act:response.body.current.temperature,
            	feel:response.body.current.feelslike
            }) 
		}
	})


}
module.exports = forecast