var link = document.querySelectorAll(".goods-item .btn, .goods-item-buy");
  var popup = document.querySelector(".modal-content-order");
  var close = popup.querySelector(".modal-content-close");

var link2 = document.querySelector(".info-contacts .btn");
  var popup2 = document.querySelector(".modal-content");
  var close2 = popup2.querySelector(".modal-content-close");

  for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    }); }

  link2.addEventListener("click", function(event) {
    event.preventDefault();
    popup2.classList.add("modal-content-show");
  });

  close2.addEventListener("click", function(event) {
    event.preventDefault();
    popup2.classList.remove("modal-content-show");
  });
