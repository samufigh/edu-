
function displace() {
    this.style.marginLeft == "400px" ? this.style.marginLeft = "20px" : this.style.marginLeft = "400px";
}


function sies() {
    alert("também te amo <3");  
}


document.getElementById("não").addEventListener("mouseover", displace) 


document.getElementById("sim").addEventListener("click", sies)

document.getElementById("sim").addEventListener("click", function(){
    notify()
});

// confirm click


function notify(){
    if (!("Notification" in window)) {
        alert("S");
    }else if(Notification.permission === "granted"){
        var notification = new Notification("Hola mi amor :3"); 
    }else if(Notification.permission !== "denied"){

        Notification.requestPermission(function(permission) { // 

            if(Notification.permission === "granted"){

                var notification = new Notification("me ama?")
            }
        });
    }
}