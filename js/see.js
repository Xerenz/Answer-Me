$(document).ready(() => {
    console.log("See ready")

    let db = firebase.firestore()

    db.collection('users')
    .get()
    .then(snap => {
        snap.forEach(doc => {
            console.log(doc.data())
            let data = `<p><b>${doc.data().name}</b> says <i>${doc.data().question}</i></p>`
            $("#allQuestions").append(data)
        })
    })
    .catch(error => {
        window.location.href = '/error.html'
    })
})