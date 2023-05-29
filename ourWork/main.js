let lis = document.querySelectorAll("ul li");
let imgs = Array.from(document.querySelectorAll(".gallery img"));

lis.forEach((li) => {
  li.addEventListener("click", removeAcitv);
  li.addEventListener("click", mangeImgs);
});
// remove active class
function removeAcitv() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function mangeImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
