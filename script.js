let i = document.getElementById("btn-cel");
let i2 = document.getElementById("btn-cel2");
let i3 = document.getElementById("btn-cel3");
let i4 = document.getElementById("btn-cel4");
let lista_ul = document.getElementById("lista_ul");
let x;
let cart = [];
let car_html = document.getElementsByClassName("cart__div")[0];
function Shopping_cart() {
   car_html.style.display = "block";
   lista_ul.innerHTML = "";
   cart.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product;
      lista_ul.appendChild(li);
   });
}

car_html.addEventListener("click", () => {
   alert("cerrando")
   car_html.style.display = "none";
});

i.addEventListener("click", () => {
  alert(i.value);
  x = i.value;
  cart.push(x)
  Shopping_cart();
  console.log(cart);
});

i2.addEventListener("click", () => {
  alert(i2.value);
  x = i2.value;
  cart.push(x)
  Shopping_cart();
  console.log(cart);
});

i3.addEventListener("click", () => {
  alert(i3.value);
  x = i3.value;
  Shopping_cart();
  cart.push(x)
  console.log(cart);
});

i4.addEventListener("click", () => {
  Shopping_cart();
  x = i4.value;
  cart.push(x)
  console.log(cart);
});