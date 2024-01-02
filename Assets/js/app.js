const burgerBtn = document.getElementById("hamburger");
const burgerContent = document.querySelectorAll(".main-list li");

burgerBtn.addEventListener("click", () => {
  burgerContent.forEach((li) => {
    li.classList.toggle("burger-content");
  });
});
