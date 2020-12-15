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
})

function createLogo(name, color, size) {
    const logo = document.createElement("h2");
    logo.innerText = name;
    logo.style.color = color;
    logo.style.fontSize = `${size}px`;
    return logo;
}