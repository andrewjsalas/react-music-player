import {useState, useEffect} from 'react'
import Player from './components/Player'

function App() {
  const [songs] = useState([
    {
      title: "Black Sabbath",
      artist: 'Black Sabbath',
      img_src: './images/black-sabbath-black-sabbath-cover.jpg',
      music_src: '/songs/black-sabbath-black-sabbath.mp3'
    },
    {
      title: 'Bewitched',
      artist: 'Candlemass',
      img_src: './images/candlemass-nightfall.jpg',
      music_src: './songs/candlemass-bewitched.mp3',
    },
    {
      title: 'Dazed and Confused',
      artist: 'Led Zeppelin',
      img_src: './images/led-zeppelin-I.jpg',
      music_src: './songs/led-zeppelin-dazed-and-confused.mp3'
    },
    {
      title: 'Wont Get Fooled Again',
      artist: 'The Who',
      img_src: './images/the-who-whos-next.jpg',
      music_src: './songs/the-who-wont-get-fooled-again.mp3'
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  // Updates current song
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  )
}

export default App;
