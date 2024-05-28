const questions = [
    {
        "question": "Which one do you relate to more?",
        "answer1": "I'm more shy and it takes me awhile to warm up to people.",
        "answer1Total": "1",
        "answer2": "I'm really outgoing and I like to talk to people even if it's complete strangers",
        "answer2Total": "2",
        "answer3": "It depends on my mood. Sometimes I like to go out and sometimes I like to stay inside",
        "answer3Total": "3"
    },
    {
        "question": "How do you recharge your social battery?",
        "answer1": "Spending time by myself.",
        "answer1Total": "1",
        "answer2": "Spending time with others and socializing.",
        "answer2Total": "2",
        "answer3": "It depends on my mood and who I'm with, but I either enjoy being by myself or with others.",
        "answer3Total": "3"
    },
    {
        "question": "What is your go-to method for reaching out to someone?",
        "answer1": "Text.",
        "answer1Total": "1",
        "answer2": "In person.",
        "answer2Total": "2",
        "answer3": "Phone calls/FaceTime.",
        "answer3Total": "3"
    },
    {
        "question": "When it comes to your appearance, what do you care the most about?",
        "answer1": "I don't really care.",
        "answer1Total": "1",
        "answer2": "I want to look good and I want others to know that too.",
        "answer2Total": "2",
        "answer3": "I only care what I think about it.",
        "answer3Total": "3"
    },
    {
        "question": "What do you do at a party?",
        "answer1": "Stand in a corner and only talk to people when they talk to you first.",
        "answer1Total": "1",
        "answer2": "Be the center of attention and talk to everyone there.",
        "answer2Total": "2",
        "answer3": "Only talk to people that you've already met before.",
        "answer3Total": "3"
    },
    {
        "question": "How do you feel about being the center of attention?",
        "answer1": "Absolutely hate it.",
        "answer1Total": "1",
        "answer2": "I love it. I actually think I thrive being it.",
        "answer2Total": "2",
        "answer3": "Eh... I don't mind it if it's with my close friends but not with other people outside of them.",
        "answer3Total": "3"
    },
    {
        "question": "Which color tone do you like the most?",
        "answer1": "Warmer tones like yellow and red.",
        "answer1Total": "1",
        "answer2": "Cooler tones like blue and green.",
        "answer2Total": "2",
        "answer3": "I like both warm and cool tones.",
        "answer3Total": "3"
    }
];

let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const result = document.querySelector('.result');
const resultTitle = document.querySelector('.result-title');
const resultDescription = document.querySelector('.result-description');

function generateQuestions(index) {
    const question = questions[index];
    questionEl.innerHTML = `${index + 1}. ${question.question}`;
    option1.textContent = question.answer1;
    option2.textContent = question.answer2;
    option3.textContent = question.answer3;
}

function loadNextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an answer');
        return;
    }

    const answerScore = Number(selectedOption.value);
    score += answerScore;
    selectedOption.checked = false;

    currentQuestion++;

    if (currentQuestion === totalQuestions) {
        displayResult();
    } else {
        generateQuestions(currentQuestion);
        if (currentQuestion > 0) {
            previousButton.classList.remove('hidden');
        }
        if (currentQuestion === totalQuestions - 1) {
            nextButton.textContent = 'Finish';
        }
    }
}

function loadPreviousQuestion() {
    if (currentQuestion === 0) return;

    currentQuestion--;
    generateQuestions(currentQuestion);
    nextButton.textContent = 'Next';
    if (currentQuestion === 0) {
        previousButton.classList.add('hidden');
    }
}

function displayResult() {
    container.style.display = 'none';
    result.style.display = 'block';

    if (score <= 7) {
        resultTitle.textContent = 'You are a Strawberry';
        resultDescription.textContent = 'You love your alone time more than anything else in the world, and you prefer to stay inside even when all of your friends beg you to go out. Your biggest fear in the world isn\'t heights or some scary bug but instead it\'s being the center of attention.';
    } else if (score <= 14) {
        resultTitle.textContent = 'You are a Pineapple';
        resultDescription.textContent = 'You enjoy both alone time and socializing. You balance your time between hanging out with friends and recharging on your own.';
    } else {
        resultTitle.textContent = 'You are an Mango';
        resultDescription.textContent = 'You thrive in social settings and love being the center of attention. You gain energy from being around others and enjoy socializing with everyone.';
    }
}

nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);

generateQuestions(currentQuestion);










    