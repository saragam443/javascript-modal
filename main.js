const openBtn = document.getElementById("btn")
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("close-btn")

openBtn.addEventListener("click", () => {
    modal.classList.add("modal-visible")
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("modal-visible")
})