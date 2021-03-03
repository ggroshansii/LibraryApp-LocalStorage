
const btn = document.querySelector("#addBook");
const gridContainer = document.querySelector(".grid-container");
btn.addEventListener("click", () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("book");
    gridContainer.append(newDiv)
});