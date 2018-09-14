
var data =  {
    "name": "userhihi"
};

fetch('http://localhost:3000/user', {
  method: 'POST', 
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));