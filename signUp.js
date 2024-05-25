// alert("Connected");

let getUsersData=JSON.parse(localStorage.getItem("usersData")) || [];
console.log(getUsersData);

function signUp(){
  console.log("HEllo World");
  let userName = document.getElementById("txtUsername").value;
  let mobile = document.getElementById("txtMobile").value;
   // Debug mobile number entered
  console.log("mobile numer before parse :"+mobile);
  console.log(typeof(mobile));

  mobile=parseInt(mobile);
  // Debug mobile number entered after parse
  console.log(typeof(mobile));
 
 
  let password = document.getElementById("txtPassword").value;
//   console.log(userName,"\n",password);

if(isNaN(mobile) || mobile.toString().length !== 10){
  alert("Please Enter valid mobile number");
}
// else if(mobile.length!==10){
//   alert("Please enter valid mobile number");
// }
// else if(password.length<8){
//   alert("Please enter valid paasword , minimum 8 characters required");
// }
else{
  let userData={
    userName:userName,
    password:password,
    mobile:mobile,
}


// console.log(userData);
let users=[...getUsersData,userData];
// users.push(userData);

localStorage.setItem("usersData",JSON.stringify(users));

alert("Signed in Successully");
window.location.href="login.html";
}

}

