const testimonials = [
  {
    name: "- Emily Watson",
    photoUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=761",
    text: "I recently purchased a mobile and laptop from apple and I am beyond impressed with the quality of their products. The sleek design and top-notch performance exceeded my expectations. I highly recommend apple for anyone in need of reliable technology.",
  },
  {
    name: "- Sophia Reynolds",
    photoUrl:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    text: "apple offers a wide range of innovative mobiles, tablets, and laptops that exceed expectations. Their products are sleek, reliable, and cutting-edge, making them a leader in the tech industry. I am thrilled with my recent purchase and highly recommend apple to anyone looking for quality tech gadgets.",
  },
  {
    name: "- Emily Johnson",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    text: "I have been a loyal customer of apple for several years now, and I must say their mobiles, tablets, and laptops are top-notch. The sleek design and advanced technology of their products always impress me. I highly recommend apple for anyone looking for quality electronics.",
  },
  {
    name: "- Emily Watson",
    photoUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
    text: "I am thrilled with the quality and performance of the devices from apple. The mobiles, tablets, and laptops are exceptional in every aspect. I highly recommend apple for anyone looking for top-notch technology products.",
  },
  {
    name: "- Samantha Roberts",
    photoUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    text: "I am extremely satisfied with the products offered by apple. Their mobiles, tablets, and laptops are top-notch in terms of quality and performance. I highly recommend apple for anyone looking for reliable electronic devices.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

  // Hide current content
  imgEl.classList.remove("show");
  textEl.classList.remove("show");
  userEl.classList.remove("show");

  setTimeout(() => {
    imgEl.src = photoUrl;
    textEl.innerText = text;
    userEl.innerText = name;

    // Fade in new content
    imgEl.classList.add("show");
    textEl.classList.add("show");
    userEl.classList.add("show");
  }, 1000);

  idx++;
  if (idx === testimonials.length) idx = 0;

  setTimeout(updateTestimonial, 10000);
}
