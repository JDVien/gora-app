const editBtn = document.querySelector(".edit-button");

editBtn.addEventListener('click', (e) => {
    const questionId = e.target.id.split('-')[2];
    const form = document.getElementById(`edit-form-${questionId}`)
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden')
    } else {
        form.classList.add('hidden')
    }
});

const deleteQueBtn = document.querySelector(".delete-question");

deleteQueBtn.addEventListener('click', (e) => {
    const questionId = e.target.id.split('-')[2];
    const form = document.getElementById(`delete-question-${questionId}`)
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden')
    } else {
        form.classList.add('hidden')
    }
})
const deleteAnsBtn = document.querySelector(".delete-answer");

deleteAnsBtn.addEventListener('click', (e) => {
    const answerId = e.target.id.split('-')[2];
    const form = document.getElementById(`delete-answer-${answerId}`)
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden')
    } else {
        form.classList.add('hidden')
    }
})
