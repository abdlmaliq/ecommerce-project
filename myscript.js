const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
let mainimg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img")

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

for(let x=0; x<=3; x++){
    smallimg[x].onclick = () =>(
        mainimg.src = smallimg[x].src
    )
}