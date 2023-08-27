const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");

function showBuyTickets() {
  modal.classList.add("open");
}

function hideBuyTickets() {
  modal.classList.remove("open");
}

buyBtns.forEach((elementBtn) => {
  elementBtn.addEventListener("click", showBuyTickets);
});

closeModal.addEventListener("click", hideBuyTickets);
