let logOutBtn = document.getElementById("logOutBtn");
let loder = document.getElementById("loder")

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
    loder.classList.remove("d-none")

    localStorage.removeItem("token")
    localStorage.removeItem("userRole")
    window.location.href = "index.html"
    loder.classList.add("d-none")
}


logOutBtn.addEventListener("click", onlogoutEvent);

