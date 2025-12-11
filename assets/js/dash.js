let logOutBtn = document.getElementById("logOutBtn");

if(localStorage.getItem("loginSuccess")){

    Swal.fire({
        title:"Login Successfully !!!",
        icon: "success",
        timer : 2000
    })

    localStorage.removeItem("loginSuccess")
}

if(!localStorage.getItem("token")){
    window.location.href = "index.html"
}

const onlogoutEvent = () =>{
    localStorage.removeItem("token")
    localStorage.removeItem("userRole")
    window.location.href = "index.html"
}


logOutBtn.addEventListener("click", onlogoutEvent);

