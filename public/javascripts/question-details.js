const editBtn = document.querySelector(".edit-button");
 if(editBtn) {

     editBtn.addEventListener('click', (e) => {
         const questionId = e.target.id.split('-')[2];
         const form = document.getElementById(`edit-form-${questionId}`)
         if (form.classList.contains('hidden')) {
              form.classList.remove('hidden')

            } else {
                form.classList.add('hidden')

            }
            // document.body.classList.toggle('end-state')
        });

        const deleteQueBtn = document.querySelector(".delete-question");

        if(deleteQueBtn) {

            deleteQueBtn.addEventListener('click', (e) => {
                const questionId = e.target.id.split('-')[2];
                const form = document.getElementById(`delete-question-${questionId}`)
                if (form.classList.contains('hidden')) {
                    form.classList.remove('hidden')
                } else {
                    form.classList.add('hidden')
                }
            })
        }
        const deleteAnsBtn = document.querySelector(".delete-answer");

        if(deleteAnsBtn) {

            deleteAnsBtn.addEventListener('click', (e) => {
                const answerId = e.target.id.split('-')[2];
                const form = document.getElementById(`delete-answer-${answerId}`)
                if (form.classList.contains('hidden')) {
                    form.classList.remove('hidden')
                } else {
                    form.classList.add('hidden')
                }
            })

        }

        const deleteComBtn = document.querySelector(".delete-comment");

        if(deleteComBtn) {
            deleteComBtn.addEventListener('click', (e) => {
                const commentId = e.target.id.split('-')[2];
                const form = document.getElementById(`delete-comment-${commentId}`)
                if (form.classList.contains('hidden')) {
                    form.classList.remove('hidden')
                } else {
                    form.classList.add('hidden')
                }
            })
        }
    }
