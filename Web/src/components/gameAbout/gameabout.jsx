const GameAbout = ({ game }) => {
  return (
    <div className="mt-4" style={{ fontFamily: "sans-serif" }}>
      <div className="fw-bold">ABOUT THIS GAME</div>

      <div className="mt-2">
        <strong>{game.description}</strong>
      </div>
      <div className="mt-3 ">
        <div className="mb-2">
          <strong>REQUIREMENTS</strong>
        </div>
        <div>
          <strong>OS: {game.requirement.os.join(", ")}</strong>
        </div>
        <div>
          <strong>Processor: {game.requirement.processor.join(", ")}</strong>
        </div>
        <div>
          <strong>Memory: {game.requirement.memory} GB</strong>
        </div>
        <div>
          <strong>Graphics: {game.requirement.graphics.join(", ")}</strong>
        </div>
      </div>
    </div>
  );
};

export default GameAbout;
