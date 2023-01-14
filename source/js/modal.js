var modal = document.getElementById("modal");
var orderButton = document.querySelector(".article__button");
var carts = document.querySelectorAll(".catalog-item__cart");

if (orderButton) {
  orderButton.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "flex";
  };
}

if (carts) {
  for (var i = 0; i < carts.length; ++i) {
    carts[i].onclick = function (event) {
      event.preventDefault();
      modal.style.display = "flex";
    };
  }
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
