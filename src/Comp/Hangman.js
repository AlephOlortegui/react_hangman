import { Component } from 'react'

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
    state = { nWrong:0, guessed: new Set(), group: 'colors', answer: randomWord() }
    
    reset = () => {
        this.setState({
          nWrong: 0,
          guessed: new Set(),
          answer: randomWord(),
          group: 'colors'
        });
    }

    guessedWord = () => {
        return this.state.answer
          .split("")
          .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
    }

    handleGuess = (e) => {
        let ltr = e.target.value
        this.setState(ps => ({
            guessed: ps.guessed.add(ltr),
            nWrong: ps.nWrong + (ps.answer.includes(ltr) ? 0 : 1)
        }))
    }

    generateButtons = () => { 
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}>
                {ltr}
            </button>
        ))
    }

    handleChange = (e) => { 
        const {value,name} = e.target;
        this.setState({
            [name]: value,
            answer: randomWord(value),
            nWrong: 0,
            guessed: new Set()
        })
    }

    render() { 
        const {maxWrong, images} = this.props;
        const {nWrong, answer, group} = this.state;
        let alt = `${nWrong}/${maxWrong} guesses`;
        let isWinner = this.guessedWord().join("") === answer;
        let gameOver = nWrong >= maxWrong
        let gameState = this.generateButtons();
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
                            {gameOver ? answer : this.guessedWord()}
                        </p>
                        <div className="btns">{gameState}</div>
                    </div>
                    <div className="Hangman-reset">
                        <button id='reset' value="colors" onClick={this.reset}>Restart?</button>
                        <form>
                            <label htmlFor="group">Guess About: </label>
                            <select name="group" id="group" value={group} onChange={this.handleChange}>
                                <option value="colors">Colors</option>
                                <option value="countries">Countries</option>
                                <option value="animals">Animals</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Hangman;