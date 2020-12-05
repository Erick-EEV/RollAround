let commentUrl = "http://localhost:3000/blogs"

document.addEventListener('DOMContentLoaded', () =>{ 
})
     


function addComment(){
    let blogIndex = document.getElementById("blog-index-container")
    let form = document.getElementById("comment")
       blogIndex.appendChild(form) 
}

function createComment(event){
    event.preventDefault()

    commentData = {
        comments: event.target.value
    }

console.log(commentData);
  console.log(comment);
  
  //We need to access the blog_id
  //Then use that Id to make the correct patch request

    fetch(`${commentUrl}/${blogId}`,{
        method: "PATCH",
        headers: {"Content-Type":"application/json",
                    "Accept": "application/json"
                },
                body:JSON.stringify(commentData)       
    }).then(resp => resp.json())
    .then(commentData => console.log(commentData))

}