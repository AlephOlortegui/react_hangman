import React, { Component } from 'react'
import './Hangman.css'

import img0 from "./img/img0.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/img5.png"
import img6 from "./img/img6.png"

import { randomWord } from "./Words";

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [img0,img1,img2,img3,img4,img5,img6]
    }
    state = { nWrong:0, guessed: new Set(), answer: randomWord() } 

    reset = () => {
        this.setState({
          nWrong: 0,
          guessed: new Set(),
          answer: randomWord()
        });
    }

    /** guessedWord: show current-state of word:
        if guessed letters are {a,p,e}, show "app_e" for "apple"
    */
    guessedWord() {
        return this.state.answer
          .split("")
          .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
      }


    /** handleGuest: handle a guessed letter:
        - add to guessed letters
        - if not in answer, increase number-wrong guesses
    */
    handleGuess = (e) => { 
        let ltr = e.target.value;
        this.setState(prevState => ({
            guessed: prevState.guessed.add(ltr),
            nWrong: prevState.nWrong + (prevState.answer.includes(ltr) ? 0 : 1)
        }))
     }

    generateButtons = () => { 
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}>
                {ltr}
            </button>
        ))
    }

    render() { 
        const {images, maxWrong} = this.props;
        const {nWrong, answer} = this.state;
        let alt = `${nWrong}/${maxWrong} guesses`;
        let gameOver = nWrong >= maxWrong
        let isWinner = this.guessedWord().join("") === this.state.answer;
        let gameState = this.generateButtons();
        if(isWinner) gameState = "You Won!";
        if(gameOver) gameState = "You Lost!";

        return (
            <div className="Hangman">
                <h1>Hangman</h1>
                <img src={images[nWrong]} alt={alt} />
                <p>Guessed Wrong: {nWrong}</p>
                <p className='Hangman-word'>
                    {!gameOver ? this.guessedWord() : answer}
                </p>
                <p className="btns">{gameState}</p>
                <button id='reset' onClick={this.reset}>Restart?</button>
            </div>
        );
    }
}
 
export default Hangman;