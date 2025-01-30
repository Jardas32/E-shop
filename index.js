// import product from "./product.js"

// const product = {
//     'Пожарная служба': [
//         ['Номер 1', '101'],
//         ['Номер 2', '112'],
//         ['Номер 3', '01'],
// ],
//     'Полиция': [
//         ['Номер 1', '102'],
//         ['Номер 2', '112'],
// ],
//     'Скорая помощь': [
//         ['Номер 1', '103'],
// ]
// };
    
// document.querySelector('.content').innerHTML = `<div class="box">
//              <img class="img1" width="200" src="./img/${item.img}" alt="${item.title}">
//              <h2 class="h2title">${item.title}<h2/>
//              <p class="pprice">${item.price} $<p/>
//              <div/`

const product = [
        {
            id: 1,   
            text: `E-shop`,
            img: `macbook.png`,
            title: `MacBook`,
            price: 1699, 
            sale: 1299,
            button: '+',
        },
        {
            id: 2,
            img: `apple-watch.jpg`,
            title: `Apple Watch`,
            text: `No`,
            price: 319, 
            sale: 279,
            button: '+',
        },
        {
            id: 3,
            img: `mac-pro.jpg`,
            title: `Mac Pro`,
            text: `Sklad`,
            price: 2260, 
            sale: 1899,
            button: '+',
        },
        {
            id: 4,
            img: `ipad.png`,
            title: `iPad`,
            text: `E-shop`,
            price: 779, 
            sale: 540,
            button: '+',
        },
        {
            id: 5,
            img: `iphone.webp`,
            title: `iPhone 15 Pro Max`,
            text: `Sklad`,
            price: 1222,
            sale: 959,
            button: '+', 
        },
        {
            id: 6,
            img: `airpods2.jpg`,
            title: `Apple AirPods`,
            text: `No`,
            price: 499,
            sale: 290,
            button: '+', 
},
];


// let title = product[0].title;
// let price = product[0].price;

// console.log(product[0].title);
// console.log(product[0].price)

// let newproduct = product.reduce((prevalue, number) => {
//     let price = product[0].price;
//      return price + number

// },0);

// console.log(newproduct);

// product.forEach(function (item) {
//         if(item.price >= 100) {
//        let row = document.createElement('div')
//        row.innerHTML = `
//              <div class="box">
//              <img class="img1" width="150" height="100" src="./img/${item.img}" alt="${item.title}">
//              <h2 class="h2title">${item.title}<h2/>
//              <p class="pprice">${item.price} $<p/>
//              <p class="psale">${item.sale} $<p/>
//              <button class="btcart">${item.button}</button>
//              <div/>`
//         document.querySelector('.content').appendChild(row)
//         }
// });
//        console.log(product)


// document.querySelector('.content').innerHTML = `<table class="phone"></table>`

//  for(key in product) {
//         let row = document.createElement('tr')
//         row.innerHTML = `<td colspan="2">${key}</td>`
//         document.querySelector('.phone').appendChild(row)
//         for(let i = 0; i<product[key].length; i++) {
//             let row = document.createElement('tr')
//             row.innerHTML = `
//                 <td>${product[key][i][0]}</td>
//                 <td>${product[key][i][1]}</td>
//             `
//             document.querySelector('.phone').appendChild(row)
//         }
//  };


            //    forEach
                
              
// product.forEach(function (item) {

//       if (item.price > 500) {
//          console.log(product)
//       }

// });
    // console.log(product)
 
            //   Find

// const newCart =  product.find(function (item) {
    
//    if (item.price === 190) {
//     return true
//    }
// });
//       console.log(newCart)
    
        //    FindIndex
      
// const newCart =  product.findIndex(function (item) {
    
//      if (item.id === 5) {
//         return true
//      }
       
// });
//       console.log(newCart)
//       console.log(product)
     

            //  Filter


            
// const morfifti = product.filter(function (item) {

//       if (item.price >= 100) {
//         let row = document.createElement('div')
//         row.innerHTML = `
//          <div class="box"> 
//          <p class="ptext">${item.text}<p/>
//          <img class="img1" width="150" height="100" src="./img/${item.img}" alt="${item.title}">
//          <h2 class="h2title">${item.title}<h2/>
//          <p class="pprice">${item.price} $<p/>
//          <div class="salebg"> <p class="psale">${item.sale} $<p/> <div/> 
//          <button class="btcart">${item.button}</button>
//          <div/>`
//       document.body.querySelector(`.content`).appendChild(row);
//     }
      
// });
//    


                      // Магазин
                    // Темная тема

