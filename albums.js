const myDiv = document.getElementById("albumPage");
async function fetchAlbums() {
    let [albumsResponse, photosResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/albums'),
        fetch('https://jsonplaceholder.typicode.com/photos')
    ])
    let albums = await albumsResponse.json();
    let photos = await photosResponse.json();

    return [albums, photos]
}

fetchAlbums().then(([albums, photos]) => {
    for (let i = 0; i < albums.length; i++) {
        let album = document.createElement("div");
        album.setAttribute("class", "album");

        let albumAuthor = document.createElement("p");
        albumAuthor.innerHTML = "User " + albums[i]['userId'].toString();
        albumAuthor.setAttribute("class", "albumAuthor");

        let albumTitle = document.createElement("p");
        albumTitle.innerHTML = albums[i]['title'];
        albumTitle.setAttribute("class", "albumTitle");

        let photoDiv = document.createElement("div");
        photoDiv.classList.add("photos");
        
        let row3 = document.createElement("div");
        row3.classList.add("row3");

        let row2 = document.createElement("div");
        row2.classList.add("row2");

        for (j = 0; j < 3; j++) {
            let image = document.createElement("img");
            image.src = photos[i*50+j]['url'];
            image.classList.add("image");
            row3.append(image);
        }

        for (j = 3; j < 5; j++) {
            let image = document.createElement("img");
            image.src = photos[i*50+j]['url'];
            image.classList.add("image");
            row2.append(image);
        }

        photoDiv.append(row3);
        photoDiv.append(row2);
        album.append(albumAuthor);
        album.append(albumTitle);
        album.append(photoDiv);

        myDiv.append(album);

    }
})

function postAlbum(c, t) {
    let blog = document.createElement("div");
    blog.setAttribute("class", "album");
  
    let title = document.createElement("h1");
    title.setAttribute("class", "albumTitle");
    title.innerHTML = t;
  
    let author = document.createElement("p");
    author.setAttribute("class", "albumAuthor");
    author.innerHTML = "You";
  
    let body = document.createElement("img");
    body.setAttribute("class", "postedImage");
    body.src = c;
  
    blog.append(author);
    blog.append(title);
    blog.append(body);
    myDiv.prepend(blog);
  }

document.getElementById("create").addEventListener("click", function() {
    document.getElementById("createBox").classList.add("open-popup")
})

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("createBox").classList.remove("open-popup")
})

document.getElementById("form").addEventListener("submit", function(event) {

    event.preventDefault(); 
    postAlbum(document.getElementById("imgUrl").value, document.getElementById("title").value);
    document.getElementById("createBox").classList.remove("open-popup")
    document.getElementById("imgUrl").value = '';
    document.getElementById("title").value = '';

})