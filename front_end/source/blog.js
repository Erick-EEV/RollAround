const blog_url = 'http://localhost:3000/blogs/'
blogForm = document.getElementById('blog-form')

document.addEventListener('DOMContentLoaded', () =>{
    blogForm.addEventListener('submit', (event) => {
          createBlog(event);
          alert("Your blog has been added")
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
function renderBlogs(blog){
    let blogIndexDiv = document.getElementById('blog-index-container')
    blogIndexDiv.classList.add("card")

    let blogDiv = document.createElement('div')
        blogDiv.classList.add("card-body")

    let blogImg = document.createElement('img')
        blogImg.src = blog.img
        blogImg.classList.add("card-img-top")

    let title = document.createElement('h2')
        title.innerText = blog.title
        title.classList.add("card-title")

    let blogAuthor = document.createElement('h4')    
        blogAuthor.innerText = blog.user.name

    let blogDesc = document.createElement('p')
        blogDesc.innerText = blog.description
        blogDesc.classList.add("card-text")

    let blogKeys = document.createElement('p')
        blogKeys.innerText = blog.key_word
        blogKeys.classList.add("card-text")

    let signin = document.getElementById("form")
        signin.innerHTML = ""

    let createblogform = document.getElementById("blog-form")
        createblogform.innerHTML = ""

    let profileDiv = document.getElementById("profile-container")
        profileDiv.innerHTML = ""
    //Below I created the blog form and commented it out in the html
    //Because when we place the form in the html we can only grab it once
    //We want a new form to be created and appended to each blog as they render
    let commentForm = document.createElement('form')
    commentForm.id = "comment"
    let commentDiv = document.createElement('div')
    let head = document.createElement('h4')
    head.innerText = "Comment Below"
    let textTag = document.createElement('textarea')
    textTag.type = "text-area"
    textTag.id = "newComent"
    textTag.name = "newText"
    let commentInput = document.createElement('input')
    commentInput.type = "submit"
    commentInput.id = blog.id

    commentForm.addEventListener('submit', (event) => {
      alert("Your comment has been added")
      createComment(event)
}) 

    commentDiv.appendChild(head)
    commentForm.append(commentDiv, textTag, commentInput)

        
        let ul = document.createElement('ul')
        blog.comments.forEach((comment) => {
            let li = document.createElement('li')
            li.innerText = comment.comment
            ul.appendChild(li)
        })
    blogDiv.append(blogImg, title, blogAuthor, blogDesc, blogKeys, commentForm, ul)
    blogIndexDiv.appendChild(blogDiv)

}

function addComment(event){
    // event.preventDefault()
    console.log(event);
    let li = document.createElement('li')
    li.innerText = event.target.newText.value
    // event.target[0].value
    console.log(li.innerText);

    let ul = document.getElementById('ul')

    ul.appendChild(li)

}




// function renderSingleBlog(blog) {
//     let blogIndexDiv = document.getElementById('blog-index-container')
//         blogIndexDiv.classList.add("card")
    
//     let blogDiv = document.createElement('div')
//         blogDiv.classList.add("card-body")
 
//     let blogImg = document.createElement('img')
//         blogImg.src = blog.img
//         blogImg.classList.add("card-img-top")

//     let title = document.createElement('h2')
//         title.innerText = blog.title
//         title.classList.add("card-title")
    
//     let name = localStorage.getItem('name')
//     let blogAuthor = document.createElement('h4')
//             blogAuthor.innerText = name

        

//    let blogDesc = document.createElement('p')
//         blogDesc.innerText = blog.description
//         blogDesc.classList.add("card-text")
    
//     let blogKeys = document.createElement('p')
//         blogKeys.innerText = blog.key_word
//         blogKeys.classList.add("card-text")

//         let signin = document.getElementById("form")
//             signin.innerHTML = ""

//         let createblogform = document.getElementById("blog-form")
//             createblogform.innerHTML = ""

//         let profileDiv = document.getElementById("profile-container")
//             profileDiv.innerHTML = ""
        
//             blogIndexDiv.innerHTML = ""     
//         blogDiv.append(blogImg, title, blogAuthor, blogDesc, blogKeys)
//         blogIndexDiv.appendChild(blogDiv)
      
// }

function createBlog(event){
    event.preventDefault()
    let id = localStorage.getItem('user_id')
    let name = localStorage.getItem('name')
    let blogData = {
        title: event.target.title.value,
        img: event.target.img.value,
        description: event.target.description.value,
        user_id: id,
        user : {
            name: name
        },
    }

    fetch(`${blog_url}`,{
        method: "POST",
        headers: {"Content-Type": "application/json",
                 "Accept": "application/json"
                },
        body: JSON.stringify(blogData)
    }).then(resp => resp.json())
    .then(blog=> console.log(blog))
    blogForm.reset()
}