const bground = document.querySelector(`.bground`);
const spbg = document.querySelector(`.spbg`);
const content = document.querySelector(`.content`);
const korzbg = document.querySelector(`.korzbg`);
const totalpric = document.querySelector(`.totalprice`);
const darkborders = document.querySelector(`.divbuy`);
const div3 = document.querySelector(`.div3`);
const div4 = document.querySelector(`.div4`);
const center = document.querySelector(`.center`);
const centergrid = document.querySelector(`.centergrid`);
              
            /* Переключение колонок рядов */

function columGrids() {
  const columgrid = localStorage.getItem(`columsthree`) == `true`;
  
  localStorage.setItem(`columsthree`, !columgrid);
  center.classList.toggle(`centergrid`);

};

document.addEventListener(`click`, event => {
    if(event.target.classList.contains(`div4`)) {
      columGrids();
    }
});

document.addEventListener(`click`, event => {
  if(event.target.classList.contains(`div3`)) {
    columGrids();
  }
});

document.addEventListener(`DOMContentLoaded`, loaDs());

function loaDs() {
   center.classList.toggle(`centergrid`, localStorage.getItem(`columsthree`) == `true`);
};


               /* Переключение колонок рядов */

function darkmod() {
    const content = document.body.querySelector(`.content`);
    const wasDarkmod = localStorage.getItem(`darkmod`) == `true`;
    const spbg = document.querySelector(`.spbg`);
    const skyblue = localStorage.getItem(`bgskyblue`) == `true`;
    const korzbg = document.querySelector(`.korzbg`);
    const korzdark = localStorage.getItem(`darkkorz`) == `true`;
    const totalpric = document.querySelector(`.totalprice`);
    const darktotal = localStorage.getItem(`darksmod`) == `true`;
    const darkborders = document.querySelector(`.divbuy`);
    const darkdiv = localStorage.getItem(`darkd`) == `true`;
    const bgdark = localStorage.getItem(`darkbg`) == `true`;
    

    localStorage.setItem(`darkbg`, !bgdark);
    bground.classList.toggle(`bgroundbila`, !bgdark);
    localStorage.setItem(`darkd`, !darkdiv);
    darkborders.classList.toggle(`darkborder`, !darkdiv);
    localStorage.setItem(`darksmod`, !darktotal);
    totalpric.classList.toggle(`totaldark`, !darktotal);
    localStorage.setItem(`darkkorz`, !korzdark);
    korzbg.classList.toggle(`korzblack`, !korzdark);
    localStorage.setItem(`bgskyblue`, !skyblue);
    spbg.classList.toggle(`spskyblue`, !skyblue);
    localStorage.setItem(`darkmod`, !wasDarkmod); 
    content.classList.toggle(`darkmod`, !wasDarkmod);
};

bground.addEventListener(`click`, function() {
    darkmod();
});

document.addEventListener(`DOMContentLoaded`, onLoad());

function onLoad() {
    content.classList.toggle(`darkmod`, localStorage.getItem(`darkmod`) == `true`);
    spbg.classList.toggle(`spskyblue`, localStorage.getItem(`bgskyblue`) == `true`);
    korzbg.classList.toggle(`korzblack`, localStorage.getItem(`darkkorz`) == `true`);
    totalpric.classList.toggle(`totaldark`, localStorage.getItem(`darksmod`) == `true`);
    darkborders.classList.toggle(`darkborder`, localStorage.getItem(`darkd`) == `true`);
    bground.classList.toggle(`bgroundbila`, localStorage.getItem(`darkbg`) == `true`);
};
      
                  // Openkorz

function openKorz() {
  const korzbg = document.querySelector(`.korzbg`);
  const korzopen = localStorage.getItem(`openkorz`) == `true`;

  localStorage.setItem(`openkorz`, !korzopen)
  korzbg.classList.toggle(`korzopen`, !korzopen)

};

function closedkorz() {
  const korzclosed = localStorage.getItem(`closedkorz`) == `true`;
   
  localStorage.setItem(`closedkorz`, !korzclosed);
  korzbg.classList.toggle(`korzclosed`);
}

document.body.addEventListener(`click`, event => {
       
      if (event.target.classList.contains(`content`)) {
         closedkorz();
      }

});

document.addEventListener(`DOMContentLoaded`, loasKorz());

function loasKorz() {
  korzbg.classList.toggle(`korzclosed`, localStorage.getItem(`closedkorz`) == `true`)
}


document.body.addEventListener(`click`, event => {

      if(event.target.classList.contains(`korzinaimg`)) {
           openKorz();
      }
});

document.addEventListener(`DOMContentLoaded`, loadPage());

