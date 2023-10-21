

const canvasN=document.getElementsByTagName("canvas")[0];
const canvasK=document.getElementsByTagName("canvas")[1];
const ctxN=canvasN.getContext("2d");
const ctxK=canvasK.getContext("2d");

ctxN.clearRect(0, 0, canvasN.width, canvasN.height);

const overlay = document.getElementById("overlay");
overlay.style.position = "absolute";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor="rgba(0,100,100,0.5)"
overlay.style.clipPath = "ellipse(46% 10% at 50% 47.5%)";
overlay.style.pointerEvents = "auto";

const teszt=new Image()
teszt.src="kep/goj.png"

var huz={
    huzva: false,
    mit: null
}



Array.from(document.getElementsByTagName("img")).forEach(element => {
    element.addEventListener("dragstart",function(e) {
        huz.huzva=true;
        huz.mit=this
        console.log(huz);
    })
});


// Array.from(document.getElementsByTagName("img")).forEach(element => {
//     element.addEventListener("dragend",function(e) {
//         if (huz.huzva) {
//             huz.huzva = false;
//             ctxN.drawImage(huz.mit, e.clientX, e.clientY, 60, 60);
//             huz.mit = null;
//         }
//     })
// });

overlay.addEventListener("mouseover", function(event) {
    console.log("aaa");
    if (huz.huzva) {
        huz.huzva = false;
        ctxN.drawImage(huz.mit, event.offsetX, event.offsetY, 60, 60);
        huz.mit = null;
    }
});

document.addEventListener("mouseover",e=>{
    //ezt idk hogy lehetne effektivebben ez egy szar
    huz.huzva=false;
    huz.mit=null;
    console.log("Out");
})

function randomGen() {
    let disz=new Image()
    disz.src=document.getElementsByTagName("img")[rand(2)].src
    document.getElementById("kicsi").appendChild(disz)
}

randomGen()

function rand(szam) {
    return Math.floor(Math.random()*szam)
}
