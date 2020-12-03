const blog_url = 'http://localhost:3000/blogs/'

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('blog-form').addEventListener('submit', (event) => {
        createBlog(event);
    })
    document.getElementById('all-blogs').addEventListener('click', (event) => {
     
        fetchBlogs(event)
    }, {once : true})
})

function fetchBlogs(){
    fetch(blog_url)
    .then(resp => resp.json())
    .then(blogs => blogs.forEach(blog => {
        renderBlogs(blog)
    }))
}

function renderBlogs(blog) {
    let blogIndexDiv = document.getElementById('blog-index-container')
    
    let blogDiv = document.createElement('div')
    let title = document.createElement('h2')
        title.innerText = blog.title

        let name = localStorage.getItem('name')
    let blogAuthor = document.createElement('h4')
        blogAuthor.innerText = blog.user.name

    let blogImg = document.createElement('img')
        blogImg.src = blog.img
    
    let blogDesc = document.createElement('p')
        blogDesc.innerText = blog.description
    
    let blogKeys = document.createElement('p')
        blogKeys.innerText = blog.key_word

        let signin = document.getElementById("form")
        signin.innerHTML = ""
        let createblogform = document.getElementById("blog-form")
        createblogform.innerHTML = ""
        let profileDiv = document.getElementById("profile-container")
        profileDiv.innerHTML = ""
        
        blogDiv.append(title, blogAuthor, blogImg, blogDesc, blogKeys)
        blogIndexDiv.appendChild(blogDiv)
        // I want to add a class list of ui and card to the blogindexdv
        // blogIndexDiv.classList.add('card')
        // Then add the html to have a card to fill my out using my blogs information
        // We already have it created above but i want to change it out for a card i found on semantics ui
        // blogIndexDiv.innerHTML = ''
        // <img class="card-img-top" src="..." alt="Card image cap">
        // <div class="card-body">
        //   <h5 class="card-title">Card title</h5>
        //   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        // </div>
        // <div class="card-footer">
        //   <small class="text-muted">Last updated 3 mins ago</small>
        // </div>
        
}

function createBlog(event){
    event.preventDefault()
    let id = localStorage.getItem('user_id')
    let name = localStorage.getItem('name')
    let blogData = {
        title: event.target.title.value,
        img: event.target.img.value,
        description: event.target.description.value,
        user_id: id,
        user: name
    }

    fetch(`${blog_url}`, {
        method: "POST",
        headers: {"Content-Type": "application/json",
                 "Accept": "application/json"
                },
        body: JSON.stringify(blogData)
    }).then(resp => resp.json())
    .then(blog=> renderBlogs(blog))
    document.getElementById('blog-form').reset()
}
