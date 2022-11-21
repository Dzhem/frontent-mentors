const questionList = document.querySelectorAll(".question");

questionList.forEach((questionItem) => {
  questionItem.addEventListener("click", handleClick);
});

function handleClick(e) {
  e.target.classList.toggle("active");
}
