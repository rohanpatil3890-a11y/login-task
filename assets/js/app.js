const cl = console.log;

const LoginForm = document.getElementById("LoginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const LoginsubmitBtn = document.getElementById("LoginsubmitBtn");


const SignUpEmail = document.getElementById("SignUpEmail");
const SignUpPassword = document.getElementById("SignUpPassword");
const UserRole = document.getElementById("UserRole");
const SignUpForm = document.getElementById("SignUpForm");
const SignupsubmitBtn =document.getElementById("SignupsubmitBtn")

const loder = document.getElementById("loder");


function snackbar(title, icon) {
    Swal.fire({
        title,
        icon,
        timer: 2000
    })
}


const AUTH_URL = "https://auth-git-main-iamrkjs-projects.vercel.app";

const LOGIN_URL = `${AUTH_URL}/api/auth/login`;

const SIGNUP_URL = `${AUTH_URL}/api/auth/register`;




// genric function

async function makeApiCall(ApiUrl,method,body){
     
    loder.classList.remove("d-none")

    try{

         body = body ? JSON.stringify(body) : null;

        let obj  ={
              method : method,
              body : body,
              headers : {
                "Content-Type" : "application/json"
              }
        }

        let res = await fetch(ApiUrl,obj);
        let data = await res.json();
        cl(data)

        if(!res.ok){

            let err = data.error | data.message | res.statusText | "Something Went Wrong !!!"
            throw new Error(err)
        }
        return data

    }
    finally{
     loder.classList.add("d-none")
    }
}


const onSignUpEvent = async(eve) =>{
    eve.preventDefault()
    try{

        let OBJ = {
            email : SignUpEmail.value,
            password : SignUpPassword.value,
            userRole : UserRole.value
        }
        let data = await makeApiCall(SIGNUP_URL,"POST",OBJ);
       snackbar(data.message, "success")
       SignUpForm.reset()

    }
    catch(err){
        snackbar(err, "error")
    }
}


const onloginEvent = async(eve) =>{
   eve.preventDefault()

    try{

        let OBJ = {
            email : loginEmail.value,
            password : loginPassword.value
        }

        let data = makeApiCall(LOGIN_URL, "POST",OBJ);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userRole", data.userRole);
        localStorage.setItem("loginSuccess", true);
        snackbar(data.message, "success");
        window.location.href = "dashboard.html";
        LoginForm.reset()

    }
    catch(err){
        snackbar(err, "error")
    }
}


SignUpForm.addEventListener("submit", onSignUpEvent);
LoginForm.addEventListener("submit", onloginEvent);



