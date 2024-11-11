let plus = document.querySelector(".plus")
let right = document.querySelector(".right")
let left = document.querySelector(".left")

plus.addEventListener("click", () => {
    plus.classList.toggle("rotate")
    right.classList.toggle("rightChild")
    left.classList.toggle("leftChild")
})

