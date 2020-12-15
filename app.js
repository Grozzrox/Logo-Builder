const form = document.querySelector("#logoform");
const name = document.querySelector('input[name="brandname"]');
const color = document.querySelector('input[name="brandcolor"]');
const size = document.querySelector('input[name="fontsize"]');
const text = document.querySelector("#newlogo");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(name.value, color.value, size.value);

    const newLogo = createLogo(name.value, color.value, size.value);
    text.appendChild(newLogo);
});

function createLogo(name, color, size) {
    const logo = document.createElement("h2");
    logo.innerText = name;
    logo.style.color = color;
    logo.style.fontSize = `${size}px`;
    return logo;
};

document.addEventListener("keypress", function(e) {
    console.log(e.key);
});

const newFriend = document.querySelector("#friend");
const friendForm = document.querySelector("#newfriend");
const list = document.querySelector("#friendslist");
const ul = document.querySelector("ul");

ul.addEventListener("click", function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
})

friendForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newLi = document.createElement("li");
    const newBtn = document.createElement("button");
    newLi.innerText = `${newFriend.value} `;
    newBtn.innerText = "UnFriend"
    newFriend.value = "";
    newLi.appendChild(newBtn);
    list.appendChild(newLi);

})
