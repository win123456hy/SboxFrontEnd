// Khởi tạo mảng Post
var Post = [
    {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
];
var loadpage = function () {
    Post.sort(function (a, b) { return b.id - a.id })
    for (let index = 0; index < Post.length; index++) {
        var row = addRow(Post[index].id, Post[index].title, Post[index].body);
        var add = document.getElementById("title");
        add.parentNode.insertBefore(row, add.nextSibling);
    }
}
loadpage();
// Hàng được chọn
var selectedrow = -1;

// Thêm một hàng vào bảng
function addRow(id, title, body) {
    var row = document.createElement("tr");
    var valuerow1 = document.createElement("td");
    var valuerow2 = document.createElement("td");
    var valuerow3 = document.createElement("td");
    var valuerow4 = document.createElement("td");
    var textvl1 = document.createTextNode(id);
    var textvl2 = document.createTextNode(title);
    var textvl3 = document.createTextNode(body);
    var textvl4 = document.createTextNode("......");
    var a = document.createElement("a");
    a.appendChild(textvl4);
    a.setAttribute("href", "#modalDelete");
    a.style = "text-decoration:none;width: 100px;height: 100px;text-align: center;line-height:100px";
    valuerow1.appendChild(textvl1);
    valuerow2.appendChild(textvl2);
    valuerow3.appendChild(textvl3);
    valuerow4.appendChild(a);
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
    var title1 = document.getElementById("titled").value;
    var body1 = document.getElementById("body").value;

    var idu = Post.length + 1;
    var us = { id: idu, title: title1, body: body1 };
    Post.push(us);
    var row = addRow(idu, title1, body1);

    var add = document.getElementById("title");
    add.parentNode.insertBefore(row, add.parentNode.lastChild);
    close();
    messages("Add Post Successfully!", "green");
}



// Xoá dữ liệu
function deleteData() {
    if (selectedrow < 0) {
        alert("Vui lòng chọn một hàng!");
    }
    else {
        document.getElementById("tb").deleteRow(selectedrow);
        close();
        messages("Delete Post Successfully!", "green");
        selectedrow = -1;
    }
}

// Đóng popup
function close() {
    location.href = "#";
}