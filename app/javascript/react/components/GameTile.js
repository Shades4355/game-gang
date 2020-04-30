import React from 'react'
import { Link } from 'react-router-dom'

const GameTile = props => {
  const name = props.name
  const playerNum = props.playerNum
  const id = props.id

  return (
    <div className='callout bg-dark-green cell small-12 medium-4'>
      <Link to={`/games/${id}`}>
        <h4 className='title link-white'>{name}</h4>
      </Link>
      <p className='body'>Number of Players: {playerNum}</p>
    </div>
  )
}

export default GameTile
