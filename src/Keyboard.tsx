import React, { useCallback, useEffect } from 'react';
import './Keyboard.css'

interface IKeyboard {
    lang: number,
    chosenLetters: string[],
    guessWord: string,
    addLetter: (letter: string) => void,
    status: boolean
}

const Keyboard: React.FC<IKeyboard> = ({ lang, chosenLetters, guessWord, addLetter, status }) => {

    const keyboardAddLetter = useCallback((letter: string) => {
        if (status || chosenLetters.includes(letter)) {
            return
        }
        addLetter(letter);
    }, [chosenLetters])

    useEffect(() => {
        function keyDownHandler(event: KeyboardEvent) {
            if (lang === 0 && !event.key.match(/^[a-z]$/)) { return }
            if (lang === 1 && !event.key.match(/^[а-я]$/)) { return }
            event.preventDefault();
            keyboardAddLetter(event.key.toUpperCase());
        }
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        }
    },
        [chosenLetters])

    const lettersEng: string[] = [];
    const lettersRu: string[] = [];
    for (let i = 0; i < 32; i++) {
        if (i < 26) {
            lettersEng.push(String.fromCharCode(65 + i))
        }
        lettersRu.push(String.fromCodePoint(1040 + i))
    }

    function renderKey(letter: string) {
        const chosen = chosenLetters.includes(letter);
        const keyState = guessWord.includes(letter.toLowerCase())
        return <button className={' key ' + (chosen ? (keyState ? ' correct ' : ' incorrect ') : '')}
            disabled={chosen || (status)}
            key={letter}
            onClick={() => keyOnClick(letter)}
        >{letter}</button>
    }

    function keyOnClick(key: string) {
        addLetter(key);
    }

    const letters: string[] = lang === 0 ? lettersEng : lettersRu;

    return (
        <div className='keys'>
            {letters.map(letter => renderKey(letter))}
        </div>
    );
};

export default Keyboard;