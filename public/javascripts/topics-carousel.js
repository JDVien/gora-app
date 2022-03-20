const url = window.location.href.split('/')[4];
console.log(url);
  const topicResponse = await fetch(`/questions/topic/${url}`);
  const topicData = await topicResponse.json();
  const topicDiv = document.querySelector('.carousel')
  // console.log(topicData)

  // <a href=/questions/${question.id}>
  topicData.forEach(question => {
    topicDiv.innerHTML += `
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

// })
