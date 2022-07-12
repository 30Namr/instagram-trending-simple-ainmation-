const buttonEl = document.querySelector("button");

const modalEl = document.querySelector(".modal-container");

const openModal = () => {
    modalEl.classList.add("open");
};

const closeModal = (e) =>{
    if(e.target.classList.contains("open")) modalEl.classList.remove("open");
};

buttonEl.addEventListener("click",openModal);
window.addEventListener("click",closeModal);