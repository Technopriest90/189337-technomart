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

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-content-show")) {
        mapPopup.classList.remove("modal-content-show");
      }
    }
  });