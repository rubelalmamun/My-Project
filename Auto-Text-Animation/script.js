const containerEl = document.querySelector(".container");

const careers = [
  "Youtuber",
  "Web Developer",
  "Designer",
  "Blogger",
  "Instructor",
  "Engineer",
];

const colors = ["#e74c3c", "#3498db", "#f39c12", "#9b59b6", "#27ae60"];

let careerIndex = 0;

let characterIndex = 0;

function updateText() {
  const firstChar = careers[careerIndex].slice(0, 1).toLowerCase();

  const anOra = ["a", "e", "i", "o", "u"].includes(firstChar) ? "an" : "a";
  containerEl.innerHTML = `
 <h1 style = "color:${colors[careerIndex]}">I am ${anOra} ${careers[
    careerIndex
  ].slice(0, characterIndex)}.</h1>`;
  characterIndex++;

  if (characterIndex > careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex >= careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 300);
}
updateText();
