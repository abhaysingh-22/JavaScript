
// var x = document.querySelector("h2");
// x.style.color = "red";
// x.style.fontFamily = "Gill Sans"

// var y = document.querySelector("h1");
// y.style.backgroundColor = "red";

// setTimeout(function(){
//     y.innerHTML = "abhay"
// }, 2000);

// y.innerHTML = "abhay"   // changed the h1 part 

var x = document.getElementById("ele1");   //pikachu
x.addEventListener("click",function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
})

var x = document.getElementById("ele1");   //pikachu
x.addEventListener("mouseleave",function(){
    x.style.color = "black";
    x.style.backgroundColor = "white";
})


var y = document.getElementById("ele2");    //charizad
y.addEventListener("mousemove",function(){
    y.style.color = "blue";
    y.style.backgroundColor = "black";
})

var y = document.getElementById("ele2");    //charizad
y.addEventListener("mouseleave",function(){
    y.style.color = "black";
    y.style.backgroundColor = "white";
})


var z = document.getElementById("ele3");  //balbasor
y.addEventListener("click",function(){    // by this if we will click on charizad than changes will appear in balbasor
    z.style.color = "white"; 
    z.style.backgroundColor = "purple";
})

z.addEventListener("click",function(){   
    x.style.color = "white";
    x.style.backgroundColor = "green";
    setTimeout(function(){
        x.innerHTML = "abhay";
    },2000);
    setTimeout(function(){
        x.innerHTML = "Pikachu";
    },4000);
})









