const commentUrl = "http://localhost:3000/comments/"

document.addEventListener('DOMContentLoaded', () =>{ 
})
     


function fetchComment(){
    let blogIndex = document.getElementById("blog-index-container")
    let form = document.getElementById("comment")
       blogIndex.appendChild(form) 
}



function createComment(event){
    event.preventDefault()

    commentData = {
        newComment: {
            comment: event.target.newText.value,
            blog_id: event.target[1].id,
            user_id: localStorage.getItem('user_id')
        }
    }

    console.log(commentData);
    
    // let blogId = event.target[1].id
    // console.log(blogId);

    fetch(commentUrl,{
        method: "POST",
        headers: {"Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(commentData) 
    }).then(resp => resp.json())
    .then(commentData => addComment(commentData))

}