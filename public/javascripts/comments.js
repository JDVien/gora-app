const allCommentbtn = document.querySelectorAll(".create-comment");
console.log(allCommentbtn)
for (let i = 0; i < allCommentbtn.length; i++) {
  const commentBtn = allCommentbtn[i];
  console.log(commentBtn)
  commentBtn.addEventListener("click", e => {
    const commentBtnId = e.target.id.split('-')[2]
    console.log(commentBtnId)
    const form = document.getElementById(`comment-form-${commentBtnId}`)
  if (form.classList.contains('hidden')) {
      form.classList.remove('hidden')
  } else {
    form.classList.add('hidden')
  }
})
}

// const commentBtn = document.querySelector(".create-comment");
// if(commentBtn) {
//   commentBtn.addEventListener("click", e => {
//     const answerId = e.target.id.split('-')[2];
//     const form = document.getElementById(`comment-form-${answerId}`)
//     if (form.classList.contains('hidden')) {
//       form.classList.remove('hidden')
//     } else {
//       form.classList.add('hidden')
//     }
//   })
// }

  const editBtnComments = document.querySelectorAll(`.edit-comment-btn`)

  for (let i = 0; i < editBtnComments.length; i++) {
    const btn = editBtnComments[i];
    btn.addEventListener("click", e => {
      const commentId = e.target.id.split('-')[3]
      console.log(commentId)
      const form = document.getElementById(`edit-comment-form-${commentId}`)
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden')
    } else {
      form.classList.add('hidden')
    }

    const submitBtn = document.getElementById(`submit-comment-btn-${commentId}`)
    submitBtn.addEventListener("click", async(subEvent) => {
      subEvent.preventDefault()

      const contentData = document.getElementById(`content-field-${commentId}`).value

      const res = await fetch(`/comments/${commentId}`, {
        method: 'PATCH',
        body: JSON.stringify({content: contentData}),
        headers: { 'Content-Type': 'application/json' }
      })

      const returnData = await res.json()

      if (returnData.message === 'Success') {
        window.location.replace(`/questions/${returnData.comment.questionId}`)
        location.reload(true)
      }
    })
  })
}
