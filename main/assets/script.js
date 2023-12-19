const highScores= document.querySelector('.scores');
const timeRemaining= document.querySelector('.timer')
const quizStart= document.querySelector('.quizStart');
const startBtn= document.querySelector('#startBttn');
const question1= document.querySelector('.question1');

startBtn.addEventListener("click", function startQuiz() {
 if (question1.style.display === "none") {
    question1.style.display = "block";
    quizStart.style.display = "none";
    startBtn.style.display = "none";
  } else {
    question1.style.display = "none";
  }
});

const answerOne1=document.querySelector('#answers1-1');
const answerOne2=document.querySelector('#answers1-2');
const answerOne3=document.querySelector('#answers1-3');
const answerOne4=document.querySelector('#answers1-4');
const question2= document.querySelector('.question2');
const correctAnswer= document.querySelector('#answerCorrect');
const incorrectAnswer= document.querySelector('#answerIncorrect');

answerOne3.addEventListener("click", function answerOneCorrect() {
 if (question2.style.display === "none") {
    question2.style.display = "block";
    question1.style.display = "none";
    correctAnswer.style.display = "block";
  }
  else {
    question2.style.display = "none";
  }
});

answerOne1.addEventListener("click", function answerOne1Incorrect() {
 if (question2.style.display === "none") {
    question2.style.display = "block";
    question1.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question2.style.display = "none";
  }
});

answerOne2.addEventListener("click", function answerOne2Incorrect() {
 if (question2.style.display === "none") {
    question2.style.display = "block";
    question1.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question2.style.display = "none";
  }
});

answerOne4.addEventListener("click", function answerOne4Incorrect() {
 if (question2.style.display === "none") {
    question2.style.display = "block";
    question1.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question2.style.display = "none";
  }
});

const answerTwo1=document.querySelector('#answers2-1');
const answerTwo2=document.querySelector('#answers2-2');
const answerTwo3=document.querySelector('#answers2-3');
const answerTwo4=document.querySelector('#answers2-4');
const question3= document.querySelector('.question3');

answerTwo1.addEventListener("click", function answerTwoCorrect() {
 if (question3.style.display === "none") {
    question3.style.display = "block";
    question2.style.display = "none";
    correctAnswer.style.display = "block";
    incorrectAnswer.style.display = "none";
  }
  else {
    question3.style.display = "none";
  }
});

answerTwo2.addEventListener("click", function answerTwo2Incorrect() {
 if (question3.style.display === "none") {
    question3.style.display = "block";
    question2.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question3.style.display = "none";
  }
});

answerTwo3.addEventListener("click", function answerTwo3Incorrect() {
 if (question3.style.display === "none") {
    question3.style.display = "block";
    question2.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question3.style.display = "none";
  }
});

answerTwo4.addEventListener("click", function answerTwo4Incorrect() {
 if (question3.style.display === "none") {
    question3.style.display = "block";
    question2.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question3.style.display = "none";
  }
});

const answerThree1=document.querySelector('#answers3-1');
const answerThree2=document.querySelector('#answers3-2');
const answerThree3=document.querySelector('#answers3-3');
const answerThree4=document.querySelector('#answers3-4');
const question4= document.querySelector('.question4');

answerThree1.addEventListener("click", function answerThreeCorrect() {
 if (question4.style.display === "none") {
    question4.style.display = "block";
    question3.style.display = "none";
    correctAnswer.style.display = "block";
    incorrectAnswer.style.display = "none";
  }
  else {
    question4.style.display = "none";
  }
});

answerThree2.addEventListener("click", function answerThree2Incorrect() {
 if (question4.style.display === "none") {
    question4.style.display = "block";
    question3.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question4.style.display = "none";
  }
});

answerThree3.addEventListener("click", function answerThree3Incorrect() {
 if (question4.style.display === "none") {
    question4.style.display = "block";
    question3.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question4.style.display = "none";
  }
});

answerThree4.addEventListener("click", function answerThree4Incorrect() {
 if (question4.style.display === "none") {
    question4.style.display = "block";
    question3.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question4.style.display = "none";
  }
});

const answerFour1=document.querySelector('#answers4-1');
const answerFour2=document.querySelector('#answers4-2');
const answerFour3=document.querySelector('#answers4-3');
const answerFour4=document.querySelector('#answers4-4');
const question5= document.querySelector('.question5');

answerFour3.addEventListener("click", function answerFourCorrect() {
 if (question5.style.display === "none") {
    question5.style.display = "block";
    question4.style.display = "none";
    correctAnswer.style.display = "block";
    incorrectAnswer.style.display = "none";
  }
  else {
    question5.style.display = "none";
  }
});

answerFour1.addEventListener("click", function answerFour3Incorrect() {
 if (question5.style.display === "none") {
    question5.style.display = "block";
    question4.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question5.style.display = "none";
  }
});

answerFour2.addEventListener("click", function answerFour3Incorrect() {
 if (question5.style.display === "none") {
    question5.style.display = "block";
    question4.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question5.style.display = "none";
  }
});

answerFour4.addEventListener("click", function answerFour4Incorrect() {
 if (question5.style.display === "none") {
    question5.style.display = "block";
    question4.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    question5.style.display = "none";
  }
});

const answerFive1=document.querySelector('#answers4-1');
const answerFive2=document.querySelector('#answers4-2');
const answerFive3=document.querySelector('#answers4-3');
const answerFive4=document.querySelector('#answers4-4');
const finalScore= document.querySelector('.finalScore');

answerFive3.addEventListener("click", function answerFiveCorrect() {
 if (finalScore.style.display === "none") {
    finalScore.style.display = "block";
    question5.style.display = "none";
    correctAnswer.style.display = "block";
    incorrectAnswer.style.display = "none";
  }
  else {
    finalScore.style.display = "none";
  }
});

answerFour1.addEventListener("click", function answerFive1Incorrect() {
 if (finalScore.style.display === "none") {
    finalScore.style.display = "block";
    question5.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    finalScore.style.display = "none";
  }
});

answerFour2.addEventListener("click", function answerFive2Incorrect() {
 if (finalScore.style.display === "none") {
    finalScore.style.display = "block";
    question5.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    finalScore.style.display = "none";
  }
});

answerFour4.addEventListener("click", function answerFive4Incorrect() {
 if (finalScore.style.display === "none") {
    finalScore.style.display = "block";
    question5.style.display = "none";
    correctAnswer.style.display = "none";
    incorrectAnswer.style.display = "block";
  }
  else {
    finalScore.style.display = "none";
  }
});