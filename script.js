const myDiv = document.getElementById("blogPage");

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then(response => {
    for (let i = 0; i < response.length; i++) {
        let blog = document.createElement("div");
        blog.setAttribute("class", "blog");

        let title = document.createElement("h1");
        title.setAttribute("class", "blogTitle");
        title.innerHTML = response[i]["title"];

        let body = document.createElement("p");
        body.setAttribute("class", "blogBody");
        body.innerHTML = response[i]["body"];

        blog.appendChild(title);
        blog.appendChild(body);
        myDiv.appendChild(blog);
        console.log(response[i])
    }
  })












document.getElementById("create").addEventListener("click", function() {
    document.getElementById("createBox").classList.add("open-popup")
})

document.getElementById("form").addEventListener("submit", function() {
    document.getElementById("createBox").classList.remove("open-popup")
})

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("createBox").classList.remove("open-popup")
})
