const questions = [
  {
    "question": "which one do you relate to more?",
    "answer1": "i'm more shy and it takes me awhile to warm up to people.",
    "answer1Total": "1",
    "answer2": "i'm really outgoing and I like to talk to people even if it's complete strangers",
    "answer2Total": "2",
    "answer3": "it depends on my mood sometimes i like to go out and sometimes i like to stay inside",
    "answer3Total": "3"

  },
    
  {
    "question": "how do you recharge your social battery?",
    "answer1": "spending time with mysef.",
    "answer1Total": "1",
    "answer2": "spending time with others and socializing.",
    "answer2Total": "2",
    "answer3": "it depends on my mood and who i'm with but i either enjoy being by myself or with others.",
    "answer3Total": "3"
    
  },
    
  {
    "question": "what is your go to method for reaching out to someone.",
    "answer1": "text.",
    "answer1Total": "1",
    "answer2": "in person",
    "answer2Total": "2",
    "answer3": "phone calls/facetime.",
    "answer3Total": "3"

  }, 
    
  {
    "question": "when it comes to your apperance, what do you care the most about?",
    "answer1": "i don't really care.",
    "answer1Total": "1",
    "answer2": "i want to look good and i want others to know that too.",
    "answer2Total": "2",
    "answer3": "i only care what i think about it.",
    "answer3Total": "3"
  },
  
  {
    "question": "what do you do at a party?",
    "answer1": "stand in a corner and only talk to people when they talk to you first",
    "answer1Total": "1",
    "answer2": "be the center of attention and talk to everyone there",
    "answer2Total": "2",
    "answer3": "only talk to people that you've already met before",
    "answer3Total": "3"
  },
    
  {
    "question": "how do you feel about being the center of attention?",
    "answer1": "absoutely hate it",
    "answer1Total": "1",
    "answer2": "i love it i actually think i thrive being it",
    "answer2Total": "2",
    "answer3": "eh... i don't mind it if it's with my close friends but not with other people outside of them.",
    "answer3Total": "3"
  },
    
  {
   "question": "which color tone do you like the most?",
    "answer1": "warmer tones like yellow and red",
    "answer1Total": "1",
    "answer2": "cooler tones like blue and green ",
    "answer2Total": "2",
    "answer3": "i like both warm and cool tones"",
    "answer3Total": "3"
  },
]

let currentQuestion = 0;
let score = []
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

function generateQuestions (index) {
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total; 
    const option3Total = questions[index].answer3Total;
    
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}

function loadNextQuestion () {
    const selectedOption =
          document.querySelector('input[type="radio"]:checked')
    if(!selectedOption){
        alert('please select an answer');
        return;
    }
    
    const answerScore =
Number(selectedOption.nextElementSibling.getAttribute('data-total'));
    score.push(answerScore);
    selectedAnswersData.push()
    const totalScore = score.reduce((total,currentNum) => total+ currentNum); 
    currentQuestion++;
    
    selectedOption.checked = false; 
    if(currentQuestion == totalQuestions-1) {
        nextButton.textContent = 'Finish'; 
    }
    
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML = <h1 class = "you are a strawberry"
        <div class="strawberry">
        <h1> strawberry </h1>
        <p>you are a strawberry because you love your alone time more than anything else in the world, and you prefer to stay inside even when all of your friends beg you to go out. your biggest fear in the world isn't heights or some scary bug but instead it's being the center of attention.'</p>
    }









    