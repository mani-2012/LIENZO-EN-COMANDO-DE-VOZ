var silla=window.webkitSpeechRecognition;
var caja=new silla();
dibujo=0;
function sonido(){
    document.getElementById("mini").innerHTML="COMANDO DE VOZ ACTIVADO. DI: cuadrado, círculo o rectángulo.";
    caja.start();
}
caja.onresult=function(respuesta){
console.log(respuesta);
document.getElementById("mini").innerHTML=respuesta.results[0][0].transcript;
dibujo=0;
}
function setup(){
    cuadro=createCanvas(370,370);
    cuadro.position(370, 230);
}
function draw(){
    fill("hotpink");
    X=Math.floor(Math.random()*330);
    Y=Math.floor(Math.random()*330);
    if (dibujo==0){
        if (document.getElementById("mini").innerHTML=='círculo') {

            circle(X,Y,50);
            
        }

        if (document.getElementById("mini").innerHTML=='cuadrado') {
            rect(X,Y,50,50);
        }
        if (document.getElementById("mini").innerHTML=='rectángulo') {
            rect(X,Y,70,50);
        }
        dibujo=1;
    }
}