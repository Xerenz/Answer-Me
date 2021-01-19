$(document).ready(() => {
    console.log("See ready")

    let db = firebase.firestore()

    db.collection('users')
    .get()
    .then(snap => {
        snap.forEach(doc => {
            console.log(doc.data())
            let data = `
            <div class="mb-3">
            <div class="card">
                <p class="mt-2 ml-3">
                    <b>${doc.data().name}</b> says <i>${doc.data().question}</i>
                </p>
                <div class="card-footer text-muted>
                    ${doc.data.email}
                </div>
            </div>
            </div>`
            $("#allQuestions").append(data)
        })
    })
    .catch(error => {
        window.location.href = '/views/error.html'
    })
})