const questions = document.getElementsByClassName("question_box_title");
const arrows = document.querySelectorAll(".arrow");
const answers = document.getElementsByClassName("answer_box");


for(let i=0; i < questions.length; i++){
  
  questions[i].addEventListener("click", () => {
    closeBox();
    openBox(i);
  });
}

for(let i=0; i < arrows.length; i++){
  
  arrows[i].addEventListener("click", () => {
    closeBox();
    openBox(i);
  });
}

function openBox(i){
  questions[i].style.fontWeight = "700";
  arrows[i].style.transform = "rotateX(180deg)";
  answers[i].style.display = "inline-block";
}

function closeBox(){
  for(let i=0; i < questions.length; i++){
    questions[i].style.fontWeight = "400";
    arrows[i].style.transform = "rotateX(0deg)";
    answers[i].style.display = "none";
  }
}
