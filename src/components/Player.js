import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

function Player(props) {
  const audioEl= useRef(null) // Audio Element
  const [isPlaying, setIsPlaying] = useState(false)

  // Handles song play logic
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play()
    } else {
      audioEl.current.pause()
    }
  })

  // Logic for the skip button
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex
        temp++

        if (temp > props.songs.length - 1){
          temp = 0
        }

        return temp

      })
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex
        temp--

        if (temp < 0) {
          temp = props.songs.length - 1
        }

        return temp
      })
    }
  }

  return (
    <div className='c-player'>
      <audio music_src={props.songs[props.currentSongIndex].music_src} ref={audioEl}></audio>
      <h4>Now Playing</h4>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        SkipSong={SkipSong} 
      />
      <p>Next up: <strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</strong></p>
    </div>
  )
}

export default Player