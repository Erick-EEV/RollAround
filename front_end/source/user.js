const user_url = 'http://localhost:3000/users/'

document.addEventListener('DOMContentLoaded', ()=>{
    fetchUsers()

})

function fetchUsers(){
    fetch(user_url)
    .then(resp => resp.json())
    .then(users => users.forEach(user => {
        renderUsers(user)
    })
)}


function renderUsers(user){
    let profileDiv = document.getElementById("profile-container")
    let userSpanTag = document.createElement('span')
    let profile_img = document.createElement('img')
        profile_img.src = user.profile_pic
    
    let name = document.createElement('h2')
        name.innerText = user.name

    let email = document.createElement('h3')
        email.innerText = user.email 

    let specialize = document.createElement('h3')
        specialize.innerText = user.specialize 
        
    userSpanTag.append(profile_img, name, email, specialize)
    profileDiv.appendChild(userSpanTag)
}


