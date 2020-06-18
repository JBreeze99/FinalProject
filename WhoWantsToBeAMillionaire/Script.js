const ButtonStart = document.getElementById('start-btn');
const ButtonNext = document.getElementById('next-btn');
const QuestionContainer = document.getElementById('question-container');
const Questions = document.getElementById('question');
const AnswerButtons = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex=1, Score=0;


ButtonStart.addEventListener('click', startGame);
ButtonNext.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion()
});

function startGame() {
    ButtonStart.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    QuestionContainer.classList.remove('hide');
    setNextQuestion();
    Score=0
    currentQuestionIndex=1
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    Questions.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        AnswerButtons.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body);
    ButtonNext.classList.add('hide');
    while (AnswerButtons.firstChild) {
        AnswerButtons.removeChild(AnswerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(AnswerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        ButtonNext.classList.remove('hide')
    } else {
        ButtonStart.innerText = 'Restart';
        ButtonStart.classList.remove('hide')
    }
    if(selectedButton.dataset=correct){
        Score++;
    }
    document.getElementById('right-answer').innerHTML=Score;
    document.getElementById('NumberQuestions').innerText=currentQuestionIndex;
}
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong')
}

const questions=[
    {question: 'What is the professors name?',
        answers: [
            {text: 'Pawel', correct: true},
            {text: 'Karol', correct: false},
            {text: 'Piotr', correct: false},
            {text: 'Sebastian', correct: false}
        ]
    },
    {question: "Who cracked the enigma code?",
        answers: [
            {text: 'Adam Niles', correct: false},
            {text: 'Peter Brent', correct: false},
            {text: 'Alan Turing', correct: true},
            {text: 'George Kitchener', correct: false}
        ]
    },
    {question: "What is considered the first high level programming language?",
        answers: [
            {text: 'Java', correct: false},
            {text: 'Short Code', correct: false},
            {text: 'Python', correct: false},
            {text: 'Plankakul', correct: true}
        ]
    },
    {
        question: "What is the capital of Serbia?",
        answers: [
            {text: 'Belgrade', correct: true},
            {text: 'Kosovo', correct: false},
            {text: 'Zagreb', correct: false},
            {text: 'Tirana', correct: false}
        ]
    },
    {
        question: "What is the world's first commercial computer?",
        answers: [
            {text: 'MacOs 1', correct: false},
            {text: 'Windows 90', correct: false},
            {text: 'IMB 88', correct: false},
            {text: 'ENIAC', correct: true}
        ]
    },
    {
        question: "What year was SGH founded?",
        answers: [
            {text: '1905', correct: false},
            {text: '1984', correct: false},
            {text: '1906', correct: true},
            {text: '1920', correct: false}
        ]
    },
    {
        question: "Who wrote Information Flow in Large Communication Nets?",
        answers: [
            {text: 'Bert Heidemberg', correct: false},
            {text: 'Moses Goldstein', correct: false},
            {text: 'Leonard Kleinrock', correct: true},
            {text: 'Sebastian Miroslavic', correct: false}
        ]
    },
    {
        question: "What happened on October 29, 1969?",
        answers: [
            {text: 'Invasion of Ho Chi Mihn City', correct: false},
            {text: 'First message through internet', correct: true},
            {text: 'Death of Alan Turing', correct: false},
            {text: 'First Gb of info is created', correct: false}
        ]
    },
    {
        question: "What is the professor's surname?",
        answers: [
            {text: 'Radom', correct: false},
            {text: 'Kriszek', correct: false},
            {text: 'Rubach', correct: true},
            {text: 'Homeda', correct: false}
        ]
    },
    {
        question: "What is the capital of Turkmenistan",
        answers: [
            {text: 'Kabul', correct: false},
            {text: 'Ashgabat', correct: true},
            {text: 'Astana', correct: false},
            {text: 'Bishkek', correct: false}
        ]
    },
    {
        question: "Where was Bill Gates born?",
        answers: [
            {text: 'Seattle', correct: true},
            {text: 'Washington D.C.', correct: false},
            {text: 'Kingston upon Hull', correct: false},
            {text: 'New York', correct: false}
        ]
    },
    {
        question: "What is the biggest computer in the world called?",
        answers: [
            {text: 'Summit IBM', correct: true},
            {text: 'Horizon Microsoft', correct: false},
            {text: 'Steve MacIntosh', correct: false},
            {text: 'NUDT Tianhe-2', correct: false}
        ]
    },
    {
        question: "What is the tallest building in Warsaw?",
        answers: [
            {text: 'Warsaw Spire', correct: false},
            {text: 'Palace of Culture', correct: true},
            {text: 'Warsaw Trade Tower', correct: false},
            {text: 'Q22', correct: false}
        ]
    },
    {
        question: "How tall is the Palace of Culture and Science?",
        answers: [
            {text: '237', correct: true},
            {text: '224', correct: false},
            {text: '246', correct: false},
            {text: '282', correct: false},
        ]
    },
    {
        question: "What year did the battle of Hastings take place?",
        answers: [
            {text: '1223', correct: false},
            {text: '1207', correct: false},
            {text: '1066', correct: true},
            {text: '1120', correct: false}
        ]
    },
    {
        question: "Who was the last Anglo-Saxon king of England?",
        answers: [
            {text: 'Harold II', correct: true},
            {text: 'Edward I', correct: false},
            {text: 'Edmund III', correct: false},
            {text: 'William II', correct: false}
        ]
    },
    {
        question: "Who was the last Catholic king of England?",
        answers: [
            {text: 'James II', correct: true},
            {text: 'Mary I', correct: false},
            {text: 'Henry VII', correct: false},
            {text: 'Henry VIII', correct: false}
        ]
    },
    {
        question: "What year did the battle of Tours/Poitiers take place?",
        answers: [
            {text: '847', correct: false},
            {text: '764', correct: false},
            {text: '732', correct: true},
            {text: '593', correct: false}
        ]
    },
    {
        question: "What is the circumference of the earth?",
        answers: [
            {text: '40230', correct: false},
            {text: '41500', correct: false},
            {text: '40075', correct: true},
            {text: '45210', correct: false}
        ]
    },
    {
        question: "What is Le Corbusier's profession?",
        answers: [
            {text: 'Painter', correct: false},
            {text: 'Poet', correct: false},
            {text: 'Architect', correct: true},
            {text: 'Politician', correct: false}
        ]
    },
    {
        question: "Who is the greek goddess of Marriage?",
        answers: [
            {text: 'Helena', correct: false},
            {text: 'Hera', correct: true},
            {text: 'Athena', correct: false},
            {text: 'Artemis', correct: false}
        ]
    },
    {
        question: "Who directed: The man who shot Liberty Balance?",
        answers: [
            {text: 'John Wayne', correct: false},
            {text: 'Clint Eastwood', correct: false},
            {text: 'John Ford', correct: true},
            {text: 'Anthony Mann', correct: false}
        ]
    },
    {
        question: "What year was Everest first climbed?",
        answers: [
            {text: '1937', correct: false},
            {text: '1950', correct: false},
            {text: '1949', correct: false},
            {text: '1953', correct: true}
        ]
    },
    {
        question: "How many popes have there been?",
        answers: [
            {text: '254', correct: false},
            {text: '302', correct: false},
            {text: '297', correct: false},
            {text: '266', correct: true}
        ]
    },
    {
        question: "Who was the last king of Poland?",
        answers: [
            {text: 'Boleslaw', correct: false},
            {text: 'Augustus III', correct: false},
            {text: 'Stanislaw II', correct: true},
            {text: 'Mieszko I', correct: false}
        ]
    },
    {
        question: "What is the name of the capital of Papua New Guinea?",
        answers: [
            {text: 'Port Principe', correct: false},
            {text: 'Honiara', correct: false},
            {text: 'Mogadishu', correct: false},
            {text: 'Port Moresby', correct: true}
        ]
    },
    {
        question: "What is the tallest mountain in Europe?",
        answers: [
            {text: 'Shkara', correct: false},
            {text: 'Kazbek', correct: false},
            {text: 'Mon Blanc', correct: false},
            {text: 'Elbrus', correct: true}
        ]
    },
    {
        question: "Who painted Water Lilies?",
        answers: [
            {text: 'Manet', correct: false},
            {text: 'Monet', correct: true},
            {text: 'Sisley', correct: false},
            {text: 'Pizarro', correct: false}
        ]
    },
    {
        question: "Who is the roman god of fire?",
        answers: [
            {text: 'Hades', correct: false},
            {text: 'Ares', correct: false},
            {text: 'Hephaestus', correct: false},
            {text: 'Vulcan', correct: true}
        ]
    },
    {
        question: "What century was Paris founded?",
        answers: [
            {text: 'I B.C.', correct: false},
            {text: 'I D.C.', correct: false},
            {text: 'II B.C.', correct: false},
            {text: 'III B.C.', correct: true}
        ]
        // score = score + quiz[countRightAnswers].answer[i];
},
    {question: 'How many NBA championships did Jordan win in the Chicago Bulls?',
        answers: [
            {text: '7', correct: false},
            {text: '5', correct: false},
            {text: '8', correct: false},
            {text: '6', correct: true}
        ]
    },
    {question: "Where was Napoleon Bonaparte born?",
        answers: [
            {text: 'Paris', correct: false},
            {text: 'Bourdeaux', correct: false},
            {text: 'Corsica', correct: true},
            {text: 'St. Helena', correct: false}
        ]
    },
    {question: "Who was the last tsar of Russia?",
        answers: [
            {text: 'Vladimir VI', correct: false},
            {text: 'Vladimir VII', correct: false},
            {text: 'Nicholas III', correct: false},
            {text: 'Nicholas II', correct: true}
        ]
    },
    {
        question: "What is the capital of Navarre?",
        answers: [
            {text: 'Pamplona', correct: true},
            {text: 'Tours', correct: false},
            {text: 'Toledo', correct: false},
            {text: 'Estella', correct: false}
        ]
    },
    {
        question: "Where is Chopin's heart buried?",
        answers: [
            {text: 'Paris', correct: false},
            {text: 'Viena', correct: false},
            {text: 'London', correct: false},
            {text: 'Warsaw', correct: true}
        ]
    },
    {
        question: "When did the Peasants' Revolt happen?",
        answers: [
            {text: 'XVII century', correct: false},
            {text: 'XV century', correct: false},
            {text: 'XIV century', correct: true},
            {text: 'XVIII century', correct: false}
        ]
    },
    {
        question: "Which part of Berlin was enclosed by the wall?",
        answers: [
            {text: 'North', correct: false},
            {text: 'East', correct: false},
            {text: 'West', correct: true},
            {text: 'South', correct: false}
        ]
    },
    {
        question: "When did the Vietnam war end?",
        answers: [
            {text: '1980', correct: false},
            {text: '1979', correct: false},
            {text: '1970', correct: false},
            {text: '1975', correct: true}
        ]
    },
    {
        question: "What language have we learnt during this semester?",
        answers: [
            {text: 'Python', correct: false},
            {text: 'C', correct: false},
            {text: 'JavaScript', correct: true},
            {text: 'Java', correct: false}
        ]
    },
    {
        question: "When did the Korean war start",
        answers: [
            {text: '1953', correct: false},
            {text: '1950', correct: true},
            {text: '1955', correct: false},
            {text: '1960', correct: false}
        ]
    },
    {
        question: "Where was Bill Clinton born?",
        answers: [
            {text: 'Arkansas', correct: true},
            {text: 'Wyoming.', correct: false},
            {text: 'Colorado', correct: false},
            {text: 'South Carolina', correct: false}
        ]
    },
    {
        question: "What is the biggest computer in the world called?",
        answers: [
            {text: 'Summit IBM', correct: true},
            {text: 'Horizon Microsoft', correct: false},
            {text: 'Steve MacIntosh', correct: false},
            {text: 'NUDT Tianhe-2', correct: false}
        ]
    },
    {
        question: "When was Francisco Franco born?",
        answers: [
            {text: '1895', correct: false},
            {text: '1892', correct: true},
            {text: '1900', correct: false},
            {text: '1888', correct: false}
        ]
    },
    {
        question: "According to carlists,W ho is the rightful king of Spain?",
        answers: [
            {text: 'Carlos VII', correct: false},
            {text: 'Felipe II', correct: false},
            {text: 'Juan Carlos I', correct: false},
            {text: 'Sixto', correct: true},
        ]
    },
    {
        question: "What year did the USA invade Iraq?",
        answers: [
            {text: '2002', correct: false},
            {text: '2001', correct: false},
            {text: '2003', correct: true},
            {text: '2005', correct: false}
        ]
    },
    {
        question: "When did the last concert perfomed by Queen take place?",
        answers: [
            {text: 'December 1988', correct: false},
            {text: 'August 1986', correct: true},
            {text: 'June 1987', correct: false},
            {text: 'July 1985', correct: false}
        ]
    },
    {
        question: "Who was the last Catholic king of England?",
        answers: [
            {text: 'James II', correct: true},
            {text: 'Mary I', correct: false},
            {text: 'Henry VII', correct: false},
            {text: 'Henry VIII', correct: false}
        ]
    },
    {
        question: "When did James Dean die?",
        answers: [
            {text: 'June 23, 1954', correct: false},
            {text: 'June 23, 1956', correct: false},
            {text: 'September 30, 1955', correct: true},
            {text: 'June 23, 1955', correct: false}
        ]
    },
    {
        question: "Where did Elvis Presley die?",
        answers: [
            {text: 'Tennesse', correct: true},
            {text: 'Michigan', correct: false},
            {text: 'Delaware', correct: false},
            {text: 'He is still alive', correct: true}
        ]
    },
    {
        question: "What was Kierkegaards profession?",
        answers: [
            {text: 'Painter', correct: false},
            {text: 'Poet', correct: false},
            {text: 'Philosopher', correct: true},
            {text: 'Politician', correct: false}
        ]
    },
    {
        question: "What killed Bob Marley?",
        answers: [
            {text: 'Drug overdose', correct: false},
            {text: 'Cancer', correct: true},
            {text: 'He was killed', correct: false},
            {text: 'Car accident', correct: false}
        ]
    },
    {
        question: "Where was Carl Gauss from?",
        answers: [
            {text: 'Russia', correct: false},
            {text: 'Austria', correct: false},
            {text: 'Germany', correct: true},
            {text: 'Sweden', correct: false}
        ]
    },
    {
        question: "What year was K2 first climbed?",
        answers: [
            {text: '1937', correct: false},
            {text: '1954', correct: true},
            {text: '1949', correct: false},
            {text: '1953', correct: false}
        ]
    },
    {
        question: "When did Muhammad Ali die?",
        answers: [
            {text: '2016', correct: true},
            {text: '2000', correct: false},
            {text: '1972', correct: false},
            {text: '1990', correct: false}
        ]
    },
    {
        question: "What is a Kakapo?",
        answers: [
            {text: 'Type of flower', correct: false},
            {text: 'Type of insect', correct: false},
            {text: 'Type of bird', correct: true},
            {text: 'Type of amphibian', correct: false}
        ]
    },
    {
        question: "What is the name of the capital of Bhutan?",
        answers: [
            {text: 'Gangtey', correct: false},
            {text: 'Honiara', correct: false},
            {text: 'Punakha', correct: false},
            {text: 'Timphu', correct: true}
        ]
    },
    {
        question: "What is the tallest mountain in Poland?",
        answers: [
            {text: 'Miedziane', correct: false},
            {text: 'Kozi Wierch', correct: false},
            {text: 'Klin', correct: false},
            {text: 'Rysy', correct: true}
        ]
    },
    {
        question: "Who painted Salisbury Cathedral from the Bishop's Grounds?",
        answers: [
            {text: 'Constable', correct: true},
            {text: 'Hogarth', correct: false},
            {text: 'Blake', correct: false},
            {text: 'Cotman', correct: false}
        ]
    },
    {
        question: "Who wrote the book Orthodoxy?",
        answers: [
            {text: 'Karl Marx', correct: false},
            {text: 'G.K. Chesterton', correct: true},
            {text: 'Leon Bloy', correct: false},
            {text: 'C. S. Lewis', correct: false}
        ]
    },
    {
        question: "What century was Warsaw founded?",
        answers: [
            {text: 'XII D.C.', correct: false},
            {text: 'XIV D.C.', correct: false},
            {text: 'XI D.C.', correct: false},
            {text: 'XIII D.C.', correct: true}
        ]
        // score = score + quiz[countRightAnswers].answer[i];
    }
];