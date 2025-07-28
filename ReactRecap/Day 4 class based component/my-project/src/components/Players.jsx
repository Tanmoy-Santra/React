import React, { Component } from 'react';
export default class Players extends Component {
    showBio=(playerName)=>{
        const encodeName=encodeURIComponent(playerName);
        this.props.navigate(`/bio/${encodeName}`)
        
    }

    
    render() {
    console.log(playersDetails);
    const { playersDetails } = this.props;   

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>🏏 Players List</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {playersDetails.map((player, index) => (
            <div onClick={()=>{this.showBio(player.name)}}
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                width: '200px',
                textAlign: 'center'
              }}
            >
              <img
                src={player.image}
                alt={player.name}
                style={{ width: '100%', borderRadius: '6px' }}
              />
              <p><strong>{player.name}</strong></p>
              <p>{player.team}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
