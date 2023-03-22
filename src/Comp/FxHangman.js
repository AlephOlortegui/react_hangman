import { useState } from 'react';

import img0 from "./img/img0.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/img5.png"
import img6 from "./img/img6.png"

import { randomWord } from "./Words";

const FxHangman = () => {
    const {maxWrong, images} = FxHangman.defaultProps
    const [nWrong, setNWrong] = useState(0)
    const [guessed, setGuessed] = useState(new Set())
    const [group, setGroup] = useState('colors')
    const [answer, setAnswer] = useState(randomWord())

    const reset = () => { 
        setNWrong(0)
        setGuessed(new Set())
        setAnswer(randomWord())
        setGroup('colors')
    }

    const guessedWord = () => {
        return answer
          .split("")
          .map(ltr => (guessed.has(ltr) ? ltr : "_"));
    }

    const handleGuess = (e) => {
        let ltr = e.target.value
        const updatedSet = new Set([...guessed, ltr])
        setGuessed(updatedSet)
        setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1))
    }

    const generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={handleGuess}
                disabled={guessed.has(ltr)}>
                {ltr}
            </button>
        ))
    }

    const handleChange = (e) => { 
        const {value} = e.target;
        setGroup(value)
        setAnswer(randomWord(value))
        setNWrong(0)
        setGuessed(new Set())
    }


    let alt = `${nWrong}/${maxWrong} guesses`;
    let isWinner = guessedWord().join("") === answer;
    let gameOver = nWrong >= maxWrong
    let gameState = generateButtons();
    if(isWinner) gameState = "You Won!";
    if(gameOver) gameState = "You Lost!";

  return (
    <div className="Hangman">
        <h1 className="Hangman-title">Hangman {group}</h1>
        <div className="Hangman-flex">
            <div className="Hangman-counter">
                <img src={images[nWrong]} alt={alt} />
                <p>Guessed Wrong: {nWrong}</p>
            </div>
            <div>
                <p className="Hangman-word">
                    {gameOver ? answer : guessedWord()}
                </p>
                <div className="btns">{gameState}</div>
            </div>
            <div className="Hangman-reset">
                <button id='reset' value="colors" onClick={reset}>Restart?</button>
                <form>
                    <label htmlFor="group">Guess About: </label>
                    <select name="group" id="group" value={group} onChange={handleChange}>
                        <option value="colors">Colors</option>
                        <option value="countries">Countries</option>
                        <option value="animals">Animals</option>
                    </select>
                </form>
            </div>
        </div>
    </div>
  )
}

FxHangman.defaultProps = {
    maxWrong: 6,
    images: [img0,img1,img2,img3,img4,img5,img6]
}

export default FxHangman