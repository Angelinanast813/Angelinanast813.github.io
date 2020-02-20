document.getElementById("menu").onclick = function () {
    var nav = document.getElementById('top_nav');

    if(nav.className === "top-nav"){
        nav.className += " responsive";
    }
    else {
        nav.className = "top-nav";
    }
};

var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");

tab1.onclick = function () {
    tab1.className = "tab top pressed";
    tab2.className = "tab";
    tab3.className = "tab bot";
};

tab2.onclick = function () {
    tab1.className = "tab top";
    tab2.className = "tab pressed";
    tab3.className = "tab bot";
};

tab3.onclick = function () {
    tab1.className = "tab top";
    tab2.className = "tab";
    tab3.className = "tab bot pressed";
};

var ttl1 = document.getElementById("ttl1");
var ttl2 = document.getElementById("ttl2");
var ttl3 = document.getElementById("ttl3");
var price1 = document.getElementById("price1");
var price2 = document.getElementById("price2");
var price3 = document.getElementById("price3");
var popular = document.getElementById("popular");

ttl1.onmouseover = function () {
    ttl1.className = "ttl ttl-hover";
    price1.className = "price price-hover";
};

price1.onmouseover = function () {
    ttl1.className = "ttl ttl-hover";
    price1.className = "price price-hover";
};

ttl1.onmouseout = function () {
    ttl1.className = "ttl";
    price1.className = "price";
};

price1.onmouseout = function () {
    ttl1.className = "ttl";
    price1.className = "price";
};

ttl3.onmouseover = function () {
    ttl3.className = "ttl ttl-hover";
    price3.className = "price price-hover";
};

price3.onmouseover = function () {
    ttl3.className = "ttl ttl-hover";
    price3.className = "price price-hover";
};

ttl3.onmouseout = function () {
    ttl3.className = "ttl";
    price3.className = "price";
};

price3.onmouseout = function () {
    ttl3.className = "ttl";
    price3.className = "price";
};

ttl2.onmouseover = function () {
    ttl2.className = "ttl ttl-hover";
    price2.className = "price price-hover";
    popular.className = "popular popular-hover";
};

price2.onmouseover = function () {
    ttl2.className = "ttl ttl-hover";
    price2.className = "price price-hover";
    popular.className = "popular popular-hover";
};

ttl2.onmouseout = function () {
    ttl2.className = "ttl";
    price2.className = "price";
    popular.className = "popular";
};

price2.onmouseout = function () {
    ttl2.className = "ttl";
    price2.className = "price";
    popular.className = "popular";
};
