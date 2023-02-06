import {AiOutlineDelete} from 'react-icons/ai'

const PlayLists = props => {
  const {songDetails, deletePlayList} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDelButton = () => {
    deletePlayList(id)
  }

  return (
    <li className="playlist-container">
      <div className="track-details-container">
        <div className="song-cover-container">
          <img src={imageUrl} alt="track" className="cover-image" />
        </div>
        <div>
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-and-del-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="del-button"
          onClick={onClickDelButton}
          data-testid="delete"
        >
          <AiOutlineDelete className="del-icon" />
        </button>
      </div>
    </li>
  )
}

export default PlayLists
