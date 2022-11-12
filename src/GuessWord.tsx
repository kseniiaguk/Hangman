import React from 'react';
import './GuessWord.css'

interface IGuessWord {
    word: string,
    chosenLetters: string[],
    winStatus: boolean,
    loseStatus: boolean
}

const GuessWord: React.FC<IGuessWord> = ({word, chosenLetters, winStatus, loseStatus}) => {
    return (
        <div className='guess-word container'>
            {word.split("").map(letter =>
            <span className='guess-word letter container' >
                <span className={'guess-word letter vis' + 
                ((! chosenLetters.includes(letter.toUpperCase())) ? (loseStatus ? ' revealed ' : ' hidden ') : (winStatus ? ' win ' : ''))}>{letter}
                </span>
                </span>)}
        </div>
    );
};

export default GuessWord;