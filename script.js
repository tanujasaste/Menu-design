let text = document.querySelector("#text");
let options = document.getElementsByClassName("li");
let box = document.querySelector("#list");
let selectbox = document.querySelector("#selector");
let icon = document.querySelector("#icon")

selectbox.addEventListener("click",()=>{
    box.classList.toggle("hide");
    icon.classList.toggle("dropdown");
})

for (option of options) {
    option.onclick = function(){
        text.innerHTML = this.textContent;
        box.classList.toggle("hide");
        icon.classList.toggle("dropdown");
    }
}



