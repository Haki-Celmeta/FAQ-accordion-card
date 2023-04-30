const questionContainer = document.querySelector(".second-part");
const questions = document.querySelectorAll(".questions");
const answers = document.querySelectorAll(".answer");
let plus = document.querySelectorAll(".plus");

let isOpen = false;
questionContainer.addEventListener("click", function(event) {
  for(let i = 0; i < questions.length; i++) {
    if (event.target === questions[i] || event.target === plus[i]) {
      answers[i].style.display = "block";
      questions[i].style.fontWeight = "700";
      plus[i].textContent = "-";
    } else {
      answers[i].style.display = "none";
      questions[i].style.fontWeight = "400";
      plus[i].textContent = "+";
    }
  }
})
