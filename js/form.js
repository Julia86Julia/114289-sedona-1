var link = document.querySelector(".interest-search");
var search = document.querySelector(".search");
var form = search.querySelector("form");

link.addEventListener("click", function(event){
  event.preventDefault();
  search.classList.toggle("show");
  date.focus();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (search.classList.contains("show")) {
      search.classList.remove("show");
    }
  }
});
