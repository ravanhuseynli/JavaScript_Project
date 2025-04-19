let body = document.querySelector("body");
let feature = document.querySelector(".feature");
let bestseller = document.querySelector(".bstsellerr");
let discountt = document.querySelector(".discountt");
let basketArr = JSON.parse(localStorage.getItem("basket")) || [];
let favArr = JSON.parse(localStorage.getItem("favorites")) || [];