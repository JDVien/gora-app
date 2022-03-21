
// let i = 0;
// const getQuestion = async () => {
//   const nextQuestionBttn = document.querySelector('.get-question')
//   const carousel = document.querySelector('.question-divs')
//   const questionResponse = await fetch('/questions/all');
//   const questionData = await questionResponse.json();
//   const questionDiv = document.querySelector('.questions-divs')
//   console.log(questionData)
// nextQuestionBttn.onclick = function() {

//     console.log(i)

//     questionDiv.innerHTML = `
//         <div class='carousel-item'>
//           <p>${questionData[i].title}</p>
//           <a href=/questions/${questionData[i].id}> <img src=${questionData[i].imgLink}></a>
//         </div>
//     `
//     i++;
//   }
// }
// getQuestion();
// window.addEventListener('DOMContentLoaded', async (event) => {

  const questionResponse = await fetch('/questions/all');
  const questionData = await questionResponse.json();
  const questionDiv = document.querySelector('.carousel')
  // console.log(questionData)

  // <a href=/questions/${question.id}>
  questionData.forEach(question => {
    questionDiv.innerHTML += `
    <div class='carousel_item carousel_item--hidden'>
    <p>${question.title}</p>
    <a href=/questions/${question.id}><img src=${question.imgLink}></a>
    </div>
    `
  })

  let slidePosition = 0;

  const slides = document.getElementsByClassName('carousel_item')
  // console.log(slides[slidePosition])

  slides[slidePosition].classList.remove('carousel_item--hidden')
  slides[slidePosition].classList.add('carousel_item--visible')
  const totalSlides = slides.length;

  document.
  getElementById('carousel_button--next')
  .addEventListener("click", (e) => {

    moveToNextSlide();


  });
  // document.getElementById('carousel_button--next')
  // .addEventListener('mouseout', (e) => {
  //  document.body.classList.toggle('end-state')
  // })

  document.
  getElementById('carousel_button--prev')
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousel_item--visible');
      slide.classList.add('carousel_item--hidden');
    }
    slides[slidePosition].classList.add('carousel_item--visible');
    document.body.classList.toggle('end-state')
  }

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    updateSlidePosition();
  }

  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }
    updateSlidePosition();
  }

  const url = window.location.href.split('/')[4];
  const leftMenu = document.querySelectorAll('.vertical-nav-li')
  leftMenu[0].style.backgroundColor = '';
  leftMenu[1].style.backgroundColor = '';
  leftMenu[2].style.backgroundColor = '';
  leftMenu[3].style.backgroundColor = '';
  if(url===undefined){
    leftMenu[0].style.backgroundColor = 'black';
  }
// })
