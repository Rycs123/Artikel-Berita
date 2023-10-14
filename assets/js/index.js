const toggle = document.getElementById("toggleLight");
const body = document.querySelector("body");
const navDropDown = document.querySelector(".navDropDown");
const liElements = navDropDown.querySelectorAll("li");

const navClass = document.querySelectorAll(".navClass");
const iconElements = document.querySelectorAll("i");
const navKompas = document.querySelector(".nav-kompas");
const cardElements = document.querySelectorAll(".card");
const listGroupItems = document.querySelectorAll(
    ".list-group .list-group-item"
);
const anchorElements = document.querySelectorAll(".card a");
const paragraphElements = document.querySelectorAll(".card p");

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-brightness-high-fill");
    if (this.classList.toggle("bi-moon-stars-fill")) {
        body.style.backgroundColor = "black";
        body.style.transition = "2s";
        body.style.color = "white";
        navDropDown.style.backgroundColor = "black";
        navDropDown.style.transition = "2s";
        liElements.forEach((li) => {
            li.style.color = "white";
        });
        iconElements.forEach((icon) => {
            icon.style.color = "white";
        });
        navClass.forEach((navClassElement) => {
            navClassElement.style.backgroundColor = "black";
            navClassElement.style.transition = "2s";
            navClassElement.style.color = "white";
        });
        navKompas.style.backgroundColor = "black";
        navKompas.style.transition = "2s";
        navKompas.style.color = "white";
        cardElements.forEach((card) => {
            card.style.backgroundColor = "white";
            card.style.transition = "2s";
            card.style.color = "black";
        });
        listGroupItems.forEach((item) => {
            const anchorElement = item.querySelector("a");
            anchorElement.style.color = "black";
            item.style.backgroundColor = "white";
            item.style.transition = "2s";
        });
        anchorElements.forEach((anchor) => {
            anchor.style.color = "black";
        });
        paragraphElements.forEach((paragraph) => {
            paragraph.style.color = "black";
        });
    } else {
        body.style.backgroundColor = "#B8B8B8";
        body.style.color = "black";
        body.style.transition = "2s";

        navDropDown.style.backgroundColor = "grey";
        navDropDown.style.transition = "2s";

        liElements.forEach((li) => {
            li.style.color = "black";
        });
        iconElements.forEach((icon) => {
            icon.style.color = "white";
        });
        navClass.forEach((navClassElement) => {
            navClassElement.style.backgroundColor = "grey";
            navClassElement.style.transition = "2s";
            navClassElement.style.color = "black";
        });
        navKompas.style.backgroundColor = "black";
        navKompas.style.transition = "2s";

        navKompas.style.color = "white";
        cardElements.forEach((card) => {
            card.style.backgroundColor = "grey";
            card.style.transition = "2s";
            card.style.color = "white";
        });
        listGroupItems.forEach((item) => {
            const anchorElement = item.querySelector("a");
            anchorElement.style.color = "white";
            item.style.backgroundColor = "grey";
            item.style.transition = "2s";
        });
        anchorElements.forEach((anchor) => {
            anchor.style.color = "white";
        });
        paragraphElements.forEach((paragraph) => {
            paragraph.style.color = "white";
        });
    }
});
