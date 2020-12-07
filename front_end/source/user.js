const user_url = 'http://localhost:3000/users/'

    profileDiv = document.getElementById("profile-container")
    blogIndexContainer = document.getElementById('blog-index-container')
    buttonContainer = document.getElementById("button-index-container")
    blogForm = document.getElementById('blog-form')


    document.addEventListener('DOMContentLoaded', ()=>{
        profileDiv.style.visibility = "hidden";
        buttonContainer.style.visibility = "hidden";
        blogForm.style.visibility = "hidden"
        // let form = document.getElementById("comment")
        // form.style.visibility = "hidden";
    document.getElementById('form').addEventListener('submit', (event) => {
        profileDiv.style.visibility = "visible"
        blogIndexContainer.style.visibility = "visible";
        buttonContainer.style.visibility = "visible";
        blogForm.style.visibility = "visible"

        createUser(event)
        let form = document.getElementById('form')
        form.innerHTML = ""

    })
    fetchUsers() 
    fetchProfile()
    document.getElementById("profileNav").addEventListener('click', (event) =>{
        let user = localStorage.getItem('id')
        renderSoloUsers(user)
       
    }) 
    document.getElementById("logOutNav").addEventListener('click', (event) => {
        window.location.reload();
        logOut(event)
        alert('you are logged out!')
    })
})

function fetchUsers(){
    fetch(user_url)
    .then(resp => resp.json())
    .then(users => users.forEach(user => {
        renderUsers(user)}
    ))
}

function fetchProfile(){
    let user_id = localStorage.getItem('id')
    fetch(user_url + user_id)
    .then(resp => resp.json())
    .then(user => renderSolorUsers(user))
}

function renderSoloUsers(user){
    let profileDiv = document.getElementById('profile-container')
        
    let userSpanTag = document.getElementById('card-mode')

    let profile_img = document.getElementById('image')
        profile_img.src = user.profile_pic

    let name = document.getElementById('userName')
        name.innerText = user.name

    let email = document.getElementById('email')
        email.innerText = user.email

    let specialize = document.getElementById('specialize')
        specialize.innerText = user.specialize 


    userSpanTag.append(profile_img, name, email, specialize)
    profileDiv.appendChild(userSpanTag)


}





function renderUsers(user){
    let profileDiv = document.getElementById('profile-container')

    let userSpanTag = document.createElement('span')
        userSpanTag.id = "card-mode"
        userSpanTag.classList.add("card")
    let profile_img = document.createElement('img')
        profile_img.id = "image"
        profile_img.src = user.profile_pic
        profile_img.width = "130"
    
    let name = document.createElement('h2')
        name.innerText = user.name
        name.id = "userName"

    let email = document.createElement('h3')
        email.innerText = user.email 
        email.id = "email"

    let specialize = document.createElement('h3')
        specialize.innerText = user.specialize 
        specialize.id = "specialize"
        profileDiv.innerHTML = ""



    userSpanTag.append(profile_img, name, email, specialize)
    profileDiv.appendChild(userSpanTag)
}

function createUser(event){
    event.preventDefault()
    console.log(event.target)
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

function logOut(event){
    localStorage.clear()
}