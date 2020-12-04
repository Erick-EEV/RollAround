let commentUrl = "http://localhost:3000/blogs"
document.addEventListener('DOMContentLoaded', () =>{
    let form = document.getElementById("comment")
        form.style.visibility = "hidden";
    

        form.addEventListener('submit', (event) => {
          alert("Your comment has been added")
          createComment(event)
    })  
    fetchComments()
})
     


function addComment(blog){
    let blogIndex = document.getElementById("blog-index-container")
    let form = document.getElementById("comment")
       blogIndex.appendChild(form) 
}

function createComment(event){
    event.preventDefault()
    commentData ={
        comments: event.target.commentBtn.value
    }

    fetch(commentUrl,{
        method: "PATCH",
        headers: {"Content-Type":"application/json",
                    "Accept": "application/json"
                },
                body:JSON.stringify(commentData)       
    }).then(resp => resp.json())
    .then(commentData => console.log(commentData))
}