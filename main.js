console.log("JS up and running");

// start Final JS //
var stores = document.getElementsByClassName('inventory')[0].children;

var inventory = document.getElementsByClassName('inventory')[0];

var cart = document.getElementsByClassName('cart')[0];

var hs = {
    li: document.querySelector(".humphrySlocombe"),
    name: "Humphry Slocombe",
    // click: document.querySelector(".humphrySlocombe"),
    section: document.getElementsByClassName('inventory')[0].children[0],
    sectionClass: "hSPints",

    displayItems: function(){
        for (i=0; i < stores.length; i++){
            stores[i].className = "hidden";
    }
        hs.section.className= "hSPints";
}
};

var salt = {
    li: document.querySelector(".saltAndStraw"),
    name: "Salt and Straw",
    // click: document.querySelector(".saltAndStraw"),
    section: document.getElementsByClassName('inventory')[0].children[1],
    sectionClass: "saltPints",

    displayItems: function(){
        for (i=0; i < stores.length; i++){
            stores[i].className = "hidden";
    }
        salt.section.className= "saltPints";
}
};

var sm = {
    li: document.querySelector(".smitten"),
    name: "Smitten",
    // click: document.querySelector(".smitten"),
    section: document.getElementsByClassName('inventory')[0].children[2],
    sectionClass: "sPints",

    displayItems: function(){
        for (i=0; i < stores.length; i++){
            stores[i].className = "hidden";
    }
        sm.section.className= "sPints";
}
};


hs.li.addEventListener('click',hs.displayItems);

salt.li.addEventListener('click',salt.displayItems);

sm.li.addEventListener('click',sm.displayItems);

///////////////// Shopping Cart ///////////////////

function onclick (event) {
    console.log(event.target);
    if (event.target.tagName !== "SECTION"){
        if (event.target.tagName === "IMG") {
            console.log(event.target.alt);
            addToCart = event.target.alt;
            var newCartItem = document.createElement('li');
            newCartItem.textContent = addToCart;
            document.getElementsByClassName("cart")[0].appendChild(newCartItem);
        }
        else {
    addToCart = event.target;
    console.log(event.target);
    var newCartItem = document.createElement('li');
    newCartItem.textContent = addToCart.textContent;
    document.getElementsByClassName("cart")[0].appendChild(newCartItem);
    }
}
}
inventory.addEventListener('click', onclick);


function remove (event) {
    if (event.target.tagName !== "LI")
    console.log(event.target);
    else {
    event.target.className="hidden";
}
}

cart.addEventListener('click', remove);


// var hsli = document.querySelector(".humphrySlocombe");

// var saltli = document.querySelector(".saltAndStraw");

// var sli = document.querySelector(".smitten");

// var stores = document.getElementsByClassName('inventory')[0].children;

// console.log(stores);

// var button = hsli;
// var saltClick = saltli;
// var sliClick = sli;

// function showInventory(){
//     for (i=0; i < stores.length; i++){
//         console.log(stores[i].className);
//         stores[i].className = "hidden";
//     }
//     console.log(stores);
// }   


// hs.li.onclick = function(event){
//     for (i=0; i < stores.length; i++){
//         console.log(stores[i].className);
//         stores[i].className = "hidden";
//     }
//     hs.section.className='hSPints';
//     console.log(stores);
// },

// salt.li.onclick = function(event){
//     for (i=0; i < stores.length; i++){
//         console.log(stores[i].className);
//         stores[i].className = "hidden";
//     }
//     salt.section.className='saltPints';
//     console.log(stores);
// },

// sm.li.onclick = function(event){
//     for (i=0; i < stores.length; i++){
//         console.log(stores[i].className);
//         stores[i].className = "hidden";
//     }
//     sm.section.className='sPints';
//     console.log(stores);
// }




