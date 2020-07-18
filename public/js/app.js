const weatherForm =document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

 weatherForm.addEventListener('submit', (e)=>{
 	e.preventDefault()
 	console.log("testing!")
 	const location =search.value
    
    const url ='/weather?address='+ encodeURIComponent(location)
 	fetch(url).then((response) =>{
       response.json().then((data)=>{

       	if(data.error) 
       		{
              message2.textContent=''
       		  message1.textContent='Error occured'
       		}
       	 else 
       {
       	message2.textContent='Although it is ' + data.forecast.act + ', it feels like ' +data.forecast.act
       	message1.textContent=data.location
       }

       })


 	})
 } )