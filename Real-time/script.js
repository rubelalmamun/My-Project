const textareaEl = document.getElementById("textarea");
const totalCharacterEl = document.querySelector(".total-character");
const remainingCharacterEl = document.querySelector(".Remaining-character");

textareaEl.addEventListener("input", updateCounter);

updateCounter();

function updateCounter() {
  totalCharacterEl.innerText = textareaEl.value.length;
  remainingCharacterEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
