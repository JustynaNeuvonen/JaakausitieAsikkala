import React, { useState } from 'react';
import './InfoCardWithGallery.css';

const InfoCardWithGallery = ({ mainImg, children, galleryImgs }) => {
  const [current, setCurrent] = useState(0);
  const [modalImg, setModalImg] = useState(null);

  // Show two images at a time, wrap around if needed
  const total = galleryImgs.length;
  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  // Calculate indices for two images
  const secondIndex = (current + 1) % total;

  return (
    <div className="infoCardContainer">
      <img src={mainImg} alt="" className="infoCardMainImg" />
      <div className="infoCardContent">{children}</div>
      <div className="infoCardGallerySlider">
        <button onClick={prev} className="galleryNavBtn">&#8592;</button>
        <div className="galleryImagesWrapper">
          <img
            src={galleryImgs[current]}
            alt={`gallery-${current}`}
            className="infoCardGalleryImg"
            onClick={() => setModalImg(galleryImgs[current])}
            style={{ cursor: 'pointer' }}
          />
          {total > 1 && (
            <img
              src={galleryImgs[secondIndex]}
              alt={`gallery-${secondIndex}`}
              className="infoCardGalleryImg"
              onClick={() => setModalImg(galleryImgs[secondIndex])}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
        <button onClick={next} className="galleryNavBtn">&#8594;</button>
      </div>
      {modalImg && (
        <div className="galleryModal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="big" className="galleryModalImg" />
        </div>
      )}
    </div>
  );
};

export default InfoCardWithGallery;