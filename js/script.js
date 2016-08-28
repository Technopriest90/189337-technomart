var link = document.querySelectorAll(".goods-item .btn, .goods-item-buy");
var popup = document.querySelector(".modal-content-order");
var close = document.querySelectorAll(".modal-close");

var link2 = document.querySelector(".info-contacts .btn");
var popup2 = document.querySelector(".modal-content");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
  });
}

for (var i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup2.classList.remove("modal-content-show");
  });
}

link2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.add("modal-content-show");
});
