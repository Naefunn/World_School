import { useState } from "react";

const AfricaQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);


    const handleAnswerButtonClick = (answerOption) => {

        if (answerOption){
            setScore(score + 1);
        };

        if (answerOption){
            alert("This is correct");
        } else {
            alert("This is wrong, try again!");
            setCurrentQuestion = currentQuestion
        };
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert('you reached the end of the quiz');
        }
    };


    const questions = [
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/za.svg",
            answerOptions: [
                {answerText: "Nigeria", isCorrect: false},
                {answerText: "Cameroon", isCorrect: false},
                {answerText: "South Africa", isCorrect: true},
                {answerText: "Senegal", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/ng.svg",
            answerOptions: [
                {answerText: "Senegal", isCorrect: false},
                {answerText: "Kenya", isCorrect: false},
                {answerText: "Nigeria", isCorrect: true},
                {answerText: "Ghana", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/ma.svg",
            answerOptions: [
                {answerText: "Kenya", isCorrect: false},
                {answerText: "Morocco", isCorrect: true},
                {answerText: "Senegal", isCorrect: false},
                {answerText: "Ghana", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/fr.svg",
            answerOptions: [
                {answerText: "France", isCorrect: true},
                {answerText: "Germany", isCorrect: false},
                {answerText: "United Kingdom", isCorrect: false},
                {answerText: "Italy", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/nl.svg",
            answerOptions: [
                {answerText: "Holland", isCorrect: true},
                {answerText: "Germany", isCorrect: false},
                {answerText: "United Kingdom", isCorrect: false},
                {answerText: "Italy", isCorrect: false}
            ]
        }
    ]

return (
    <>
    <div>{score}</div>
    <div className='question-text'>{questions[currentQuestion].questionText}</div>
    <img src={questions[currentQuestion].flagImage} className="question-image"/>
    <div className='answer-section'>
	{questions[currentQuestion].answerOptions.map((answerOption, index) => (
		<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	))}
</div>
    
    </>
)
};

export default AfricaQuiz;