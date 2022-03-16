const questionDivs = document.querySelectorAll('.question-divs')

for (let i = 0; i < questionDivs.length; i++) {
    const div = questionDivs[i];

    div.addEventListener('click', (e) => {
        const questionId = e.target.id.split('-')[2]
        window.location.replace(`/questions/${questionId}`)
    })
};
