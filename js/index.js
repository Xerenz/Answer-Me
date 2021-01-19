let db = firebase.firestore()

$(document).ready(() => {
console.log("document loaded")
$("#emailForm").submit((event) => {
    event.preventDefault()

    $("#submitButton").innerHTML = 'Please wait..'
    
    let name = $("#name").val().trim()
    let email = $("#email").val().trim()
    let question = $("#question").val().trim()

    db.collection('users')
    .add({
        name : name,
        email: email,
        question : question
    })
    .then(() => {
        console.log('Data added')
        window.location.href = '/views/see.html'
    })
    .catch(error => {
        console.log(error)
        console.log('Got an error!')
        window.location.href = '/error.html'
    })
})
})