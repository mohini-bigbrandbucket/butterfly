import { useEffect } from 'react'

export default function VideoModal({ videoId, onClose }) {
  const isOpen = Boolean(videoId)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className={`video-modal ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen}>
      <div className="video-modal-backdrop" onClick={onClose}></div>
      <div className="video-modal-dialog">
        <button className="video-modal-close" aria-label="Close modal" onClick={onClose}>
          &times;
        </button>
        <div className="video-modal-body">
          {isOpen && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title="EFT Training Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  )
}
