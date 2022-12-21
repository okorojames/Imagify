const btn = document.querySelectorAll(".gallery-btn");
btn.forEach((button) => {
  button.addEventListener("click", function () {
    btn.forEach((btn2) => {
      btn2.classList.remove("gallery-btn-active");
    });
    button.classList.add("gallery-btn-active");
  });
});
