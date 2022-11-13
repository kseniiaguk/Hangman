import React, { useEffect, useState } from 'react';
import './App.css';
import ruWords from './ru.json';
import engWords from './eng.json';
import GuessWord from './GuessWord';
import DrawingHangman from './DrawingHangman';
import Keyboard from './Keyboard';


function App() {

  const [lang, setLang] = useState<number>(0);
  const words: typeof ruWords | typeof engWords = lang === 0 ? engWords : ruWords;
  const [guessWord, setGuessWord] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  const [chosenLetters, setChosenLetters] = useState<string[]>([]);
  const wrongLetters: string[] = chosenLetters.filter(letter => !(guessWord.includes(letter.toLowerCase())));
  const winPhrase = lang === 0 ? "Win! Refresh to try again" : "Победа! Обновите страницу, чтобы попробовать снова";
  const losePhrase = lang === 0 ? "Nice try... Refresh to try again" : "Вы пытались... Обновите страницу, чтобы попробовать снова";

  useEffect(() => {
    setChosenLetters([]);
    setGuessWord(words[Math.floor(Math.random() * words.length)]);
  },
    [lang, words]
  )

  function addLetter(letter: string) {
    setChosenLetters(currentLetters => [...currentLetters, letter]);
  }

  const winStatus: boolean = guessWord.split("").every(letter => chosenLetters.includes(letter.toUpperCase()));
  const loseStatus: boolean = wrongLetters.length >= 6;


  return (
    <div className="App">
      <div className='top-bar'>
        <span className='status'>{winStatus ? winPhrase : (loseStatus ? losePhrase : '')}</span>
        <select className='select-language' onChange={event => {
          setLang(Number(event.target.value));
        }}>
          <option className='option-language' value='0'>{lang === 0 ? 'english' : 'английский'}</option>
          <option className='option-language' value='1'>{lang === 0 ? 'russian' : 'русский'}</option>
        </select>
      </div>
      <DrawingHangman wrongLettersNum={wrongLetters.length} />
      <GuessWord
        word={guessWord}
        chosenLetters={chosenLetters}
        loseStatus={loseStatus}
        winStatus={winStatus} />
      <div className='keyboard'>
        <Keyboard
          status={winStatus || loseStatus}
          lang={lang}
          guessWord={guessWord}
          chosenLetters={chosenLetters}
          addLetter={addLetter} />
      </div>
    </div>
  );
}

export default App;
