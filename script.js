document.getElementById("create").addEventListener("click", function() {
    document.getElementById("createBox").classList.add("open-popup")
})

document.getElementById("form").addEventListener("submit", function() {
    document.getElementById("createBox").classList.remove("open-popup")
})

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("createBox").classList.remove("open-popup")
})