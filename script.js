const myDiv = document.getElementById("blogs");

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then(response => {
    for (let i = 0; i < response.length; i++) {
        let blog = document.createElement("div");
        blog.setAttribute("class", "blog");

        let title = document.createElement("h1");
        title.setAttribute("class", "blogTitle");
        title.innerHTML = response[i]["title"];

        let author = document.createElement("p");
        author.setAttribute("class", "blogAuthor");
        author.innerHTML = "User " + response[i]["userId"];

        let body = document.createElement("p");
        body.setAttribute("class", "blogBody");
        body.innerHTML = response[i]["body"]+'... <a>read more</a>';

        blog.append(title);
        blog.append(author);
        blog.append(body);
        myDiv.append(blog);
    }
  })



function writeBlog(c, t) {
  let blog = document.createElement("div");
  blog.setAttribute("class", "blog");

  let title = document.createElement("h1");
  title.setAttribute("class", "blogTitle");
  title.innerHTML = t;

  let author = document.createElement("p");
  author.setAttribute("class", "blogAuthor");
  author.innerHTML = "You";

  let body = document.createElement("p");
  body.setAttribute("class", "blogBody");
  body.innerHTML = c;

  blog.append(title);
  blog.append(author);
  blog.append(body);
  myDiv.prepend(blog);
}







document.getElementById("create").addEventListener("click", function() {
    document.getElementById("createBox").classList.add("open-popup")
})

document.getElementById("form").addEventListener("submit", function(event) {
  
    event.preventDefault();  
    writeBlog(document.getElementById("blogContent").value, document.getElementById("title").value);
    document.getElementById("createBox").classList.remove("open-popup")
    document.getElementById("blogContent").value = '';
    document.getElementById("title").value = '';
})

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("createBox").classList.remove("open-popup")
})
