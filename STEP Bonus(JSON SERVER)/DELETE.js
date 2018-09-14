function deleteUser(id) {
  return fetch("http://localhost:3000/user"+ '/' + id, {
    method: 'delete',
	headers:{
    'Content-Type': 'application/json'
  }
  })
  .then(response => response.json());
}
deleteUser(1)