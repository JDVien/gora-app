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

const deleteBtn = document.querySelector(".delete-button");

deleteBtn.addEventListener('click', (e) => {
    const questionId = e.target.id.split('-')[2];
    const form = document.getElementById(`delete-question-${questionId}`)
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden')
    } else {
        form.classList.add('hidden')
    }
})
