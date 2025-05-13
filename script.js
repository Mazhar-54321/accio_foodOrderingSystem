
let order = []
document.addEventListener("DOMContentLoaded", function () {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            getMenu(data);
        })

})
function getMenu(data = []) {
    order = data;
    var itemContainer = document.querySelector(".items-list");
    data.forEach((el) => {
        /*<div class="item">
            <img class="item-img" src="./icon-image.png"/>
            <div class="item-price">
              <span >Burger</span>
              <span >$5,99/-</span>
            </div>
            <button class="plus-button">+</button>
          </div> */
        var itemDiv = document.createElement("div");
        itemDiv.className = "item";
        var itemImg = document.createElement("img");
        itemImg.className = "item-img";
        itemImg.src = el.imgSrc;
        itemDiv.appendChild(itemImg);
        var itemPrice = document.createElement("div");
        itemPrice.className = "item-price";
        var span1 = document.createElement("span");
        span1.innerText = el.name
        var span2 = document.createElement("span");
        span2.innerText = el.price;
        itemPrice.appendChild(span1)
        itemPrice.appendChild(span2);
        itemDiv.appendChild(itemPrice);
        var button = document.createElement("button");
        button.className = "plus-button";
        button.innerText = "+";
        itemDiv.appendChild(button);
        itemContainer.appendChild(itemDiv)
    })
    takeOrder().then((res) => {
        console.log(`You have selecetd following items:${res.map((el) => (el.name)).join(",")} and total price is${res.reduce((acc, curr) => acc += curr.price, 0).toFixed(2)} `);
        return orderPrep();
    }).then((res) => {
        console.log(res);
        return payOrder();
    }).then((res) => {
        console.log(res);
        return thankyouFnc();
    }).then((res) => {
        //console.log(res)
    }).catch(err=>{
        console.log('Error placing order')
    })
}
function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let r1 = Math.floor(Math.random() * order.length - 1),
                r2 = Math.floor(Math.random() * order.length - 1),
                r3 = Math.floor(Math.random() * order.length - 1);
            let randomBurgers = [order[r1], order[r2], order[r3]]
            resolve(randomBurgers)
        }, 2500)
    })
}
function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order is being processed")
        }, 1500)
    })
}
function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order has been paid")
        }, 1000)
    })
}
function thankyouFnc() {
    alert("Thank you for placing an order!")
}