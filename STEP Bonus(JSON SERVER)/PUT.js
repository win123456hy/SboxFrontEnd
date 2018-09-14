
var data =  {
    "name": "userhihisss"
};
function updateUser(id) {
  return fetch("http://localhost:3000/user" + '/' + id, {
    method: 'PUT',
	 body: JSON.stringify(data),
	headers:{
    'Content-Type': 'application/json'
  }
  })
  .then(response => response.json());
}
updateUser(2);