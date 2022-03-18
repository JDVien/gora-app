const answerBtn = document.querySelector(".create-answer");

answerBtn.addEventListener('click', (e) => {
    const questionId = e.target.id.split('-')[2];
    const form = document.getElementById(`answer-form-${questionId}`)
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden')
    } else {
        form.classList.add('hidden')
    }

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
