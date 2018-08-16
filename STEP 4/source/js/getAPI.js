// Khởi tạo mảng User
var User = [];
// Hàng được chọn
var selectedrow = -1;

// Thêm một hàng vào bảng
function addRow(id, name, username, email) {
    var row = document.createElement("tr");
    var valuerow1 = document.createElement("td");
    var valuerow2 = document.createElement("td");
    var valuerow3 = document.createElement("td");
    var valuerow4 = document.createElement("td");
    var textvl1 = document.createTextNode(id);
    var textvl2 = document.createTextNode(name);
    var textvl3 = document.createTextNode(username);
    var textvl4 = document.createTextNode(email);
    valuerow1.appendChild(textvl1);
    valuerow2.appendChild(textvl2);
    valuerow3.appendChild(textvl3);
    valuerow4.appendChild(textvl4);
    row.appendChild(valuerow1);
    row.appendChild(valuerow2);
    row.appendChild(valuerow3);
    row.appendChild(valuerow4);
  
    // Gán sự kiện cho hàng: Khi click vào thì hightlight
    row.addEventListener("click", function () {
        this.style = "background:yellow;";
        selectedrow = this.rowIndex;
        var nodeList = document.querySelectorAll("tr");
        for (let index = 0; index < nodeList.length; index++) {
            if (index != selectedrow)
                nodeList[index].style = "background:#FFF";
        }
    });
    return row;
}

// Fetch API
fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        // Khi fetch thành công thì gán dữ liệu lấy được vào mảng User
        for (let index = 0; index < data.length; index++) {
            User.push(data[index]);
        }

        User.sort(function (a, b) { return b.id - a.id })

        // Hiển thị dữ liệu vừa fetch được ra bảng
        for (let index = 0; index < User.length; index++) {
            var row = addRow(User[index].id, User[index].name, User[index].username, User[index].email);
            var add = document.getElementById("title");
            add.parentNode.insertBefore(row, add.nextSibling);
        }

    })
    .catch(error => console.error(error));



// In ra thông báo
function messages(message, color) {
    var oldmess = document.getElementById("mess");
    if (oldmess) {
        document.body.removeChild(oldmess);
    }
    var container = document.createElement("div");
    container.setAttribute("id", "mess");
    var tag = document.createElement("span");
    var text = document.createTextNode(message);
    tag.appendChild(text);
    tag.style.color = "white";
    tag.style.fontSize = "24px";

    container.appendChild(tag);
    container.style.opacity = "1";
    container.style.paddingTop = "10px";
    container.style.paddingBottom = "10px";
    container.style.textAlign = "center";
    container.style.width = "500px";
    container.style.margin = "100px auto";
    container.style.background = color;
    document.body.insertBefore(container, document.body.lastChild);
}

//Thêm dữ liệu
function adddata() {
    var name1 = document.getElementById("name").value;
    var username1 = document.getElementById("username").value;
    var email1 = document.getElementById("email").value;

    var idu = User.length + 1;
    var us = { id: idu, name: name1, username: username1, email: email1 };
    User.push(us);
    var row = addRow(idu, name1, username1, email1);

    var add = document.getElementById("title");
    add.parentNode.insertBefore(row, add.parentNode.lastChild);
    close();
    messages("Add User Successfully!", "green");
}

// Sửa dữ liệu
function editData() {
    if (selectedrow < 0) {
        alert("Vui lòng chọn một hàng!");
    }
    else {
        var name1 = document.getElementById("namee").value;
        var username1 = document.getElementById("usernamee").value;
        var email1 = document.getElementById("emaile").value;
        var nodeList = document.querySelectorAll("tr");
        nodeList[selectedrow].cells[1].innerHTML = name1;
        nodeList[selectedrow].cells[2].innerHTML = username1;
        nodeList[selectedrow].cells[3].innerHTML = email1;
        close();
        messages("Edit User Successfully!", "green");
        selectedrow = -1;
    }
}

// Xoá dữ liệu
function deleteData() {
    if (selectedrow < 0) {
        alert("Vui lòng chọn một hàng!");
    }
    else {
        document.getElementById("tb").deleteRow(selectedrow);
        close();
        messages("Delete User Successfully!", "green");
        selectedrow = -1;
    }
}

// Đóng popup
function close() {
    location.href = "#";
}