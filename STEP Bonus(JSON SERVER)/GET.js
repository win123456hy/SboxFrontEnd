fetch('http://localhost:3000/user',{
headers:{
    'Content-Type': 'application/json'
  }
})
    .then(response => response.json())
    .then(data => {
        // Khi fetch thành công thì gán dữ liệu lấy được vào mảng User
		console.log(data);
    })
    .catch(error => console.error(error));
