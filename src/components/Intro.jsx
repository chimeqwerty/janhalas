import { useState } from 'react'

const base = import.meta.env.BASE_URL || '/'

function Intro({ data }) {
  const [photoError, setPhotoError] = useState(false)
  const photoSrc = data.photo && !photoError ? `${base}${data.photo.replace(/^\//, '')}` : null

  return (
    <header id="intro" className="intro section">
      <div className="intro__inner">
        <div className="intro__text">
          <h1 className="intro__name">{data.name}</h1>
          <p className="intro__tagline">{data.tagline}</p>
          <p className="intro__bio">{data.bio}</p>
        </div>
        {data.photo && (
          <div className="intro__photo-wrap" style={{ display: photoError ? 'none' : undefined }}>
            <img
              src={`${base}${data.photo.replace(/^\//, '')}`}
              alt={data.name}
              className="intro__photo"
              onError={() => setPhotoError(true)}
            />
          </div>
        )}
      </div>
    </header>
  )
}

export default Intro
