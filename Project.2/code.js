var s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100);   //it will generate the random numbers
    s1.innerHTML = `<h1>${r}</h1>`;    //if we will not do this type then we will get size difference 
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML = "<h1>1</h1>";
})
s1.addEventListener("dblclick",function(){      //nothing just rememebr the concept of doubleclick (dblclick)
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})





var s2 = document.getElementById("sq2");
let clr = "green";
s2.addEventListener("mouseenter",function(){
    if(clr=="green"){
        s2.style.backgroundColor = "green";
        clr = "red";
    }
    else if(clr=="red"){
        s2.style.backgroundColor = "red";
        clr = "blue";
    }
    else{
        s2.style.backgroundColor = "blue";
        clr = "green";
    }
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor = "white";
})





var s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;   
})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor = "white";
})






var s4 = document.getElementById("sq4");
s4.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    s2.style.backgroundColor = `rgb(${r3},${r1},${r2})`;
    s3.style.backgroundColor = `rgb(${r2},${r3},${r1})`;
})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
})