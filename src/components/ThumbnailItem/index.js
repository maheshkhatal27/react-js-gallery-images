import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImages, isActive} = props
  const {id, thumbnailAltText, thumbnailUrl} = imageDetails

  const onClickChangeImg = () => {
    updateImages(id)
  }

  const activeTabClassName = isActive ? 'thumbnail-img-active' : ''

  return (
    <li className="img-item">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          className={`thumbnail-img ${activeTabClassName}`}
          alt={thumbnailAltText}
          onClick={onClickChangeImg}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
