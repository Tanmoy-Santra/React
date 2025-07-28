import React, { Component } from 'react'
// import { useParams } from 'react-router-dom'
import Cricketers_all_details from '../Dataset/doc2';
export default class PlayerBio extends Component {
  render() {
    const {playerName}=this.props;
    const player=Cricketers_all_details.find((p)=>{
        p.name===playerName
    });
    if(!player){
        return <h2 style={{ textAlign: 'center' }}>player not found !!</h2>
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>{player.name}</h2>
        <img src={player.image} alt={player.name} style={{ width: '300px', borderRadius: '8px' }} />
        <p><strong>Team:</strong> {player.team}</p>
        <p><strong>Age:</strong> {player.age}</p>
        <p><strong>Runs:</strong> {player.runs}</p>
        <p><strong>Matches Played:</strong> {player.matchPlayed}</p>
      </div>  
      
    )
  }
}
