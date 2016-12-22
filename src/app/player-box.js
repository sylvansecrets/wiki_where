import React, {Component} from 'react';

const styles = {
  container: {
    border: '0px solid red',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px',
    padding: '10px'
  }
};

export class Player extends Component {

  render() {
    return (
      <div style={styles.container}>
        Player 1
        <br/>
        Score: {this.props.playerScore}
      </div>
    );
  }
}

Player.propTypes = {
  playerScore: React.PropTypes.number.isRequired
};