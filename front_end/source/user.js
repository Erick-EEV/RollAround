const user_url = 'http://localhost:3000/users/'

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('form').addEventListener('submit', (event) => {
        createUser(event)
        let form = document.getElementById('form')
        form.innerHTML = ""
    })

    fetchUsers()   
})

function fetchUsers(){
    fetch(user_url)
    .then(resp => resp.json())
    .then(users => users.forEach(user => {
        renderUsers(user)}
    ))
}


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
    profileDiv.innerHTML = ""


    userSpanTag.append(profile_img, name, email, specialize)
    profileDiv.appendChild(userSpanTag)
}

function createUser(event){
    event.preventDefault()
    let userData = {
        name: event.target.userName.value,
        email: event.target.email.value,
        specialize: event.target.specialize.value,
        profile_pic: event.target.profilePic.value
    }

    fetch(user_url, {
        method: "POST",
        headers: {"Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }).then(resp => resp.json())
    .then(user => {
        renderUsers(user)
        localStorage.clear()
        localStorage.setItem("user_id", user.id)
        let id = localStorage.getItem("user_id")
        localStorage.setItem("name", user.name)
        let name = localStorage.getItem("name") 
    })
    document.getElementById('form').reset()
}