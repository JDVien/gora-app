const answerBtn = document.querySelector(".create-answer");

answerBtn.addEventListener('click', (e) => {
    const questionId = e.target.id.split('-')[2];
    const form = document.getElementById(`answer-form-${questionId}`)
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden')
    } else {
        form.classList.add('hidden')

    }
    // document.body.classList.toggle('end-state')
    // const submitBtn = document.getElementById(`edit-btn-${questionId}`)
    // submitBtn.addEventListener('click', async(subEvent) => {
    //     subEvent.preventDefault()
    //     console.log('submit', questionId)

    //     const questionEdit = await fetch('', {
    //     })
    //     // query the dom for the input field's value
    //     // send a PATCH fetch request with the content in the body
    //     // await the response
    //     // if we get a Success response, the original post element should be updated
    //     // reapply hidden class to form

    // })
})

const editBtnsAnswers = document.querySelectorAll(`.edit-answer-btn`)

for (let i = 0; i < editBtnsAnswers.length; i++) {
    const btn = editBtnsAnswers[i];
    btn.addEventListener('click', (e) => {
        const answerId = e.target.id.split('-')[3]
        console.log(answerId)
        const form = document.getElementById(`edit-answer-form-${answerId}`)
        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden')
            // document.body.classList.toggle('end-state')
        } else {
            form.classList.add('hidden')
        }

        const submitBtn = document.getElementById(`submit-answer-btn-${answerId}`)
        submitBtn.addEventListener('click', async(subEvent) => {
            subEvent.preventDefault()
            // console.log('---------->','submit', answerId)

            // query the dom for the input field's value
            const contentData = document.getElementById(`content-field-${answerId}`).value
            // console.log(contentData)
            // send a PATCH fetch request with the content in the body
            const res = await fetch(`/answers/${answerId}`, {
                method: 'PATCH',
                body: JSON.stringify({content: contentData}),
                headers: { 'Content-Type': 'application/json' }
            })
            // await the response
            const returnData = await res.json()

            // if we get a Success response, the original post element should be updated
            if (returnData.message === "Success") {
                // const postEle = document.getElementById(`answer-container-${answerId}`)
                // postEle.innerHTML = `
                //         <h3>${returnData.answer.content}</h3>
                //         <p>${returnData.answer.User.username}</p>
                //         <a class="delete-answer" href="/answers/delete/14" onclick="return confirm('Are you sure you want to delete this answer?');" id="delete-answer-14">Delete</a>
                //         <form class="" id="edit-answer-form-14"><label for="content">Content:</label><input type="text" name="content" value="duh!!!!" id="content-field-14"><button class="edit-submit-btn" id="submit-answer-btn-14">Submit Edit</button></form>
                // `
                // // reapply hidden class to form
                // form.classList.add('hidden')
                window.location.replace(`/questions/${returnData.answer.questionId}`)
            }
        })
    })
}
