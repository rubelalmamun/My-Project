const monthEl = document.querySelector(".month-name");
const dayEl = document.querySelector(".day-name");
const dateEl = document.querySelector(".date-num");
const yearEl = document.querySelector(".year-name");

const date = new Date();

monthEl.innerText = date.toLocaleString("en", { month: "long" });
dayEl.innerText = date.toLocaleString("en", { weekday: "long" });
dateEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
