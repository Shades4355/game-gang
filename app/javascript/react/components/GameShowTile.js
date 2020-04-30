import React from 'react'

import ReviewsIndexContainer from './ReviewsIndexContainer'

const GameShowTile = props => {
  const {name, playerNum, description, reviews, photo} = props

  const addGame = () => {
    let gameId = props.id
    fetch(`/api/v1/games/${gameId}/owned_games`, {
      credentials: "same-origin",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return (
    <div>
      <h1 className='cell small-12 title text-white'>
        {name}
      </h1>
      <div>
        <img
          src={photo}
          alt="image"
        />
      </div>
      <br />
      <div className='button' onClick={addGame}>
        Add game to Library
      </div>
      <div className='cell small-12 body'>
        Number of Players: {playerNum}
      </div>
      <div className='cell small-12 body'>
        Description: {description}
      </div>
      <div className='cell small-12'>
        Reviews:
        <ReviewsIndexContainer
          reviews={reviews}
          currentUser={props.currentUser}
        />
      </div>
    </div>
  )
}

export default GameShowTile
