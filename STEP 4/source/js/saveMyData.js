var newNode = document.createElement("p");
var text = document.createTextNode("Luu du lieu vao localstorage va binding");
newNode.appendChild(text);
newNode.style = "background:blue;color:#FFF;font-size:21px";

var newNode1 = document.createElement("p");
var text1 = document.createTextNode("Callback function");
newNode1.appendChild(text1);
newNode1.style = "background:blue;color:#FFF;font-size:21px";

var mybo = document.getElementById("mybody");
mybo.insertBefore(newNode, mybo.firstChild);
var emailnode = document.getElementById("Email");
emailnode.parentNode.insertBefore(newNode1, emailnode.nextSibling);
var jsondata = JSON.parse(myData);
localStorage.setItem("Json", JSON.stringify(jsondata));
var datagot = JSON.parse(localStorage.getItem("Json"));
document.getElementById("Name").innerHTML = datagot.Name;
document.getElementById("Born").innerHTML = datagot.Born;
document.getElementById("Address").innerHTML = datagot.Address;
document.getElementById("Phone").innerHTML = datagot.Phone;
document.getElementById("Email").innerHTML = datagot.Email;

function inramanhinh(str) {
    return "Tổng của 1 và 3 là:" + str;
}
function tinhtong(a, b, callback) {
    return callback(a + b);
}
var rre = tinhtong(1, 3, inramanhinh);

document.getElementById("TestCallBack").innerHTML = rre;

document.getElementById("Name").style = "color:red";

var array = [1, 2, 3, 4];

document.getElementById("Array").innerHTML = array;

function sort_dec() {
    document.getElementById("Array").innerHTML = array.sort(function (a, b) { return b - a; });
}
function sort_inc() {
    document.getElementById("Array").innerHTML = array.sort(function (a, b) { return a - b; });
}
var stringT=document.getElementById("stringTest").textContent;
function slice() {
    var newS=stringT.slice(10,20);
    document.getElementById("stringTest").innerHTML=newS;
}
function replace() {
    var newS=stringT.replace('This','That');
    document.getElementById("stringTest").innerHTML=newS;
}
function upper() {
    var newS=stringT.toUpperCase();
    document.getElementById("stringTest").innerHTML=newS;
}
function lower() {
    var newS=stringT.toLowerCase();
    document.getElementById("stringTest").innerHTML=newS;
}

fetch(' http://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))

function goHome(vehicle, callback) {
    alert("I'm going home by " + vehicle);
    alert(callback());
}

goHome("bicycle", function(){
    var a=5;
    return a;
});

var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};
var askMom = function () {
    
    willIGetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });

};

askMom();

