let userScore=0;
let comScore=0;

const imges=document.querySelectorAll(".img");

imges.forEach((img)=>{
    console.log(img);
    img.addEventListener("click",()=>{
        console.log("img was clicked");
    })
})
 