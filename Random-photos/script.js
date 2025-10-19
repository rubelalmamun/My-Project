const imgContainer = document.querySelector(".img-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  for (let i = 0; i < 20; i++) {
    const randomNum = Math.floor(Math.random() * 2000);
    const img = document.createElement("img");
    img.src = `https://picsum.photos/200/300?random=${randomNum}`;
    imgContainer.appendChild(img);
  }
});
