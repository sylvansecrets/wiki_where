import React, {Component} from 'react';
import {Header} from './header';
import Alkali from './cesium.js';
import {Player} from './player-box.js';
import {Trivia} from './trivia.js';
//eslint-disable-next-line
import {addHint, newQuestion, setPlayerAnswerCoords, newGame, submitGuess} from './actions/stateActions.js';

export const MAX_HINT = 3;
export const MAX_QUESTION = 5;

export class Main extends Component {
  constructor(props) {
    super(props);
    /*
    the state will contain
    gameState -> one of 'uninitiated', 'initial', 'questioning', 'answered', 'end'
    questionList -> [String] of length MAX_HINT
    currentDistance -> distance the guess is from the answer, in kilometers
    hintCount -> int between 0, MAX_HINT
    score -> int representing the current score
    difficulty -> one of 'easy', 'hard'
    answer -> coordinates in the format [longitude, latitude]
    playerAnswer -> coordiates in the format [longitude, latitude]
    answerCity -> String of city name
    */
    this.state = {
      data: {
        gameState: 'uninitiated',
        questionList: ['Question 1', 'Question 2', 'Question 3'],
        scoreToAdd: 0,
        currentDistance: 0,
        playerAnswer: [0.0, 0.0],
        answer: [45.0, 45.0],
        answerCity: 'None',
        questionCount: 0,
        hintCount: 0,
        score: 0,
        difficulty: 'easy'
      }
    };

    this.addHint = addHint.bind(this);
    this.newQuestion = newQuestion.bind(this);
    this.setPlayerAnswerCoords = setPlayerAnswerCoords.bind(this);
    this.handleGuess = submitGuess.bind(this);
    this.newGame = newGame.bind(this);
  }

  render() {
    return (
      <div>
        <div className="globe">
          <Alkali
            setPlayerAnswerCoords={this.setPlayerAnswerCoords}
            playerAnswerCoords={this.state.data.playerAnswer}
            correctAnswerCoords={this.state.data.answer}
            gameState={this.state.data.gameState}
            />
        </div>
        <Header
          newGame={this.newGame}
          newQuestion={this.newQuestion}
          />
        <div className="main row">
          <div>
            <Player
              playerScore={this.state.data.score}
              />
            <Trivia
              stateData={this.state.data}
              addHint={this.addHint}
              newQuestion={this.newQuestion}
              setPlayerAnswerCoords={this.setPlayerAnswerCoords}
              />
          </div>
        </div>
        <div>
        {// eslint-disable-next-line}
          <button className="submit-btn" onClick={this.handleGuess}>Submit</button>
        }
        </div>
      </div>
    );
  }
}
