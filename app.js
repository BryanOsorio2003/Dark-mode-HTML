const cambiarInterruptor = document.getElementById("toggleOff"),
    swith = document.querySelector(".btn-primary");
    body = document.querySelector("body")

function cambiarImagenes(){
    if(cambiarInterruptor.src.match("../image/off.png")){
        cambiarInterruptor.src =  "../image/ON.png";
        if(cambiarInterruptor.src.match("../image/ON.png")){
            body.style.backgroundColor = "black";
        }
        
        //body.style.backgroudColor = "red";
    }else{
        cambiarInterruptor.src = "../image/off.png";
        if(cambiarInterruptor.src.match("../image/off.png")){
            body.style.backgroundColor = "white";
        }
    }
}
swith.addEventListener("click",cambiarImagenes)
