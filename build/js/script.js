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
var txt1 = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");

tab1.onclick = function () {
    tab1.className = "tab top pressed";
    tab2.className = "tab";
    tab3.className = "tab bot";
    txt1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes."
    txt2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean euismod bibendum laoreet."
};

tab2.onclick = function () {
    tab1.className = "tab top";
    tab2.className = "tab pressed";
    tab3.className = "tab bot";
    txt1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita rem sit tenetur voluptates voluptatibus. Consequuntur debitis eos expedita odit, porro rerum vel! Beatae blanditiis dicta numquam possimus quas quibusdam ratione!";
    txt2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, voluptatem!";
};

tab3.onclick = function () {
    tab1.className = "tab top";
    tab2.className = "tab";
    tab3.className = "tab bot pressed";
    txt1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus sed suscipit tempore vel veritatis vero voluptates voluptatibus? Accusantium delectus deserunt, excepturi impedit inventore itaque iure odio odit perferendis porro quod reiciendis!";
    txt2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, blanditiis debitis esse facere nemo non perspiciatis recusandae reprehenderit sit voluptatem?";
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

function inputFocus(id) {
    var input = document.getElementById(id);
    if(input.style.color !== "black"){
        input.value = "";
        input.style.color = "black";
    }
}

function inputBlur(id, value) {
    var input = document.getElementById(id);
    if(input.value === ""){
        input.value = value;
        input.style.color = "#d6d6d6";
        if (input.className === "input contact-input" || input.className === "input message-input"){
            input.style.color = "#bdbdbd"
        }
    }
}
