import React, {Component} from 'react';
// import {New} from './new-game.js';
// import RaisedButton from 'material-ui/RaisedButton';
// import New from './new-game.js';

// const styles = {
//   header: {
//     display: 'flex',
//     alignItems: 'center'
//     // backgroundColor: '#1f1f1f'
//   },
//   title: {
//     flex: 1,
//     fontSize: '1.5rem',
//     margin: '1rem',
//     color: 'white'
//   },
//   date: {
//     flex: 1,
//     textAlign: 'right',
//     margin: '1rem',
//     color: 'white'
//   }
// };

/* eslint-disable */
export class Header extends Component {
  constructor(props) {
    super(props);
    this.handleNewGame = this.handleNewGame.bind(this);
  }
  handleNewGame(e) {
    e.preventDefault();
    this.props.newGame();
    this.props.newQuestion();
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Wiki Where</h1>
        </div>
        <div className="new-game-btn">
          <button type="button" ref={el => this.newGame = el} onClick={this.handleNewGame}>
            New Game
          </button>
        </div>
      </div>

    );
  }
}

Header.propTypes = {
  newGame: React.PropTypes.func.isRequired
};
