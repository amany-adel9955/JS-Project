var customerEmail = document.getElementById("customer")
var productName = document.getElementById("productname")
var productId = document.getElementById("productid")
var productCategory = document.getElementById("category")
var productPrice = document.getElementById("productprice")
var userEmail = document.getElementById("email")
var userPassword = document.getElementById("password")
var submit = document.getElementById("submit")
var loginButton = document.getElementById("login-button")
var mood = "create"
var temp




var allProduct = []
if(localStorage.getItem("Product") != null) {
    allProduct = JSON.parse(localStorage.getItem("Product"))
}

function addProduct(){
    var product = {
        cemail :customerEmail.value,
        pname: productName.value,
        pid: productId.value,
        pcategory:productCategory.value,
        pprice: productPrice.value
    }

    if(customerEmail.value !="" && productName.value != "" && productId.value != ""&&productCategory.value !="" && productPrice.value != "") {
     if(mood === "create") {
        allProduct.push(product)
     } else {
        allProduct[temp] = product
        mood = "create"
        submit.innerHTML = "create"
     }}
   
    localStorage.setItem("Product" , JSON.stringify(allProduct))
    console.log(allProduct)
    viewProductTable()
    clearData()
}

function viewProductTable(){
    var viewProduct = ``
    for(var i=0; i<allProduct.length; i++) {
    viewProduct += ` <tr>
    <td>${i+1}</td>
    <td>${allProduct[i].cemail}</td>
    <td>${allProduct[i].pname}</td>
    <td>${allProduct[i].pid}</td>
    <td>${allProduct[i].pcategory}</td>
    <td>${allProduct[i].pprice}</td>
    <td><button onclick = 'updateProduct(${i})' id="update" class = "btn btn-outline-success">update</button></td>
    <td><button onclick = 'deleteProduct(${i})' id="delete" class = "btn btn-outline-success">delete</button></td>
</tr>`
    }
    document.getElementById("tbody").innerHTML = viewProduct
}


function clearData() {
customerEmail.value = ''
productName.value = ''
productId.value = ''
productCategory.value = ''
productPrice.value = ''
userEmail.value = ''
userPassword.value = ''
}

function deleteProduct(i){
allProduct.splice(i,1)
localStorage.setItem("Product" , JSON.stringify(allProduct))
viewProductTable()
}

function updateProduct(i) {
    customerEmail.value = allProduct[i].cemail
    productName.value = allProduct[i].pname
    productId.value = allProduct[i].pid
    productCategory.value = allProduct[i].pcategory
    productPrice.value = allProduct[i].pprice
    submit.innerHTML = "update"
    mood = "update"
    temp = i
    scroll({
        top:0,
        behavior:"smooth"
    })
}

function searchProduct(value) {
    var  viewProduct =``
for(var i=0; i<allProduct.length; i++) {
   
    if(allProduct[i].pname.includes(value.toLowerCase())) {
        viewProduct +=   ` <tr>
    <td>${i+1}</td>
    <td>${allProduct[i].cemail}</td>
    <td>${allProduct[i].pname}</td>
    <td>${allProduct[i].pid}</td>
    <td>${allProduct[i].pcategory}</td>
    <td>${allProduct[i].pprice}</td>
    <td><button onclick = 'updateProduct(${i})' id="update"  class = "btn btn-outline-success">update</button></td>
    <td><button onclick = 'deleteProduct(${i})' id="delete"  class = "btn btn-outline-success">delete</button></td>
</tr>`
    }
}
document.getElementById("tbody").innerHTML = viewProduct

}

viewProductTable()

allLogins =[]


function loginSystem() {
    var login = {
        useremail : userEmail.value,
        userpass : userPassword.value
    }
    allLogins.push(login)
    localStorage.setItem("Login" , JSON.stringify(allLogins))
}

allLogins
if(localStorage.getItem("Login") != null) {
    allLogins = JSON.parse(localStorage.getItem("Login"))
}


function deleteUser(i){
    allLogins.splice(i,1)
    localStorage.setItem("Login" , JSON.stringify(allLogins))
    }

// if (username === 'user' && password === 'password') {
//     alert('Login successful!');
//     // Redirect to your CRUD system or perform other actions
// } else {
//     alert('Invalid username or password. Please try again.');
// }
