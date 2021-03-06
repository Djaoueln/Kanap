import { Cart } from './localStorageCart.js'

//Récupération de l'id depuis l'url
let str = window.location.href;
let url = new URL(str);
let search_params = new URLSearchParams(url.search); 
if(search_params.has('id')) {
  let id = search_params.get('id');
  fetch (`http://localhost:3000/api/products/${id}`)
  .then((response) => response.json())
  .then((resp) => addProducts(resp))
}


  


// Affichage du produit
function addProducts(kanap)
{  
  const {imageUrl, altTxt, colors} = kanap;
   setImage(imageUrl, altTxt);
   setInfo (kanap);
   setColors (colors);
}


function setImage(imageUrl, altTxt)
{
 const img = document.createElement("img");
 img.src = imageUrl
 img.alt = altTxt
 document.getElementsByClassName("item__img")[0].appendChild(img);
}

function setColors (colors)
{
  colors.forEach((color) => 
  {
    const option = document.createElement("option")
    const select = document.getElementById("colors");

    option.value = color
    option.textContent = color
    
    select.appendChild(option) 
  })
}

function setInfo (product)
{
   document.getElementById("title").innerText = product.name;
   document.getElementById("price").innerText = product.price + " ";
   document.getElementById("description").innerText = product.description;
}

addToCart.onclick = () => {
let myCart = new Cart()

const item = 
  {
    color: colors.value,
    quantity: Number(quantity.value),
    id: search_params.get('id'),      
  }
myCart.add(item)
console.log(myCart)
}






















// addToCart.onclick = () => {
//   const item = 
//   {
//     color: colors.value,
//     quantity: Number(quantity.value),
//     id: search_params.get('id'),      
//   }
// let productInLocalStorage = JSON.parse(localStorage.getItem(cart))
// if(productInLocalStorage)
// {
//   productInLocalStorage.push(item);
//   localStorage.setItem("cart", JSON.stringify(productInLocalStorage));
// }
// else
// {
//   productInLocalStorage = [];
//   productInLocalStorage.push(item);
//   localStorage.setItem("cart", JSON.stringify(productInLocalStorage));
// }

// }

