const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

const updateBody = () => {
    if (inputEl.checked) {
        bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "white";
    }
}
updateBody();

inputEl.addEventListener("input" , () => {
    updateBody();
})

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}