import { useState } from "react";

const GameImagesCarrucel = ({ game }) => {
  const [currentImage, setCurrentImage] = useState(game.multimedia[0].url);

  return (
    <>
      <div className="ratio ratio-16x9">
        <img className="object-fit-cover" src={currentImage} alt={game.name} />;
      </div>
      <div className="row row-cols-3 row-cols-lg-6 g-3 mx-2 mt-1">
        {game.multimedia.map((image, i) => (
          <img
            key={i}
            className="img-fluid rounded"
            src={image.url}
            alt={`Game image ${i + 1}`}
            onClick={() => setCurrentImage(image.url)}
          />
        ))}
      </div>
    </>
  );
};

export default GameImagesCarrucel;
