const user_url = 'http://localhost:3000/users'

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('form').addEventListener('submit', (event) => {
        createUser(event);
        let form = document.getElementById('form')
        form.innerHTML = ""
    })
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

    profileDiv.innerHTML = ""

    let a = document.createElement('a');
    let linkText = document.createTextNode("my title text");
    a.appendChild(linkText);
    a.title = "Create Blog";
    a.href = "";
    document.body.appendChild(a);
    
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
    console.log(userData)
    
    fetch(`${user_url}`, {
        method: "POST",
        headers: {"Content-Type": "application/json",
    "Accept": "application/json"
},
        body: JSON.stringify(userData)
    }).then(resp => resp.json())
    .then(user => renderUsers(user))
    document.getElementById('form').reset()
}