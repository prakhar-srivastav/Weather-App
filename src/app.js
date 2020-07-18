const path = require('path')
const express =require('express')
const hbs = require('hbs')
const geocode = require('./utils/geo')
const forecast = require('./utils/fore')
const app = express()

const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath =path.join(__dirname,'../templates/views')
const partialpath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialpath)

app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
     
     res.render('index',{
     	title:'weather',
     	name:'Prakhar Srivastava'
     })

})

app.get('/about',(req,res)=> {

	res.render('about', {
		title:'About Me',
		name:'Prakhar Srivastava'
	})
})

app.get('/help',(req,res) => {

	res.render('help', {
     helpText:'This section is still under development phase',
     title:'help',
     name:'Prakhar Srivastava'

	})
})

app.get('/weather',(req,res) => {

	if(!req.query.address)
	{
		res.send({
			error:"please provide an address"
		})
		return 
	}
	geocode(req.query.address,(error,{lat,long,name}={})=>{
	if(error) 
	{
		res.send({error})
		return 
	}

    forecast(lat,long,(error,fdata)=>{
	if(error) 
	{
		res.send({error})
		return 
	}

		res.send({
			forecast:fdata,
			location:name,
			address:req.query.address
		})

} )

})

})


app.get('*',(req,res)=>{

	res.render('404',{
		title:'Error',
		name:'Prakhar',
		errorMessage:'Page not found'
	})
})

app.listen(3000, ()=> {
	console.log('server up and running')
})