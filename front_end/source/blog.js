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
        blogAuthor.innerText = name

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
    
    blogDiv.append(title, blogAuthor,blogImg, blogDesc, blogKeys)
    blogIndexDiv.appendChild(blogDiv)

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
    console.log(blogData)
    console.log(blogData)

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
