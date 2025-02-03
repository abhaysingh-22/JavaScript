var main = document.getElementById("main");
let arr = 
["https://i.pinimg.com/enabled_lo_mid/236x/38/61/6f/38616f4a0f45ba196a176620cd564e87.jpg",
"https://i.pinimg.com/enabled_lo_mid/236x/ad/65/b6/ad65b669746561313925ffff392518bc.jpg",
"https://i.pinimg.com/236x/d0/b5/64/d0b564d5585914faac0abe13bfda98c0.jpg",
"https://i.pinimg.com/enabled_lo_mid/474x/de/72/f4/de72f432da69bc9bc6b32ffda412d79e.jpg",
"https://i.pinimg.com/enabled_lo_mid/736x/1d/85/c2/1d85c2c8f52440ad0d4077a0ff0c85c8.jpg",
"https://i.pinimg.com/enabled_lo_mid/236x/fe/e8/fd/fee8fdd14a4b098ed11499155b374da5.jpg",
"https://i.pinimg.com/enabled_lo_mid/736x/4c/a0/57/4ca057215fc1e2c9950b36797603e0a8.jpg",]

let s = "";
for(i=1;i<=55;i++){                       //by this we can print 10times
    let r = Math.floor(Math.random()*6);  //jis number ko * mai likhe ge usse ek number chote tk aaye ga 
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;         

