const box=document.getElementById("box");
const red_button=document.getElementById("red");
red_button.onclick=function(){
    box.style.backgroundColor="red";
}

const black_button=document.getElementById("black");
black_button.onclick=function(){
    box.style.backgroundColor="black";
}

const pink_button=document.getElementById("pink");
pink_button.onclick=function(){
    box.style.backgroundColor="pink";
}

const orange_button=document.getElementById("orange");
orange_button.onclick=function(){
    box.style.backgroundColor="orange";
}
const p=document.getElementById("p");
const text=document.getElementById("Click");
text.onclick=function(){
    p.innerHTML="I am Banglore campus student.";
    p.style.color="red";
}