function loadPage() {
   korzbg.classList.toggle(`korzopen`, localStorage.getItem(`openkorz`) == `true`)
     
};


                  // Закритие корзины

function ClosedKorz() {
  const closed = localStorage.getItem(`closedKorz`) == `true`;

  localStorage.setItem(`closedKorz`, !closed) == `true`;
  korzbg.classList.toggle(`klosed`);

};

document.addEventListener(`DOMContentLoaded`, Loadspag());

function Loadspag() {
  korzbg.classList.toggle(`klosed`, localStorage.getItem(`closedKorz`) == `true`);
}

document.addEventListener(`click`, event => {
       
    if (!event.target.classList.contains(`korzinaimg`) && korzbg.classList.toggle(`korzopen`, localStorage.getItem(`openkorz`) == `true`)) {
         korzbg.classList.remove(`korzopen`)
    }

});


                // Корзина получение карточки


const cardset = document.querySelectorAll(`.card`);
const bt = document.querySelector(`.btcart`);
const inputcount = document.querySelector(`.spcount`);
const cartStoreg = JSON.parse(localStorage.getItem(`carts`)) || [];
const totalprice = document.querySelector(`.totalprice`);

cardset.forEach((el) => {
  const ptext = el.childNodes[1].innerText;
  const img1 = el.childNodes[3].attributes[0].textContent;
  const ph2title = el.childNodes[5].innerText;
  const pprice = el.childNodes[7].innerText;
  const sale = el.childNodes[9].childNodes[1].textContent;
  const bt = el.childNodes[13];
  const id = el.id;

  let number = parseInt(sale.replace(/\s/g, ""), 10);

bt.addEventListener(`click`, () => {

    const cartStoreg = localStorage.getItem(`carts`) || "[]";
    const carts = JSON.parse(cartStoreg);

    const card = { ptext, img1, ph2title, pprice, number, id, quantity: 1 };

    const existingCardIndex = carts.findIndex((item) => item.id === id);

    if (existingCardIndex !== -1) {
      // Увеличиваем количество
      carts[existingCardIndex].quantity++;
      carts[existingCardIndex].number += number;
    } else {
      // Добавляем новую карточку
      carts.push(card);
    }

    localStorage.setItem(`carts`, JSON.stringify(carts));
    location.reload();
  });
});

const divclosed = document.querySelector(`.divclosed`);
const korztitle = document.querySelector(`.korztitle`);
const korz = document.querySelector(`.korz`);
const storege = JSON.parse(localStorage.getItem(`carts`)) || [];
const buttonbuy = document.querySelector(`.btbuy`);
const btbuy = document.querySelector(`.btbuy`);
const divbuy = document.querySelector(`.divbuy`);

if (storege.length <= 0) {
    korztitle.innerHTML = `Your cart is empty`;
    buttonbuy.style.backgroundColor = ` rgba(121, 2, 2, 0.33)`;
    buttonbuy.style.cursor = `none`;
    buttonbuy.style.color = `rgb(255, 255, 255, 0.33)`
    totalprice.style.display = `none`
    
};

function renderCart() {
     korz.innerHTML = ``;
     let totalAmount = 0;
     let totalItems = 0;
if (storege) {
    storege.forEach((el, index) => {
      const { ptext, img1, ph2title, pprice, number, id, quantity } = el;

      totalAmount += number;
      totalItems += quantity;
      
      const newCard = document.createElement(`div`);
      newCard.setAttribute(`class`, `newcard`);
      newCard.innerHTML = `
        <div class="cart" id="${id}">  
          <img src="${img1}" class="cartimg1">
          <p class="carttext">${ptext}</p>
          <p class="carttitle">${ph2title}</p>
          <p class="cartprice">${pprice}</p>
          <div class="salebg">
            <p class="sale">${number} $</p>
          </div>
          <button class="btclosed" card-count="${index}">
            <span class="spa spa1"></span>
            <span class="spa spa2"></span>
          </button>
          <div class="divcounters">
            <button class="btminus" data-count="${id}">-</button>
            <input class="inputcounts" type="text" value="${quantity}" readonly>
            <button class="btplus" data-count="${id}">+</button>
          </div>
        </div>`;
  korz.appendChild(newCard);
  
});
};

inputcount.value = totalItems;
totalprice.innerHTML = `Total: ${totalAmount} $`;
};
renderCart();

