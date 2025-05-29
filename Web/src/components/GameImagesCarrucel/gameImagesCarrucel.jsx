import React, { useState } from 'react';

const GameImagesCarrucel = ({ game }) => {
  
  
  // Combinar mainImage con multimedia en un solo array
  const allImages = [
    ...(game?.multimedia?.map(media => media.url) || [])
  ].filter(url => url); // Filtrar URLs vacías
  const [currentImage, setCurrentImage] = useState(allImages[0] || '');

  return (
    <div>
      {/* Imagen principal */}
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <img
          src={currentImage || "https://via.placeholder.com/800x450?text=No+Image"}
          style={{
            width: '100%',
            height: '700px',
            objectFit: 'cover',
            objectPosition: 'center top',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
          alt="Imagen principal del juego"
        />
      </div>

      {/* Miniaturas - todas con el mismo tamaño */}
      {allImages.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '10px 0'
        }}>
          {allImages.map((imageUrl, index) => (
            <div 
              key={index}
              style={{
                width: '270px',
                height: '190px',
                cursor: 'pointer',
                border: currentImage === imageUrl ? '2px solid #6200ea' : '2px solid transparent',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setCurrentImage(imageUrl)}
            >
              <img
                src={imageUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '2px'
                }}
                alt={`Miniatura ${index + 1}`}
                onMouseOver={(e) => e.currentTarget.parentNode.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.parentNode.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameImagesCarrucel;