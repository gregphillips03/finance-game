import React from 'react';
import MenuSelect from "./MenuSelect"; 
import TimerBar from "./TimerBar"; 
import Start from "./Start"; 
import "./ArenaGame.css";

const setProp = name => value => obj => ({
  ...obj,
  [name]: value
})

const setProp2 = name1 => name2 => value => obj => ({
  ...obj,
  [name1]: {
    ...obj[name1],
    [name2]: value
  }
})   


//////// State and state functions

const initialState = () => ({
  isRunning: false,
  playerStats: {
    hp: 100,
    maxHp: 100,
    time: 7000,
    attack: 52,
    defense: 38,
    name: "player"
  },
  enemyStats: {
    hp: 42,
    maxHp: 42,
    time: 4000,
    attack: 38,
    defense: 27,
    name: "foe"
  },
  isPlayerTurn: false
})

const setIsRunning = setProp('isRunning')
const setIsPlayerTurn = setProp('isPlayerTurn')
const setPlayerHp = setProp2('playerStats')('hp')
const setEnemyHp =  setProp2('enemyStats')('hp')
//const resetState = () => ({...initialState})

//////// Game component

const styles = {
  mainMenuStyle: {
    flex: 1
  }
}

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.initialState ? {...this.props.initialState} : {...initialState()}
  }
  
  
  onStart() {
    this.setState(setIsRunning(true))
  }
  
  onPlayerTurn() {
    
    this.setState(setIsPlayerTurn(true))
  }
  
  endGame() {
    this.setState(state => initialState())
  }
  
  onEnemyTurn() {
    let newHp = this.getNewHp(this.state.enemyStats, this.state.playerStats)
      
    if (newHp <= 0) {
      this.endGame()
      return
    }
      console.log("enemy", newHp)
    this.setState(setPlayerHp(newHp))
  }
  
  getNewHp(from, to) {
    let seed = Math.random()
    //let damage = Math.floor(Math.max(0, Math.abs(from.attack  - to.defense) * seed))
    let damage = Math.floor(seed * ( (50 - to.defense/4) + Math.max(0, from.attack  - to.defense)/2)) 
    return to.hp - damage
  }
  
  playerAttack() {
            
      let newHp = this.getNewHp(this.state.playerStats, this.state.enemyStats)
      
      if (newHp <= 0) {
        this.endGame()
        return
      }
      
      this.setState(state => setIsPlayerTurn(false)(setEnemyHp(newHp)(state)))
      
    }
  
  render() {
    
    if (!this.state.isRunning) {
      return (
        <div className="game-wrapper">                
          <Start start={this.onStart.bind(this)} />        
        </div>
      )
    }        
    
    return (
      <div className="game-wrapper">        
        <div className="main-game">          
          <MenuSelect
            style={styles.mainMenuStyle}
            active={this.state.isPlayerTurn}
            items={['Attack']}
            onChoice={this.playerAttack.bind(this)}
            renderItem={item => <span>{item}</span>} />
          <MenuSelect
            style={styles.mainMenuStyle}
            active={false}
            items={[this.state.playerStats, this.state.enemyStats]}
            renderItem={stats =>
              <div style={{height: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <span style={{flex: 1}}>{stats.name}</span>
                <TimerBar 
                  style={{flex: 1}} 
                  duration={stats.time}
                  onComplete={ (stats.name === 'player') ? this.onPlayerTurn.bind(this) : this.onEnemyTurn.bind(this) }
                  paused={ stats.name === 'player' && this.state.isPlayerTurn }
                  />
                <span style={{flex: 2, textAlign: 'right'}}> {stats.hp}/{stats.maxHp} HP </span>
              </div>
            }
            >
            
          </MenuSelect>          
        </div>
      </div>
    )    
  }  
}