let getUsersData=JSON.parse(localStorage.getItem("usersData")) || [];
// console.log(getUsersData);
let count=0;
function login(){
    let mobile=document.getElementById("txtMobile").value;
    let password=document.getElementById("txtPassword").value;
    // console.log(mobile,password);
    mobile=parseInt(mobile);
    if(isNaN(mobile) || mobile.toString().length !== 10){
        alert("Please Enter valid mobile number");
      }
      else{
    for(let i=0;i<getUsersData.length;i++){
        // console.log(getUsersData[i]);
        if(mobile==getUsersData[i].mobile)
        {
            if(password==getUsersData[i].password){
                alert("LogIn Successfull");
                window.location.href="loginSuccessful.html";
            }
            else{
                alert("Invalid Mobile Number or Password ");
            }
        }
        else{
            count++;
        }
    }

    if(count==getUsersData.length){
        alert("User is not Registered , Sign Up to continue");
        window.location.href="signUp.html"
    }
}
}