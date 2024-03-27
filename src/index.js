import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './style.css'

const DataQuestion = [

    {

        question: "Comment déclarer une variable en Javascript",
        options: ["let ma_variable= 'exemple'", "'let ma_variable='exemple'"],
        answer: " let ma_variable= 'exemple' "
    },

    {

        question: "Quel est la Capital des USA ?",
        options: ['New York', 'Washington DC'],
        answer: 'Washington DC'
    }

];


const QuizApp = () => {

    const[CurrentQuestionIndex, SetCurrentQuestionIndex] = useState(0);
    const[Score, SetScore] = useState(0);
    const[ShowScore, SetShowScore] = useState(false);


    const HandleAnswerButton = (SelectedOption) => {

        if(SelectedOption === DataQuestion[CurrentQuestionIndex].answer) {

            SetScore(Score + 1);
        }


    const NextQuestionIndex = CurrentQuestionIndex + 1;

    if(NextQuestionIndex < DataQuestion.length) {

        SetCurrentQuestionIndex(NextQuestionIndex);

    }

    else{

        SetShowScore(true);

    }


};

    const RestartQuiz = () => {

        SetCurrentQuestionIndex(0);
        SetScore(0);
        SetShowScore(false);


    }


    return(

        <div>

            {ShowScore ? (

                <div>

                    <h2>Votre Score est de {Score} / {DataQuestion.length}</h2>

                    <br/>
                    <br/>

                    <button onClick={RestartQuiz}>Restart</button>

                </div>

            ):(

                <div>

                    <h2>Question {CurrentQuestionIndex + 1} / {DataQuestion.length} </h2>

                    <br/>
                    <br/>

                    <div>{DataQuestion[CurrentQuestionIndex].question}</div>

                    <br/>
                    <br/>

                    <div>

                        {DataQuestion[CurrentQuestionIndex].options.map((option, index) => (

                            <button key={index} className='AnswerButton' onClick={() => HandleAnswerButton(option)}>{option} </button>



                        ))}


                    </div>



                </div>
                
                
                )}

            


        </div>


    )

}

ReactDOM.render(

    <React.StrictMode>

        <QuizApp/>
    </React.StrictMode>,

    document.getElementById('root')




)