document.body.addEventListener(`click`, (event) => {
  const carts = JSON.parse(localStorage.getItem(`carts`)) || [];
  if (event.target.classList.contains(`btplus`)) {
    const id = event.target.dataset.count;
    const itemIndex = carts.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      carts[itemIndex].quantity++;
      carts[itemIndex].number += parseInt(carts[itemIndex].number);
      localStorage.setItem(`carts`, JSON.stringify(carts));
      renderCart();
      location.reload();
    }
  }

  if (event.target.classList.contains(`btminus`)) {
    const id = event.target.dataset.count;
    const itemIndex = carts.findIndex((item) => item.id === id);

    if (itemIndex !== -1 && carts[itemIndex].quantity > 1) {
      carts[itemIndex].quantity--;
      carts[itemIndex].number -= parseInt(carts[itemIndex].number / (carts[itemIndex].quantity + 1));
      localStorage.setItem(`carts`, JSON.stringify(carts));
      renderCart();
      location.reload();
    }
     
  }
});

                //  Удаление товара

const btclosed = document.querySelector(`.divclosed`);

document.onclick = (event) => {
    const cardPosition = event.target.getAttribute("card-count");
       
    if (event.target.classList.contains(`btclosed`) && cardPosition !== null) {
      storege.splice(cardPosition, 1);
      
      localStorage.setItem(`carts`, JSON.stringify(storege));
      location.reload();
      renderCart();
     
    }
};
 
                  // Открытие корзины

const btopen = document.querySelector(`.korzina`);

btopen.addEventListener(`click`, function() {
  korzbg.classList.add(`active`);

});

btclosed.addEventListener(`click`, function() {
  korzbg.classList.remove(`active`);
});

               //  Pop-up  open

const popbg = document.querySelector(`.popbg`);
const closedpopup = document.querySelector(`.closedpopup`);
// const btbuy = document.querySelector(`.btbuy`);
const inpsub = document.querySelector(`.inpsub`);

document.body.addEventListener(`click`, (event) => {

   if(event.target.classList.contains(`btbuy`)) {
      popbg.classList.add(`active`)
   };

});

closedpopup.addEventListener(`click`, function() {

     popbg.classList.remove(`active`)

});

                    // Фильтрация товаров

const filterCard = document.querySelectorAll(`.card`);
const navBox = document.querySelectorAll(` nav ul li`);

const filterProducts = filterClass => {
    navBox.forEach(item => item.classList.remove(`active`));
    const active = document.querySelector(`[data-f="${filterClass}"]`);
    if(active) active.classList.add(`active`);


    filterCard.forEach(item => {
      item.classList.remove(`hide`);
      if(!item.classList.contains(filterClass) && filterClass !== `all`) {
         item.classList.add(`hide`);
      }
    })
}

document.querySelector(`nav`).addEventListener(`click`, event => {
    if(event.target.tagName !== `LI`) return;
       
    const filterClass = event.target.dataset[`f`];
    filterProducts(filterClass);
    window.location.hash = event.target.dataset[`f`];
});

if (window.location.hash) {
    filterProducts(window.location.hash.slice(1));
}


            // Map

// const newPrice = product.map(function (item) {

//        const newItem = {
//         id: item.id,
//         img: item.img,
//         price: item.price,
//         title: item.title,
//         sleva: item.price - 20,
//        }

//         return newItem
// })

// console.log(newPrice);

                //   Map Rander

// const productHtml = product.map(function (item) {
//    const Htmlproduct = `
//         <div class="box">
//         <img class="img1" width="200" src="./img/${item.img}" alt="${item.title}">
//         <h2 class="h2title">${item.title}<h2/>
//         <p class="pprice">${item.price} $<p/>
//         <div/>`
//          return Htmlproduct;
// });

//  document.body.insertAdjacentHTML(`beforeend`, productHtml.join(``));

                //    Reduce

//  const totalPrice = product.reduce(function(prev, item) {

//        return prev + item.price;
// }, 0);

// console.log(totalPrice);


                //  Поисковик

// window.onload = () => {
//     let input = document.querySelector('.input');


// input.oninput = function() {
      
//    let value = this.value.trim();
//    let list = document.querySelectorAll('.ul li');
   
//    if (value) {
//        list.forEach(elem => {
//       if (elem.innerText.search(value) == -1) {
//         elem.classList.add('heen');
//       }
//        });
//    } 
//    else {
//       list.forEach(elem => {
//        elem.classList.remove('heen')

//       });
//    }
// };
// };

                          // localStorage 

// let arr = 
// [
//   {
//     name:`Alwx`,
//     age: 20,
//   },
//   {
//     name:`Nik`,
//     age: 15
//   },
//   {
//     name:`Oleg`,
//     age: 22
//   },
//   {
//     name:`Max`,
//     age: 19
//   },
// ];
 
// localStorage.setItem(`array`, JSON.stringify(arr));

// let storarr = localStorage.getItem(`array`);

// console.log(storarr);


